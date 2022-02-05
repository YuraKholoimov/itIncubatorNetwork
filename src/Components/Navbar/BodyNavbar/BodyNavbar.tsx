import {Container, Nav} from "react-bootstrap";


export const BodyNavbar = () => {
    return (
        <>
            <Container>
                <div className='d-flex justify-content-end px-5'>
                    <Nav variant="tabs" className='col-md-8 d-flex justify-content-center'>
                        <Nav.Item>
                            <Nav.Link href="/posts">Wall</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/music">Music</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/books">Video</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/books">Photos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/books">Games</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/books">Games</Nav.Link>
                        </Nav.Item>
                    </Nav></div>
            </Container>
        </>
    )
}