import {ListGroup} from "react-bootstrap";
import {Dialog} from "./Dialog";
import {ActionsTypes, AppStateType} from "../../Redux/State";
import React from "react";

const messageData = [
    {
        message: 'This is a wider card with supporting text below as a natural lead-in to additional content.' +
            ' This content is a little bit longer.',
        userName: 'User Name',
        url: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
            'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
    },
    {
        message: 'This is a wider card with supporting text below as a natural lead-in to additional content.' +
            ' This content is a little bit longer.',
        userName: 'User Name',
        url: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
            'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
    },
    {
        message: 'This is a wider card with supporting text below as a natural lead-in to additional content.' +
            ' This content is a little bit longer.',
        userName: 'User Name',
        url: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-' +
            'AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
    },

]

type DialogsPageType = {
    state: AppStateType
    dispatch: (value:ActionsTypes)=>void
}

export const DialogsPage:React.FC<DialogsPageType> = (props) => {
    return (
        <>
            <ListGroup>
                {props.state.dialogsPage.dialogs.map((elem, i) => {
                    return <Dialog
                        key={elem.id}
                        id={elem.id}
                        message={elem.message}
                        name={elem.name}
                        avatar={elem.avatar}
                    />
                })}
            </ListGroup>
        </>
    )
}