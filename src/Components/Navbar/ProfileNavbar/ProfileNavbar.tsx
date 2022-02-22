import {Button, Container} from "react-bootstrap";
import {ListGroupItem, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const ProfileNavbar = () => {
    return (
        <>
            <ListGroupItem action>
                <Container className='col-md-10 '>
                    <NavLink className='text-decoration-none text-black fw-bold' to={'/'}>
                        {/*<Nav.Item>Profile</Nav.Item>*/}
                        <Nav.Item className="">Profile</Nav.Item>
                    </NavLink>
                </Container>
            </ListGroupItem>
                <ListGroupItem action>
                    <Container className='col-md-10 '>
                        <NavLink to={'/friends'} className='text-decoration-none text-black fw-bold'>
                            <Nav.Item>Friends</Nav.Item>
                        </NavLink>
                    </Container>
                </ListGroupItem>
                <ListGroupItem action>
                    <Container className='col-md-10 '>
                        <NavLink to={'/dialogs'} className='text-decoration-none text-black fw-bold'>
                            <Nav.Item>Messages</Nav.Item>
                        </NavLink>
                    </Container>
                </ListGroupItem>
        </>
    )
}