import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import MyForm from "./MyForm";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyVerticallyCenteredModalType = {
    show: boolean
    onHide: () => void
    isLogined: number
}
type LoginModalPropsType = DefaultButtonPropsType & {
    children: string
    isLogined: number
}

function MyVerticallyCenteredModal(props: MyVerticallyCenteredModalType) {
    const {onHide, isLogined, ...restProps} = props
    return (
        <Modal
            {...restProps}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onHide={onHide}>
                <Modal.Title id="contained-modal-title-vcenter">
                    LOGOUT
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*<h4>Message</h4>*/}
                {
                    isLogined === 0
                        ? <p>Do you want to logout? </p>
                        : <>
                            <MyForm
                                label={"E-mail"}
                                type={"email"}
                            />
                            <MyForm
                            label={"Password"}
                            type={"password"}
                            description={"Your password must be 8-20 characters long, contain letters and numbers, and\n" +
                                "                    must not contain spaces, special characters, or emoji."}
                            />
                        </>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>No</Button>
                <Button variant="success" onClick={onHide}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export function LoginModal(props: LoginModalPropsType) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button
                variant="danger"
                onClick={() => setModalShow(true)}
            >{props.children}
            </Button>

            <MyVerticallyCenteredModal
                isLogined={props.isLogined}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
