export type FriendType = {
    id: number
    nickName: string
    city: string
    avatar: string
    isFollow: boolean
}
export type InitialStateFriendReducerType = {
    users: FriendType[]
}
const avatar = "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000229/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
const initialState: InitialStateFriendReducerType = {
    users: [
        {id: 1, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
        {id: 2, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
        {id: 3, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
        {id: 4, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
        {id: 5, nickName: "Samurai", city: "Moscow", avatar: avatar, isFollow: false},
    ]
}

//---------------- ACTION TYPES -------------------//
export type FriendsACType = ReturnType<typeof followAC>
| ReturnType<typeof setUsersAC>

//---------------- ACTION CREATORS -------------------//
export const followAC = (isFollow: boolean, id: number) => ({type: "FOLLOW", isFollow, id} as const)
export const setUsersAC = (users: any) => ({type: "SET_USERS", users} as const)

//---------------- PROFILE REDUCER-------------------//
const friendsPageReducer = (
    state: InitialStateFriendReducerType = initialState,
    action: FriendsACType): InitialStateFriendReducerType => {
    switch (action.type) {
        case "FOLLOW":

            return {
                ...state,
                users: [...state.users
                    .map(user => user.id == action.id ? {...user, isFollow: action.isFollow} : user)
                ]
            }
        case "SET_USERS" :
            return {...state,
                users:  [...state.users, ...action.users]
            }

        default:
            return state
    }
};

export default friendsPageReducer;