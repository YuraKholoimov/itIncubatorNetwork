import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {SearchForm} from "../UI/SearchForm";
import React from "react";
import {BtnLoginRegistration} from "../UI/BtnLoginRegistration";
import {useSelector} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {InitialAuthStateType} from "../Redux/Reducers/auth-reducer";
import {NavLink} from "react-router-dom";


export const HeaderApp = () => {
    const logoImg = "https://media-exp1.licdn.com/dms/image/C4D0BAQHeTQsBATkdwg/company-logo_200_200/0/1575544858313?e=2159024400&v=beta&t=Fc-rMZrwOOp1mCjudpS82nEpkHGmAzT0oH5PJL6CuAU"
    const authData = useSelector<AppStateType, InitialAuthStateType>(state => state.authReducer)

    if (authData.resultCode === 0) {

    }

    return (
        <Navbar bg="light" expand="lg" className="shadow">
            <Container>
                <Navbar.Brand href="#home">
                    <NavLink to={"/"}>
                        <b>IT-INCUBATOR</b>
                    </NavLink>
                    <img
                    src={logoImg}
                    alt="LOGO"
                    style={{height: '30px', width: '30px'}}
                />
                    network
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to="/channel" className='p-2'>CHANNEL</NavLink>
                        <NavLink to="/favorite" className='p-2'>FAVORITE</NavLink>
                        <NavLink to="/news" className='p-2'>It-NEWS</NavLink>

                        <NavDropdown title="SERVISES" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/*-------- SEARCH ------*/}
                    <SearchForm/>

                    {/*-------- LOGIN  & REGISTRATION ------*/}
                    <BtnLoginRegistration
                        isLogined={authData.resultCode}
                    />

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}