export type DialogType = {
    id: number
    name: string
    message: string
    avatar: string
}
export type MessageType = {
    id: number,
    name: string,
    message: string,
    time: string,
    avatar: string
}
export type InitialStateDialogType = {
    newDialogMessage: string
    dialogs: DialogType[]
    messages: MessageType[]
}

//------------------- INITIAL STATE ---------------------//
const initialState: InitialStateDialogType = {
    newDialogMessage: "",
    dialogs: [
        {
            id: 1,
            name: 'User Name',
            message: 'This is a wider card with supporting text below as a natural lead-in to additional content.' +
                ' This content is a little bit longer.',
            avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
        },
        {
            id: 2, name: 'User Name', message: "Messages text",
            avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
        },
        {
            id: 3,
            name: 'User Name',
            message: 'This is a wider card with supporting text below as a natural lead-in to additional content.' +
                ' This content is a little bit longer.',
            avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
        },
        {
            id: 4,
            name: 'User Name',
            message: 'This is a wider card with supporting text below as a natural lead-in to additional content.' +
                ' This content is a little bit longer.',
            avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
                'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
        },
        {
            id: 5,
            name: 'User Name',
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
//----------------- ACTION TYPES  -------------------//
export type DialogActionsTypes =
    | ReturnType<typeof addNewDialogAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof AddNewMessageAC>

//---------------- ACTION CREATORS -------------------//
export const updateNewMessageTextAC = (newText: string) => ({type: "UPDATE-MESSAGE-TEXT", newText} as const)
export const addNewDialogAC = (name: string, newMessage: string, avatar: string) => ({
    type: "ADD-NEW-DIALOG",
    name,
    newMessage,
    avatar
} as const)
export const AddNewMessageAC = (message: string) => ({type: "ADD-MESSAGE-TEXT", message} as const)

//---------------------- REDUCER -------------------------//
const dialogReducer = ( state: InitialStateDialogType = initialState,
    action: DialogActionsTypes ): InitialStateDialogType => {

    switch (action.type) {
        case "ADD-NEW-DIALOG":
            const newDialog: DialogType = {
                id: 11,
                name: action.name,
                message: action.newMessage,
                avatar: action.avatar
            }
            return {...state, dialogs: [...state.dialogs, newDialog]}
        case "UPDATE-MESSAGE-TEXT":
            return {...state, newDialogMessage: action.newText}
        case "ADD-MESSAGE-TEXT": {
            const newMessage: MessageType = {...state.messages[0], message: action.message,}
            if (state.newDialogMessage.trim()) {
                return {...state, messages: [...state.messages, newMessage], newDialogMessage: ""}
            }
            return state
        }
        default:
            return state
    }
};

export default dialogReducer;