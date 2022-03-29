import React from 'react';
import {Button, Card, Figure} from 'react-bootstrap';
import { ButtonModal } from './ButtonModal';
import {NavLink} from "react-router-dom";

export type UserCardPropsType = {
    id: number
    name: string
    city: string
    photos: string
    followed: boolean
    follow: () => void
    status: string
    avatar:string

}

const UserCard: React.FC<UserCardPropsType> = (props) => {

    return (

        <div className=" d-flex   justify-content-end p-2 ">
            <Card className="flex-row col-lg-8 p-2  justify-content-center align-content-center">
                <Figure className='d-flex flex-column'>
                    <NavLink to={`/profile/${props.id}`}>
                        <Figure.Image
                        style={{borderRadius: "15px"}}
                        width={171}
                        height={180}
                        alt="171x180"
                        src={props.photos && props.avatar}
                    />
                    </NavLink>
                    <div className='d-flex justify-content-center'>
                        {
                            props.followed
                                ? <Button variant="outline-danger" onClick={props.follow}>
                                    Unfollow</Button>
                                : <Button variant="danger" onClick={props.follow}>
                                    Follow</Button>
                        }
                        <ButtonModal variant="outline-danger">Write</ButtonModal>

                    </div>
                </Figure>
                <div style={{width: "33rem", border: "grey 1px solid", margin: "5px"}}>
                    <Card.Body>
                        <div>NICKNAME: {props.name}</div>
                        <div>LOCATION: {"props.nickName"}</div>
                        <div>STATUS: {props.status}</div>
                    </Card.Body>
                </div>
            </Card>
        </div>


    );
};

export default UserCard;