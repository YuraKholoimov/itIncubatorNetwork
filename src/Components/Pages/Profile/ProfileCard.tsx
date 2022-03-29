import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import style from "../../BodyApp/bodyApp.module.css";
import {ProfileNavbar} from "../../Navbar/ProfileNavbar/ProfileNavbar";
import React from "react";
import {NavLink} from "react-router-dom";
import {userProfileType} from "../../Redux/Reducers/profile-reducer";
import {authDataType} from "../../Redux/Reducers/auth-reducer";
import { ButtonModal } from "../../UI/ButtonModal";

type ProfileCardPropsType = {
    authData:authDataType
    userProfile: userProfileType
}
export const ProfileCard = (props: ProfileCardPropsType) => {

    const img = "https://avatarfiles.alphacoders.com/160/thumb-160787.jpg"
    const lookingForJob = props.userProfile.lookingForAJob? "I'm looking for a job" : "I do not looking for a job"

    return (
        <div className={style.wrapper}>
            <div className={style.profileCard}>
                <Card className="shadow p-1 mb-5 rounded ">
                    <Card.Img
                        variant="top"
                        src={props.userProfile.photos.large || img}
                    />
                    {/*<Nav.Link href="/edit">Edit</Nav.Link>*/}

                    {/*----------- PROFILE EDIT BUTTON -----------*/}
                    <Button variant="outline-danger" size="lg" className='col-sm-10 mx-4 my-2'>
                        <NavLink to={'/edit'} className='text-decoration-none text-body'>Edit profile</NavLink>
                    </Button>

                    {/*---------- PROFILE INFO  -------------*/}
                    <Card.Body>
                        <Card.Title>{props.userProfile.fullName}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            {props.userProfile.aboutMe}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{lookingForJob}</ListGroupItem>
                        <ListGroupItem>{props.userProfile.lookingForAJobDescription || "Looking for job"}</ListGroupItem>
                        <ListGroupItem>New York, NY</ListGroupItem>
                        <ListGroupItem>Phone: +7(999)999-99-99</ListGroupItem>
                        <ListGroupItem>E-mail: mail@mail.com</ListGroupItem>

                        {/*------ NAVIGATIONS BUTTON -------*/}
                        <ProfileNavbar/>

                    </ListGroup>
                </Card>
                {/*------ FRIENDS BAR -------*/}
                <Card className="shadow p-1 mb-5 rounded ">
                    <Card.Img
                        variant="top"
                        src={props.userProfile.photos.large || img}
                    />
                    <ButtonModal
                    variant={"danger"}>Write</ButtonModal>
                </Card>

            </div>

        </div>
    )


}