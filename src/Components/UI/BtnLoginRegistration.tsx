import {Button, Nav} from "react-bootstrap";
import React from "react";

export const BtnLoginRegistration = () => {
    return (
        <Nav>
            <Nav.Link href="/login">
                <Button variant="outline-success">Login</Button>
            </Nav.Link>
            <Nav.Link href="/registration">
                <Button className="" variant="outline-success">Sign up</Button>
            </Nav.Link>
        </Nav>
    )
}