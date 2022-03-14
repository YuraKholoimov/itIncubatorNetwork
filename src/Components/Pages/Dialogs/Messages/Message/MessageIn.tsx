import React from "react";
import style from "../Message.module.css";

export type MessageType = {
    id?:number
    avatar: string
    name: string
    message: string
    time: string
}

export const MessageIn: React.FC<MessageType> = (props) => {
    return (
        <>
            <div >
                {/*--------------- IN COMING MESSAGE --------------*/}
                <div className={style.wrapper}>
                    <div className={style.avatar}>
                        <img src={props.avatar} alt="avatar"/>
                    </div>
                    <div className={style.incoming}>
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
            </div>
        </>
    )
}