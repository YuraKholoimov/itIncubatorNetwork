import {Button, Container} from "react-bootstrap";
import {ListGroupItem, Nav} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";

export const ProfileNavbar = () => {
    const navigate = useNavigate()
    const activeNavLink = (params: { isActive: boolean; })=>({color: params.isActive ?  "red" : "black"})
    // onClick={()=> navigate('/profile/19453')}
    return (
        <>
            <ListGroupItem action>
                <Container className='col-md-10'>
                    <NavLink to={"/profile/19453"}  className='text-decoration-none fw-bold' style={activeNavLink}>
                        <Nav.Item>My profile</Nav.Item>
                    </NavLink>
                </Container>
            </ListGroupItem>

                <ListGroupItem action>
                    <Container className='col-md-10'>
                        <NavLink to={'/friends'} className='text-decoration-none fw-bold' style={activeNavLink}>
                            <Nav.Item>Friends</Nav.Item>
                        </NavLink>
                    </Container>
                </ListGroupItem>

                <ListGroupItem action>
                    <Container className='col-md-10'>
                        <NavLink to={'/dialogs'} className='text-decoration-none fw-bold' style={activeNavLink}>
                            <Nav.Item>Messages</Nav.Item>
                        </NavLink>
                    </Container>
                </ListGroupItem>
        </>
    )
}