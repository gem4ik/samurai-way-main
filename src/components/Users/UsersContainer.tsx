import {connect} from "react-redux";
import {AppDispatch, RootStateType} from "../../Data/redux";
import {Users} from "./Users";
import {UserType} from "../../Data/Types";
import {setFollowTC, setUnfollowTC, setUsersTC} from "../../Data/UsersReducer";
import React from "react";
import {withAuthHOK} from "../../Data/withAuthHOK";
import {compose} from "redux";
import {
    getCurrentPage, getIsAuth,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Data/Selectors/users-selectors";

export type UsersAPIType = {
    componentDidMount: () => void
    render: () => JSX.Element
}

class UsersAPIComponent extends React.Component<UsersPropsType, UsersAPIType> {
    componentDidMount() {
        this.props.setUsersTC(this.props.pageSize, this.props.currentPage)
    }
    onPageChange = (pageNumber: number) => {
        this.props.setUsersTC(this.props.pageSize, pageNumber)
    }
    follow = (userID: number) => {
        this.props.setFollowTC(userID)
    }
    unfollow = (userID: number) => {
        this.props.setUnfollowTC(userID)
    }

    render() {
        console.log('render')
        return <Users user={this.props.users}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      setCurrentPage={this.onPageChange}
                      setFollow={this.follow}
                      setUnfollow={this.unfollow}
                      isAuth={this.props.isAuth}
                      isLoading={this.props.isLoading}/>
    }
}

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setUsersTC: (pageSize: number, currentPage: number) => void
    setFollowTC: (userId: number) => void
    setUnfollowTC: (userId: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
function mapStateToProps(state: RootStateType): mapStateToPropsType {
    console.log("mstp")
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        isAuth: getIsAuth(state)
    }
}
function mapDispatchToProps(dispatch: AppDispatch): mapDispatchToPropsType {
    return {
        setUsersTC: (pageSize: number, currentPage: number) => {
            dispatch(setUsersTC(pageSize, currentPage))
        },
        setFollowTC: (userId: number) => {
            dispatch(setFollowTC(userId))
        },
        setUnfollowTC: (userId: number) => {
            dispatch(setUnfollowTC(userId))
        }
    }
}

export default compose<React.ComponentType>(
    withAuthHOK,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersAPIComponent)