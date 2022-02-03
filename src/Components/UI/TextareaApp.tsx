import {Button, FloatingLabel, Form} from "react-bootstrap";

export const TextareaApp = () => {
    return (
        <div className="d-flex gap-3 py-5">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{height: '100px', width: '650px'}}
                />
            </FloatingLabel>
            <div className="gap-2 d-flex">
                <Button variant="outline-success" size="sm">Add</Button>
                <Button variant="outline-warning" size="sm">Change</Button>
            </div>
        </div>
    )
}