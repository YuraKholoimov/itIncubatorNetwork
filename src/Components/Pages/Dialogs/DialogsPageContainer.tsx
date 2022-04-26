import React from "react";
import {ListGroup} from "react-bootstrap";
import {Dialog, DialogType} from "./Dialog";
import {InitialStateDialogType} from "../../../Redux/Reducers/dialog-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {useSelector} from "react-redux";
import {InitialAuthStateType} from "../../../Redux/Reducers/auth-reducer";


const DialogsPageContainer  = () => {
    const state = useSelector<AppStateType, InitialStateDialogType>(state => state.dialogReducer)
    const isAuth = useSelector<AppStateType, boolean>(state => state.authReducer.isAuth)
    alert(isAuth)
    return (
        <>
            <ListGroup>
                {
                    state.dialogs.map((dialog: DialogType) => {
                        return <Dialog
                            key={dialog.id}
                            id={dialog.id}
                            message={dialog.message}
                            name={dialog.name}
                            avatar={dialog.avatar}
                        />
                    })
                }
            </ListGroup>
        </>
    )
}


export default DialogsPageContainer;