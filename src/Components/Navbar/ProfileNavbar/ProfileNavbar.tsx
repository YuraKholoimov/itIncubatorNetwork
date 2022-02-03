import {ListGroupItem, Nav} from "react-bootstrap";

export const ProfileNavbar = () => {
    return (
        <>
            <ListGroupItem>
                <Nav
                    activeKey="/home"
                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/message">Messages</Nav.Link>
                    </Nav.Item>
                </Nav>
            </ListGroupItem>
            <ListGroupItem>
                <Nav
                    activeKey="/home"
                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/friends">Friends</Nav.Link>
                    </Nav.Item>
                </Nav>
            </ListGroupItem>
            <ListGroupItem>
                <Nav
                    activeKey="/home"
                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/hobby">Hobby</Nav.Link>
                    </Nav.Item>
                </Nav>
            </ListGroupItem>
        </>
    )
}