import {Container, Nav} from "react-bootstrap";


export const BodyNavbar = () => {
    return (
        <>
            <Container>
                <div className='d-flex justify-content-end px-5 '>
                    <Nav variant="tabs" className='col-md-8 d-flex justify-content-center text-danger'>
                        <Nav.Item>
                            <Nav.Link className="text-black fw-bold" href="/posts">Wall</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className="text-black fw-bold"  href="/music">Music</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className="text-black fw-bold"  href="/books">Video</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className="text-black fw-bold"  href="/books">Photos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className="text-black fw-bold"  href="/books">Games</Nav.Link>
                        </Nav.Item>
                    </Nav></div>
            </Container>
        </>
    )
}