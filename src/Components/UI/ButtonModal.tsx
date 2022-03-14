import React from "react";
import {Button, Modal} from "react-bootstrap";

type MyVerticallyCenteredModalType = {
    show: boolean
    onHide: () => void
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

export function ButtonModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-primary" onClick={() => setModalShow(true)}>
                Write
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
