import {ActionTypes, UsersType} from "./Types";
import {v1} from "uuid";


const InitialUsers = {
    users: [
        {
            id: v1(),
            photoUrl: 'https://iscale.iheart.com/catalog/artist/30015155',
            followed: true,
            fullName: "Chad krueger",
            status: "soloist",
            location: {
                city: "Hanna",
                country: 'Canada'
            }
        },
        {
            id: v1(),
            photoUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2022/09/Kendrick-Lamar-BET-Awards-2-1000x600.jpg',
            followed: false,
            fullName: 'Kendrick Lamar',
            status: 'rapper',
            location: {
                city: 'Compton',
                country: 'USA'
            }
        },
        {
            id: v1(),
            photoUrl: 'https://i.scdn.co/image/ab6761610000e5ebb78f77c5583ae99472dd4a49',
            followed: true,
            fullName: 'David Bowie',
            status: 'singer-songwriter',
            location: {
                city: 'London',
                country: 'UK'
            }
        },
        {
            id: v1(),
            photoUrl: 'https://m.media-amazon.com/images/M/MV5BYjQwNzMzOGUtYmVkMS00ZmUxLWEwMDAtMWRmYTczZjQ3NWU3XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_FMjpg_UX1000_.jpg',
            followed: true,
            fullName: 'Jimi Hendrix',
            status: 'guitarist',
            location: {
                city: 'Seattle',
                country: 'USA'
            }
        }
    ]
}

export const UsersReducer = (state: UsersType = InitialUsers, action: ActionTypes) => {
    switch (action.type) {
        case "SWITCH-FOLLOW":{
            return {...state, users: state.users.map(u=>u.id === action.payload.id ? {...u, followed: !action.payload.value} : u)}
        }
        default:
            return state
    }
};

export const followAC = (value: boolean, id: string) => {

    return {
        type: "SWITCH-FOLLOW",
        payload: {value, id}
    }as const
}