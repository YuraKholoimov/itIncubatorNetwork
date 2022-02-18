export type PostType = {
    id: number
    post?: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
    message: string
    avatar: string
}
export type MessageType = {
    id: number
    name: string
    message: string
    time: string
    avatar: string
}

export type ProfilePageType = {
    postTextNew: string
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export const state: AppStateType = {
    profilePage: {
        postTextNew: "",
        posts: [
            {id: 1, post: 'Hello everyone!!!', likesCount: 12},
            {id: 2, post: 'Hello everyone!!!', likesCount: 12},
            {id: 3, post: 'Hello everyone!!!', likesCount: 12},
            {id: 4, post: 'Hello everyone!!!', likesCount: 12},
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1, name: 'Name', message: "Messages text",
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                    'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
            },
            {
                id: 2, name: 'Name', message: "Messages text",
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                    'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
            },
            {
                id: 3, name: 'Name', message: "Messages text",
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                    'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
            },
            {
                id: 4,
                name: 'Name',
                message: 'This is a wider card with supporting text below as a natural lead-in to additional content.' +
                    ' This content is a little bit longer.',
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                    'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
            }
        ],
        messages: [
            {
                id: 1,
                name: 'Name',
                message: 'Hi friend! How are your doing???',
                time: "08:00",
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                    'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
            },
            {
                id: 2,
                name: 'Name',
                message: 'Yo, yo man! I\'m in AL, come to me!',
                time: "08:00",
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                    'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
            },
            {
                id: 3,
                name: 'Name',
                message: 'message',
                time: "08:00",
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                    'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
            },
            {
                id: 4,
                name: 'Name',
                message: 'message',
                time: "08:00",
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                    'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
            }
        ]
    }
}

let rerenderTree = () => {
    console.log("Rerender")
}
//---------------- ACTION CREATORS TYPES -------------------//
export type ActionsTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addNewDialogAC>
    | ReturnType<typeof updateNewMessageTextAC>

//---------------- ACTION CREATORS -------------------//
export const AddPostAC = (text: string) => ({type: "ADD-POST", text} as const)
export const updateNewPostTextAC = (newText: string) => ({type: "UPDATE-POST-TEXT", newText} as const)
export const updateNewMessageTextAC = (newText: string) => ({type: "UPDATE-MESSAGE-TEXT", newText} as const)
export const addNewDialogAC = (name: string, newMessage: string, avatar: string) => ({
    type: "ADD-NEW-DIALOG",
    name,
    newMessage,
    avatar
} as const)

//---------------- DISPATCH -------------------//
export const dispatch = (action: ActionsTypes) => {
    if (action.type === "ADD-POST") {
        const newPost: PostType = {
            id: 5,
            post: action.text,
            likesCount: 11
        }
        state.profilePage.postTextNew = ""
        state.profilePage.posts.push(newPost)
        rerenderTree()
    } else if (action.type === "UPDATE-POST-TEXT") {
        state.profilePage.postTextNew = action.newText
        rerenderTree()
    } else if (action.type === "ADD-NEW-DIALOG") {
        const newDialog: DialogType = {
            id: 11,
            name: action.name,
            message: action.newMessage,
            avatar: action.avatar
        }
        state.dialogsPage.dialogs.push(newDialog)
        rerenderTree()
    } else if (action.type === "UPDATE-MESSAGE-TEXT") {
        state.profilePage.postTextNew = action.newText
        rerenderTree()
    }
}
    export const subscriber = (observer: () => void) => {
        rerenderTree = observer
    }