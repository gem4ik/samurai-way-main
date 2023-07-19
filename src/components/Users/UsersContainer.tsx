import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ActionsType} from "../../Data/redux";
import {Users} from "./Users";
import {FriendsType} from "../../Data/Types";
import {followAC, setUsersAC} from "../../Data/UsersReducer";
import React from "react";
import axios from "axios";

export type UsersAPIType = {
    componentDidMount: () => void
    render: () => JSX.Element
}

class UsersAPI extends React.Component<UsersPropsType, UsersAPIType> {
    componentDidMount() {
        axios.get<any>('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => setUsersAC(res.data.items))
    }

    render() {
        return <Users user={this.props.users}
                      setFollow={this.props.setFollow}/>
    }
}

type mapStateToPropsType = {
    users: FriendsType[]
}
type mapDispatchToPropsType = {
    setFollow: (value: boolean, id: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: ActionsType): mapStateToPropsType {
    return {
        users: state.usersPage
    }
}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
    return {
        setFollow: (value: boolean, id: number) => {
            dispatch(followAC(value, id))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)