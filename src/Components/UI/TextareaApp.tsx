import {Button, FloatingLabel, Form} from "react-bootstrap";
import React, {ChangeEvent} from "react";
import {ActionsTypes, AddPostAC, AppStateType} from "../Redux/State";

type TextareaAppType = {
    state: AppStateType
    dispatch?:(el:ActionsTypes)=>void
    actionCreator:(el:string)=>ActionsTypes
}

export const TextareaApp: React.FC<TextareaAppType> = (props) => {

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        props.dispatch && props.dispatch(props.actionCreator(e.currentTarget.value))
    }

    const addNewPost = () => {
        props.dispatch && props.dispatch(AddPostAC(props.state.profilePage.postTextNew))
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
                />
            </FloatingLabel>
            <div className="gap-2 d-flex">
                {/*--------------- BUTTONS ----------------*/}
                <Button
                    onClick={addNewPost}
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