import {Button, FloatingLabel, Form} from "react-bootstrap";
import React, {ChangeEvent} from "react";
import {ActionsTypes, AddPostAC, AppStateType} from "../Redux/State";

type TextareaAppType = {
    state: AppStateType
    dispatch?:(el:ActionsTypes)=>void
    updateAC:(el:string)=>ActionsTypes
    addItemAC:(el:string)=>ActionsTypes
}

export const TextareaApp: React.FC<TextareaAppType> = (props) => {

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        props.dispatch && props.dispatch(props.updateAC(e.currentTarget.value))
    }

    const onClick = () => {
        props.dispatch && props.dispatch(props.addItemAC(props.state.profilePage.postTextNew))
    }

    const onKeypress = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.code === "Enter") onClick()
    }

    return (
        <div className="d-flex justify-content-md-center gap-3 py-5 ">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                {/*---------------- TEXTAREA -------------------*/}
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{height: '100px', width: '650px'}}
                    value={props.state.profilePage.postTextNew}
                    onChange={onChange}
                    onKeyPress={onKeypress}
                />
            </FloatingLabel>
            <div className="gap-2 d-flex">
                {/*--------------- BUTTONS ----------------*/}
                <Button
                    onClick={onClick}
                    variant="success"
                    size="lg">
                    Send
                </Button>
                {/*<Button*/}
                {/*    variant="outline-warning"*/}
                {/*    size="sm">*/}
                {/*    Change*/}
                {/*</Button>*/}
                {/*--------------- END ----------------*/}
            </div>
        </div>
    )
}