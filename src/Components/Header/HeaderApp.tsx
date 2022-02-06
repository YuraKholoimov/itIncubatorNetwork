import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import style from './header.module.css'
import {SearchForm} from "../UI/SearchForm";
import React from "react";
import {BtnLoginRegistration} from "../UI/BtnLoginRegistration";


type HeaderAppTyp = {}

export const HeaderApp: React.FC<HeaderAppTyp> = (props) => {
    return (
        <Navbar bg="light" expand="lg" className={style.navbar}>
            <Container>
                <Navbar.Brand href="#home"><b>IT-INCUBATOR</b> <img
                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQHeTQsBATkdwg/company-logo_200_200/0/1575544858313?e=2159024400&v=beta&t=Fc-rMZrwOOp1mCjudpS82nEpkHGmAzT0oH5PJL6CuAU"
                    alt=""
                    style={{height: '30px', width: '30px'}}
                /> network</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/channel">Channel</Nav.Link>
                        <Nav.Link href="/fevarite">Favorite</Nav.Link>
                        <Nav.Link href="#itnews">ITNews</Nav.Link>
                        <NavDropdown title="Servises" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
{/*--------Форма поиска ------*/}
                    <SearchForm/>
{/*--------Кнопки Логин и Регистрация ------*/}
                    <BtnLoginRegistration/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}