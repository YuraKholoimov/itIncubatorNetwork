import {Card, Figure} from "react-bootstrap";
import React from "react";

export type PostType = {
    id: number
    post?: string
    likesCount?: number
}
export const Post: React.FC<PostType> = (props) => {
    return (
        <div className='d-flex flex-column m-1 '>
            <Card className="shadow rounded">
                {/*----------- TITLE ------------*/}
                <Card.Header>Title</Card.Header>
                <Card.Body className='d-flex '>
                    <Figure className='d-flex flex-column col-md-2'>
                        {/*-----------Figure IMG  ------------*/}
                        <Figure.Image
                            width={70}
                            height={70}
                            alt="171x180"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttf2XmG1m5cvXFVzGriJJ6H4uiRH2dqxw0g&usqp=CAU"
                        />
                        {/*-----------Figure NAME ------------*/}
                        <Figure.Caption className='d-flex flex-column'>
                            <div>Name</div>
                            <div>Surname</div>
                        </Figure.Caption>
                    </Figure>
                    {/*----------- POST  ------------*/}
                    <blockquote className="blockquote mb-0 ">
                        <p>
                            {props.post}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        {/*-----------POST END  ------------*/}
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}