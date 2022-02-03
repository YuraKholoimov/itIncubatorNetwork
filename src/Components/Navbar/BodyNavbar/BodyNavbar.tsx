import {Nav} from "react-bootstrap";


export const BodyNavbar = () => {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/posts">Wall</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/music">Music</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/books" >Video</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/books" >Books</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}