import React from "react";
import {Dialog, DialogType} from "./Dialog";
import {InitialStateDialogType} from "../../../Redux/Reducers/dialog-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {useSelector} from "react-redux";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {ListGroup} from "react-bootstrap";

const Dialogs = () => {
    const state = useSelector<AppStateType, InitialStateDialogType>(state => state.dialogReducer)

    return <ListGroup>
            {
                state.dialogs
                    .map((dialog: DialogType) => {
                        return <Dialog
                            key={dialog.id}
                            id={dialog.id}
                            message={dialog.message}
                            name={dialog.name}
                            avatar={dialog.avatar}
                        />
                    }
                )}
        </ListGroup>
}

const DialogsPageContainer = () => {
    const state = useSelector<AppStateType, InitialStateDialogType>(state => state.dialogReducer)
    const isAuth = useSelector<AppStateType, boolean>(state => state.authReducer.isAuth)
    const [modalShow, setModalShow] = React.useState(true);


    return (
        <div>
            <WithAuthRedirect>
                <Dialogs />
            </WithAuthRedirect>

        </div>
    )
}

export default DialogsPageContainer;