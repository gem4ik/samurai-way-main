import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ActionsType} from "../../Data/redux";
import {Users} from "./Users";
import {UserType} from "../../Data/Types";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC} from "../../Data/UsersReducer";
import React from "react";
import axios from "axios";

export type UsersAPIType = {
    componentDidMount: () => void
    render: () => JSX.Element
}

class UsersAPI extends React.Component<UsersPropsType, UsersAPIType> {
    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setUsersTotalCount(res.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users user={this.props.users}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      setCurrentPage={this.onPageChange}
                      setFollow={this.props.setFollow}/>
    }
}

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchToPropsType = {
    setFollow: (value: boolean, id: number) => void
    setUsers: (items: UserType[]) => void
    setUsersTotalCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: ActionsType): mapStateToPropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
    return {
        setFollow: (value: boolean, id: number) => {
            dispatch(followAC(value, id))
        },
        setUsers: (items) => {
            dispatch(setUsersAC(items))
        },
        setUsersTotalCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)