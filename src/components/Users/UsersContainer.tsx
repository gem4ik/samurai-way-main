import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../Data/redux";
import {Users} from "./Users";
import {UserType} from "../../Data/Types";
import {setFollowTC, setUnfollowTC, setUsersTC} from "../../Data/UsersReducer";
import React from "react";

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
        return <Users user={this.props.users}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      setCurrentPage={this.onPageChange}
                      setFollow={this.follow}
                      setUnfollow={this.unfollow}
                      isLoading={this.props.isLoading}/>
    }
}

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}
type mapDispatchToPropsType = {
    setUsersTC: (pageSize: number, currentPage: number) => void
    setFollowTC: (userId: number) => void
    setUnfollowTC: (userId: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: RootStateType): mapStateToPropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
    }
}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)