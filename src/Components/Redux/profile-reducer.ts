export type PostType = {
    id: number
    post?: string
    likesCount: number
}
export type InitialStateProfileReducerType = {
    postTextNew: string,
    posts: PostType[]
}
const initialState: InitialStateProfileReducerType = {
    postTextNew: "",
    posts: [
        {id: 1, post: 'Hello everyone!!!', likesCount: 12},
        {id: 2, post: 'Hello everyone!!!', likesCount: 12},
        {id: 3, post: 'Hello everyone!!!', likesCount: 12},
        {id: 4, post: 'Hello everyone!!!', likesCount: 12},
    ]
}

//---------------- ACTION TYPES -------------------//
export type ProfileActionsTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof updateNewPostTextAC>

//---------------- ACTION CREATORS -------------------//
export const AddPostAC = (text: string) => ({type: "ADD-POST", text} as const)
export const updateNewPostTextAC = (newText: string) => ({type: "UPDATE-POST-TEXT", newText} as const)

//---------------- PROFILE REDUCER-------------------//
const profileReducer = (
    state: InitialStateProfileReducerType = initialState,
    action: ProfileActionsTypes): InitialStateProfileReducerType => {
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

export default profileReducer;