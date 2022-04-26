export type PostType = {
    id: number
    post?: string
    likesCount: number
}
export type InitialStatePostReducerType = {
    postTextNew: string,
    posts: PostType[]
}
const initialState: InitialStatePostReducerType = {
    postTextNew: "",
    posts: [
        {id: 1, post: 'Hello everyone!!!', likesCount: 12},
        {id: 2, post: 'Hello everyone!!!', likesCount: 12},
        {id: 3, post: 'Hello everyone!!!', likesCount: 12},
        {id: 4, post: 'Hello everyone!!!', likesCount: 12},
    ]
}

//---------------- ACTION TYPES -------------------//
export type PostActionsTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof updateNewPostTextAC>

//---------------- ACTION CREATORS -------------------//
export const AddPostAC = (text: string) => ({type: "ADD-POST", text} as const)
export const updateNewPostTextAC = (newText: string) => ({type: "UPDATE-POST-TEXT", newText} as const)


//---------------- THUNK CREATOR -------------------//
// const getUserProfileById = (id: number) => (dispatch: Dispatch) => {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
//         .then(response => {
//             dispatch(setUsersAC(response.data.items))
//             // dispatch(setTotalUsersCountAC(response.data.usersCount))
//         })
// }


//---------------- PROFILE REDUCER-------------------//
const postReducer = (
    state: InitialStatePostReducerType = initialState,
    action: PostActionsTypes): InitialStatePostReducerType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                post: action.text,
                likesCount: 11
            }
            return {...state,posts: [...state.posts, newPost],postTextNew: "" }
        case "UPDATE-POST-TEXT":
            return {...state, postTextNew: action.newText}
        default:
            return state
    }
};

export default postReducer;