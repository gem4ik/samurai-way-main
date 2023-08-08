import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ActionsType} from "../../Data/redux";
import {Users} from "./Users";
import {UserType} from "../../Data/Types";
import {
    followAC,
    setCurrentPageAC,
    setIsLoading,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../Data/UsersReducer";
import React, {useEffect} from "react";
import {UsersAPI} from "../../api/api";

export type UsersAPIType = {
    componentDidMount: () => void
    render: () => JSX.Element
}

class UsersAPIComponent extends React.Component<UsersPropsType, UsersAPIType> {
    componentDidMount() {
        this.props.setIsLoading(true)
        UsersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
                this.props.setIsLoading(false)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(pageNumber)
        UsersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setIsLoading(false)
            })
    }
    follow = (userID: number) => {
        this.props.setIsLoading(true)
            UsersAPI.follow(userID)
                .then(() => {
                    this.props.setFollow(userID)
                })
        this.props.setIsLoading(false)
    }
    unfollow = (userID: number) => {
        this.props.setIsLoading(true)
            UsersAPI.unfollow(userID)
                .then(() => {
                    this.props.setUnfollow(userID)
                })
        this.props.setIsLoading(false)
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
    setFollow: (id: number) => void
    setUnfollow: (id:number)=>void
    setUsers: (items: UserType[]) => void
    setUsersTotalCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setIsLoading: (isLoading: boolean)=> void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: ActionsType): mapStateToPropsType {
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
        setFollow: (id: number) => {
            dispatch(followAC(id))
        },
        setUnfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (items) => {
            dispatch(setUsersAC(items))
        },
        setUsersTotalCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setIsLoading: (isLoading: boolean) => {
            dispatch(setIsLoading(isLoading))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)