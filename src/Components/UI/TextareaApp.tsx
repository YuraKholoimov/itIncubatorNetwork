import {Button, FloatingLabel, Form} from "react-bootstrap";
import React, {ChangeEvent} from "react";

type TextareaAppType = {
    value:string
    onChange?:(e:ChangeEvent<HTMLTextAreaElement>)=>void
    onClick?:()=>void
    onKeypress?:(e:React.KeyboardEvent<HTMLTextAreaElement>)=>void
}

export const TextareaApp: React.FC<TextareaAppType> = (props) => {
    return (
        <div className="d-flex justify-content-md-center gap-3 py-5 ">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                {/*---------------- TEXTAREA -------------------*/}
                <Form.Control
                    as="textarea"
                    style={{height: '100px', width: '650px'}}
                    value={props.value}
                    onChange={props.onChange}
                    onKeyPress={props.onKeypress}
                />
            </FloatingLabel>
            <div className="gap-2 d-flex">
                {/*--------------- BUTTONS ----------------*/}
                <Button
                    onClick={props.onClick}
                    variant="success"
                    size="lg">
                    Send
                </Button>
                {/*--------------- END ----------------*/}
            </div>
        </div>
    )
}