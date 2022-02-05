import {Container} from "react-bootstrap";
import {ListGroupItem, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const ProfileNavbar = () => {
    return (
        <>
            <Nav>
                <ListGroupItem action>
                    <Container className='col-md-10'>
                        <NavLink className='text-decoration-none' to={'/'} >
                            <Nav.Item >Profile</Nav.Item>
                        </NavLink>
                    </Container>
                </ListGroupItem>
                <ListGroupItem action>
                    <Container className='col-md-10'>
                        <NavLink to={'/friends'}  className='text-decoration-none'>
                            <Nav.Item>Friends</Nav.Item>
                        </NavLink>
                    </Container>
                </ListGroupItem>
                <ListGroupItem action>
                    <Container className='col-md-10'>
                        <NavLink to={'/messages'} className='text-decoration-none'>
                            <Nav.Item>Messages</Nav.Item>
                        </NavLink>
                    </Container>
                </ListGroupItem>
            </Nav>


        </>
    )
}