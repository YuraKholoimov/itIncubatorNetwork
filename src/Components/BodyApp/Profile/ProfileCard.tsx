import {Card, ListGroup, ListGroupItem, Nav} from "react-bootstrap";
import style from "../Style/bodyApp.module.css";
import {ProfileNavbar} from "../../Navbar/ProfileNavbar/ProfileNavbar";

export const ProfileCard = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.profileCard}>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://avatarfiles.alphacoders.com/160/thumb-160787.jpg"/>
                    <Card.Body>
                        <Card.Title>NAME SURNAME</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Moscow</ListGroupItem>
                        <ListGroupItem>Phone: +7(999)999-99-99</ListGroupItem>
                        <ListGroupItem>E-mail: mail@mail.com</ListGroupItem>

                        <ProfileNavbar/>

                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )


}