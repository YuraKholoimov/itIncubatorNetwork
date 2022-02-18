import React from 'react'
import {MessageIn, MessageType} from "./Message/MessageIn";
import {TextareaApp} from "../../../UI/TextareaApp";
import {ActionsTypes, AppStateType, updateNewMessageTextAC} from "../../../Redux/State";
import {Container} from "react-bootstrap";
import {MessageOut} from './Message/MessageOut';
import style from "./Message.module.css";

export type MessagesPageType = {
    state: AppStateType
    dispatch: (value: ActionsTypes) => void
    message: MessageType
}

export function MessagesPage(props: MessagesPageType) {
    return (
        <>
            <Container className="row">
                {/*---------------------- MESSAGES----------------------*/}
                <div className={style.container}>
                    <MessageIn
                        avatar={props.message.avatar}
                        name={props.message.name}
                        message={props.message.message}
                        time={props.message.time}
                    />
                    <MessageOut
                        avatar={props.message.avatar}
                        name={props.message.name}
                        message={props.message.message}
                        time={props.message.time}
                    />
                    <MessageIn
                        avatar={props.message.avatar}
                        name={props.message.name}
                        message={props.message.message}
                        time={props.message.time}
                    />
                    <MessageIn
                        avatar={props.message.avatar}
                        name={props.message.name}
                        message={props.message.message}
                        time={props.message.time}
                    />
                    <MessageOut
                        avatar={props.message.avatar}
                        name={props.message.name}
                        message={props.message.message}
                        time={props.message.time}
                    />

                </div>
                {/*---------------------- TEXTAREA ----------------------*/}
                <div className="d-flex justify-content-end  shadow-sm ">
                    <TextareaApp state={props.state} dispatch={props.dispatch} actionCreator={updateNewMessageTextAC}/>
                </div>
                {/*---------------------- END ----------------------*/}
            </Container>

        </>

    )
}