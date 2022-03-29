import React from 'react';
import { Form } from 'react-bootstrap';
type MyFormPropsType = {
    type?: string
    label?: string
    description?: string

}
const MyForm = (props: MyFormPropsType) => {
    const {label, type, description, ...restProps} = props
    return (
        <div>
            <>
                <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
                <Form.Control
                    type={type}
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    {description}
                </Form.Text>
            </>
        </div>
    );
};

export default MyForm;