import {Dispatch} from "redux";
import {log} from "util";
import axios from "axios";

export type FriendType = {
    id: number
    name: string
    city: string
    avatar: string
    followed: boolean
    status: string
    photos: string
}
export type InitialStateFriendReducerType = {
    users: FriendType[]
    usersOnPageCount: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const ava = "https://store.playstation.com/store/api/chihiro/00_09_000/containe" +
    "r/RU/ru/99/EP2402-CUSA05624_00-AV00000000000229/0/image?_" +
    "version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"

const initialState: InitialStateFriendReducerType = {
    users: [
        //     {id: 1, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
        //     {id: 2, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
        //     {id: 3, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
        //     {id: 4, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
        //     {id: 5, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
    ],
    usersOnPageCount: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,

}

//---------------- ACTION TYPES -------------------//
export type FriendsACType = ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof isFetchingToggleAC>


//---------------- ACTION CREATORS -------------------//
export const followAC = (followed: boolean, id: number) => ({type: "FOLLOW", followed, id} as const)
export const setUsersAC = (users: any) => ({type: "SET-USERS", users, ava} as const)
export const setCurrentPageAC = (numPage: number) => ({type: "SET-CURRENT-PAGE", numPage} as const)
export const setTotalUsersCountAC = (usersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", usersCount} as const)
export const isFetchingToggleAC = (isFetching: boolean) => ({type: "IS-FETCHING-TOGGLE", isFetching} as const)

//---------------- PROFILE REDUCER-------------------//
const friendsPageReducer = (
    state: InitialStateFriendReducerType = initialState,
    action: FriendsACType): InitialStateFriendReducerType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: [...state.users
                    .map(user => user.id == action.id ? {...user, followed: action.followed} : user)
                ]
            }
        case "SET-USERS" :
            return {
                ...state,
                users: action.users.map((user: FriendType) => ({...user, avatar: action.ava}))
            }
        case "SET-CURRENT-PAGE" :
            return {
                ...state,
                currentPage: action.numPage
            }
        case "SET-TOTAL-USERS-COUNT" :
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case "IS-FETCHING-TOGGLE" :
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    }
};

//---- THUNK
export const getNewPagUsersTC = (numPage: number, usersOnPage: number) => (dispatch: Dispatch) => {
    dispatch(isFetchingToggleAC(true))
    dispatch(setCurrentPageAC(numPage))
    setTimeout(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${usersOnPage}`, {
            withCredentials: true
        })
            .then(response => {
                dispatch(setUsersAC(response.data.items))
                dispatch(isFetchingToggleAC(false))
                // dispatch(setTotalUsersCountAC(response.data.usersCount))
            })
    }, 1000)
}

export const followTC = (userId: number) => (dispatch: Dispatch) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "74a2af3c-45fa-4c81-b701-0275dea0591d"
            }})
            .then(response => {
                if (response.data.resultCode === 0)
                dispatch(followAC(true, userId))
                // dispatch(setTotalUsersCountAC(response.data.usersCount))
            })

}
export const unFollowTC = (userId: number) => (dispatch: Dispatch) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "74a2af3c-45fa-4c81-b701-0275dea0591d"
        }
    })
        .then(response => {
            if (response.data.resultCode === 0)
            dispatch(followAC(false, userId))
            // dispatch(setTotalUsersCountAC(response.data.usersCount))
        })

}
export default friendsPageReducer;