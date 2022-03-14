import React, {ChangeEvent} from 'react'
import {Messages} from "./Messages";
import {Route, Routes} from 'react-router-dom';
import {AddNewMessageAC, InitialStateDialogType, updateNewMessageTextAC} from "../../../Redux/dialog-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export function MessagesList(props: MessagesPropsType) {

    const onKeypress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.code === "Enter") onClick()
    }
    const onClick = () => props.onClick(props.state.newDialogMessage)

    return (
        <Routes>
            <Route index element={<Messages
                messages={props.state.messages}
                newDialogMessage={props.state.newDialogMessage}
                onChange={props.onChange}
                onClick={onClick}
                onKeypress={onKeypress}
            />} />
        </Routes>
    )
}

type mapStateToPropsType = {
    state: InitialStateDialogType
}
type mapDispatchToPropsType = {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClick: (postTextNew: string) => void
}
type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    state: state.dialogReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageTextAC(e.currentTarget.value))
        },
        onClick: (postTextNew: string) => {
            dispatch(AddNewMessageAC(postTextNew))
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList)
