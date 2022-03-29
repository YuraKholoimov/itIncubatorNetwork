import {Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const BodyNavbar = () => {
    const activeLink = (params: { isActive: boolean; }) => ({color: params.isActive ? "red" : "black"});

    return (
        <>
            <Container>
                <div className='d-flex justify-content-end px-5 '>
                    <Nav variant="tabs" className='col-md-8 d-flex justify-content-center text-danger'>
                        <Nav.Item className="p-3">
                            <NavLink
                                to="/posts"
                                className="fw-bold text-decoration-none"
                                style={activeLink}
                            >Wall</NavLink>
                        </Nav.Item>
                        <Nav.Item className="p-3">
                            <NavLink
                                to="/music"
                                className="fw-bold text-decoration-none"
                                style={activeLink}
                            >Music</NavLink>
                        </Nav.Item>
                        <Nav.Item className="p-3">
                            <NavLink
                                to={"/books"}
                                style={activeLink}
                                className="fw-bold text-decoration-none"
                            >Video</NavLink>
                        </Nav.Item>
                        <Nav.Item className="p-3">
                            <NavLink
                                to="/photos"
                                className="fw-bold text-decoration-none"
                                style={activeLink}
                            >Photos</NavLink>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </>
    )
}