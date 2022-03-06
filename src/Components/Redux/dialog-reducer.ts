import {ActionsTypes, DialogPageType, DialogType, MessageType, state} from "./State";

type InitialDialogaPageStateType = {
    dialogsPage: DialogPageType
}
const dialogReducer = (state:any, action:ActionsTypes) => {

   if (action.type === "ADD-NEW-DIALOG") {
        const newDialog: DialogType = {
            id: 11,
            name: action.name,
            message: action.newMessage,
            avatar: action.avatar
        }
        state.dialogsPage.dialogs.push(newDialog)
    }
    return state
};

export default dialogReducer;