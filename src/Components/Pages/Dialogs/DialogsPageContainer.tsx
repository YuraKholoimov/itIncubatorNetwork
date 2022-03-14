import React from "react";
import {ListGroup} from "react-bootstrap";
import {Dialog, DialogType} from "./Dialog";
import {connect} from "react-redux";
import {InitialStateDialogType} from "../../Redux/dialog-reducer";
import {AppStateType} from "../../Redux/redux-store";


const DialogsPage: React.FC<DialogsPageType> = (props) => {
    return (
        <>
            <ListGroup>
                {
                    props.state.dialogs.map((dialog: DialogType) => {
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

type MapStateToPropsType = {
    state: InitialStateDialogType
}
type DialogsPageType = MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    state: state.dialogReducer
})

const mapDispatchToProps = () => ({})

export const DialogsPageContainer = connect(mapStateToProps,)(DialogsPage)