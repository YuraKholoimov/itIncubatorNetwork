import React, {ChangeEvent} from 'react'
import {MessageIn, MessageType} from "./Message/MessageIn";
import {TextareaApp} from "../../../UI/TextareaApp";
import {Container} from "react-bootstrap";
import style from "./Message.module.css";
import {MessageOut} from './Message/MessageOut';
import {updateNewMessageTextAC, AddNewMessageAC} from "../../../Redux/Reducers/dialog-reducer";

export type MessagesPropsType = {
    newDialogMessage: string
    id?: number
    messages: Array<MessageType>
    onClick?: () => void
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onKeypress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

export function Messages(props: MessagesPropsType) {
    return (
        <>
            <Container className="row">
                <div className={style.container}>
                    {/*------------------------ MESSAGES IN ------------------------*/}
                    <MessageIn
                        avatar={props.messages[0].avatar}
                        name={props.messages[0].name}
                        message={props.messages[0].message}
                        time={props.messages[0].time}
                    />
                    {/*------------------------ MESSAGES OUT ------------------------*/}
                    {
                        props.messages.map(m => {
                            return <MessageOut
                                key={props.id}
                                avatar={m.avatar}
                                name={m.name}
                                message={m.message}
                                time={m.time}
                            />
                        })
                    }
                </div>
                {/*---------------------- TEXTAREA ----------------------*/}
                <div className="d-flex justify-content-end  shadow-sm ">
                    <TextareaApp
                        value={props.newDialogMessage}
                        onChange={props.onChange}
                        onClick={props.onClick}
                    />
                </div>
                {/*---------------------- END ----------------------*/}
            </Container>
        </>
    )
}