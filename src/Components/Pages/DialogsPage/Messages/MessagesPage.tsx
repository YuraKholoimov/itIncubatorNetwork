import React from 'react'
import {MessageIn, MessageType} from "./Message/MessageIn";
import {TextareaApp} from "../../../UI/TextareaApp";
import {ActionsTypes, AddNewMessageAC, AppStateType, updateNewMessageTextAC} from "../../../Redux/State";
import {Container} from "react-bootstrap";
import style from "./Message.module.css";
import {MessageOut} from './Message/MessageOut';

export type MessagesPageType = {
    state: AppStateType
    dispatch: (value: ActionsTypes) => void
    messages: Array<MessageType>
}

export function MessagesPage(props: MessagesPageType) {
    return (
        <>
        <Container className="row">
            <div className={style.container}>
            <MessageIn
                avatar={props.state.dialogsPage.messages[0].avatar}
                name={props.state.dialogsPage.messages[0].name}
                message={props.state.dialogsPage.messages[0].message}
                time={props.state.dialogsPage.messages[0].time}
                />

                {/*------------------------ MESSAGES MAPING ------------------------*/}

            {props.messages.map(m => {
                return <MessageOut
                    avatar={m.avatar}
                    name={m.name}
                    message={m.message}
                    time={m.time}
                />
            })}

        </div>
        {/*---------------------- TEXTAREA ----------------------*/}
        <div className="d-flex justify-content-end  shadow-sm ">
            <TextareaApp
                state={props.state}
                dispatch={props.dispatch}
                updateAC={updateNewMessageTextAC}
                addItemAC={AddNewMessageAC}
            />
        </div>
        {/*---------------------- END ----------------------*/}
        </Container>

</>

)
}