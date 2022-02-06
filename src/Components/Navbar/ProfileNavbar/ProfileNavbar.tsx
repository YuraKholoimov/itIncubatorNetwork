import {Container} from "react-bootstrap";
import {ListGroupItem, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const ProfileNavbar = () => {
    return (
        <>
            <ListGroupItem action>
                <Container className='col-md-10 '>
                    <NavLink className='text-decoration-none text-black' to={'/'}>
                        <Nav.Item>Profile</Nav.Item>
                    </NavLink>
                </Container>
            </ListGroupItem>
                <ListGroupItem action>
                    <Container className='col-md-10 '>
                        <NavLink to={'/friends'} className='text-decoration-none text-black'>
                            <Nav.Item>Friends</Nav.Item>
                        </NavLink>
                    </Container>
                </ListGroupItem>
                <ListGroupItem action>
                    <Container className='col-md-10 '>
                        <NavLink to={'/dialogs'} className='text-decoration-none text-black'>
                            <Nav.Item>Messages</Nav.Item>
                        </NavLink>
                    </Container>
                </ListGroupItem>
        </>
    )
}