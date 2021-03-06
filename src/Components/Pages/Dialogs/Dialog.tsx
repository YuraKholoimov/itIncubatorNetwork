import {Card, ListGroupItem} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogType = {
    id: number
    name: string
    message: string
    avatar: string
}

export const Dialog: React.FC<DialogType> = (props) => (
    <div className='d-flex justify-content-end'>
        <div className='col-md-8 mx-sm-4 my-sm-1'>
            <ListGroupItem action className="shadow">
                <NavLink to={`message/${props.id}`} className='text-decoration-none'>
                    <div className='d-flex flex-row text-body'>
                        {/*--------------------- Dialog --------------------*/}
                        <Card.Img
                            style={{width: '90px', height: '90px', borderRadius: "50%", margin: '10px'}}
                            variant="top"
                            src={props.avatar}
                        />
                        <Card.Body  >
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                                {props.message}
                            </Card.Text>
                        </Card.Body>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        {/*---------------- End of Dialog ----------------*/}
                    </div>
                </NavLink>
            </ListGroupItem>
        </div>
    </div>
)