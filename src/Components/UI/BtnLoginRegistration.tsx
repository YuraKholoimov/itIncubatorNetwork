import {Button, Nav} from "react-bootstrap";
import React from "react";
import {NavLink} from "react-router-dom";
import {LoginModal} from "./LoginModal";

type BtnLoginRegistrationPropsType = {
    isAuth: boolean

}
export const BtnLoginRegistration = (props: BtnLoginRegistrationPropsType) => {
    return (
        <Nav>
            {
                props.isAuth
                    ? <NavLink to="/">
                        <LoginModal isLogined={props.isAuth}>Logout</LoginModal>
                    </NavLink>
                    : <>
                        <NavLink to="/login">
                            {/*<Button variant="outline-success">Login</Button>*/}
                            <LoginModal isLogined={props.isAuth}>Login</LoginModal>
                        </NavLink>
                        <NavLink to="/registration">
                            <Button className="" variant="outline-success">Sign up</Button>
                        </NavLink>
                    </>
            }

        </Nav>
    )
}