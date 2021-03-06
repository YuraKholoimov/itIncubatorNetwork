import React from "react";
import style from "../Message.module.css";

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const MessageOut: React.FC<MessageType> = (props) => {
    return (
        <>
            {/*--------------- OUT COMING MESSAGE --------------*/}
            <div className={style.wrapperOut}>
                <div className={style.avatar}>
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <div className={style.outcoming}>
                    <div className={style.bubble}>
                        <div>
                            <div className={style.name}>
                                {props.name}
                            </div>
                            <div className={style.message}>
                                {props.message}
                            </div>
                        </div>
                        <div className={style.time}>
                            {props.time}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}