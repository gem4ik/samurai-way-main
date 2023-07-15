import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ActionsType} from "../../Data/redux";
import {Users} from "./Users";
import {FriendsType} from "../../Data/Types";
import {followAC} from "../../Data/UsersReducer";


type mapStateToPropsType = {
    users: FriendsType[]
}
type mapDispatchToPropsType = {
    setFollow: (value: boolean, id: string)=>void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps (state: ActionsType): mapStateToPropsType {
    return {
        users: state.usersPage.users
    }
}
function mapDispatchToProps (dispatch: Dispatch): mapDispatchToPropsType {
    return{
        setFollow: (value: boolean, id: string)=> {

            dispatch(followAC(value, id))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)