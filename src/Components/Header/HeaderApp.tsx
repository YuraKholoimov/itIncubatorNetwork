import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";

type HeaderAppTyp = {}


export const HeaderApp: React.FC<HeaderAppTyp> = (props) => {
    return <Navbar bg="light" expand="lg">
    <Container >
        <Navbar.Brand href="#home">IT-INCUBATOR NETWORK</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="#friends">Друзья</Nav.Link>
        <Nav.Link href="#messages">Мои сообщения</Nav.Link>
    <NavDropdown title="Список дел" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
    </Nav>


    <Form className="d-flex">
    <FormControl
        type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
        />
        </Form>

        <Nav.Link href="#login" >
    <Button variant="outline-success" >Войти</Button>
        </Nav.Link>
        <Nav.Link href="#registration" >
    <Button className="" variant="outline-success">Зарегистрироваться</Button>
        </Nav.Link>


        </Navbar.Collapse>
        </Container>
        </Navbar>
}