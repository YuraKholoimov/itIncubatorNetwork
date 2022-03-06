import {ActionsTypes, DialogPageType, MessageType, PostType, ProfilePageType} from "./State";

type InitialStateProfileReducerType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

const profileReducer = (state:any, action:ActionsTypes):ProfilePageType  => {
    if (action.type === "ADD-POST") {
        const newPost: PostType = {
            id: 5,
            post: action.text,
            likesCount: 11
        }
        state.profilePage.postTextNew = ""
        state.profilePage.posts.push(newPost)
    } else if (action.type === "UPDATE-MESSAGE-TEXT") {
        state.profilePage.postTextNew = action.newText
    } else if (action.type === "UPDATE-POST-TEXT") {
        state.profilePage.postTextNew = action.newText
    } else if (action.type === "ADD-MESSAGE-TEXT") {
        const newMessage: MessageType = {...state.dialogsPage.messages[0], message: action.message,}
        if (state.profilePage.postTextNew.trim()) {
            state.dialogsPage.messages.push(newMessage)
            state.profilePage.postTextNew = ""
        }
    }
    return state
};

export default profileReducer;