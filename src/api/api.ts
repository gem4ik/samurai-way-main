import axios from "axios";
import {FollowPostResponceType, GetUserResponceType} from "../Data/Types";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {

    }
})

export const UsersAPI = {
    getUsers:(pageSize:number,currentPage:number) => {
        return instance.get<GetUserResponceType>(`users?count=${pageSize}&page=${currentPage}`)
            .then(res => res.data)
    },
    follow: (userId: number) => {
        return instance.post<FollowPostResponceType>(`follow/${userId}`)
    },
    unfollow: (userId: number) => {
        return instance.delete<FollowPostResponceType>(`follow/${userId}`)
    },
}