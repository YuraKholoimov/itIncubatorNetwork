import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Button, Modal} from "react-bootstrap";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyVerticallyCenteredModalType = {
    show: boolean
    onHide: () => void
}
type ButtonModalPropsType = DefaultButtonPropsType & {
    children?: string
    variant: string
}

function MyVerticallyCenteredModal(props: MyVerticallyCenteredModalType) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Message to NIKNAME
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Message</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
                <Button variant="success" onClick={props.onHide}>Send</Button>
            </Modal.Footer>
        </Modal>
    );
}

export function ButtonModal(props: ButtonModalPropsType) {
    const [modalShow, setModalShow] = React.useState(false);
const {children, variant} = props
    return (
        <>
            <Button
                variant={variant}
                onClick={() => setModalShow(true)}
            >{children}
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
