import {ListGroup} from "react-bootstrap";
import {Dialog} from "./Message/Dialog";

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

export const DialogsPage = () => {
    return (
        <>
            <ListGroup>
                {messageData.map((elem, i) => {
                    return <Dialog
                        key={i}
                        message={elem.message}
                        userName={elem.userName}
                        url={elem.url}
                    />
                })}
            </ListGroup>
        </>
    )
}