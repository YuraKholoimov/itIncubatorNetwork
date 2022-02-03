import {Card, Figure} from "react-bootstrap";

// import style from '../Style/postsApp.module.css'

export const Post = () => {
    return (
        <div className='d-flex flex-column m-1 ' >
            <Card>
                <Card.Header>Title</Card.Header>
                <Card.Body className='d-flex'>
                    <Figure className='d-flex flex-column col-md-2'>
                        <Figure.Image
                            width={70}
                            height={70}
                            alt="171x180"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttf2XmG1m5cvXFVzGriJJ6H4uiRH2dqxw0g&usqp=CAU"
                        />
                        <Figure.Caption className='d-flex flex-column'>
                            <div>Name</div>
                            <div>Surname</div>
                        </Figure.Caption>
                    </Figure>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}