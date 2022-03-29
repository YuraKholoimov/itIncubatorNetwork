import {Button, Nav} from "react-bootstrap";
import React from "react";
import {NavLink} from "react-router-dom";
import {LoginModal} from "./LoginModal";

type BtnLoginRegistrationPropsType = {
    isLogined: number

}
export const BtnLoginRegistration = (props: BtnLoginRegistrationPropsType) => {
    return (
        <Nav>
            {
                props.isLogined == 0
                    ? <NavLink to="/">
                        <LoginModal isLogined={props.isLogined}>Logout</LoginModal>
                    </NavLink>
                    : <>
                        <NavLink to="/login">
                            <Button variant="outline-success">Login</Button>
                        </NavLink>
                        <NavLink to="/registration">
                            <Button className="" variant="outline-success">Sign up</Button>
                        </NavLink>
                    </>
            }

        </Nav>
    )
}