import {Card, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const MessagesPage = () => {
    return (
        <>
            <div className='d-flex justify-content-end col-md-12'>

                    <div className='col-md-8 m-4'>
                        {/*    <div className='d-flex col-md-12'>*/}
                        {/*        <div>*/}
                        {/*            <Container>*/}
                        {/*                <div>*/}
                        {/*                    <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"*/}
                        {/*                         style={{width:'60px', borderRadius:"50%", margin: '10px'}}*/}
                        {/*                         alt=""/>*/}
                        {/*                    name Surname*/}
                        {/*                </div>*/}
                        {/*                <div>*/}
                        {/*                    <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"*/}
                        {/*                         style={{width:'60px', borderRadius:"50%", margin: '10px'}}*/}
                        {/*                         alt=""/>*/}
                        {/*                    name Surname*/}
                        {/*                </div>*/}
                        {/*                <div>*/}
                        {/*                    <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"*/}
                        {/*                         style={{width:'60px', borderRadius:"50%", margin: '10px'}}*/}
                        {/*                         alt=""/>*/}
                        {/*                    name Surname*/}
                        {/*                </div>*/}
                        {/*            </Container>*/}
                        {/*        </div>*/}

                        {/*        <div>*/}
                        {/*            <Container>*/}
                        {/*                <div className='d-flex mh-100'>*/}
                        {/*                    "Dialog"*/}
                        {/*                </div>*/}
                        {/*                <div>*/}
                        {/*                    Dialog*/}
                        {/*                </div>*/}
                        {/*                <div>*/}
                        {/*                    Dialog*/}
                        {/*                </div>*/}
                        {/*            </Container>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                        <Card className='d-flex flex-row my-2'>
                            <Card.Img
                                style={{width:'90px', height:'90px', borderRadius:"50%", margin: '10px'}}
                                variant="top"
                                src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className='d-flex flex-row my-2'>
                            <Card.Img
                                style={{width:'90px', height:'90px', borderRadius:"50%", margin: '10px'}}
                                variant="top"
                                src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className='d-flex flex-row my-2'>
                            <Card.Img
                                style={{width:'90px', height:'90px', borderRadius:"50%", margin: '10px'}}
                                variant="top"
                                src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <NavLink to={`/message/1`}>
                            <Card className='d-flex flex-row my-2'>
                                <Card.Img
                                    style={{width:'90px', height:'90px', borderRadius:"50%", margin: '10px'}}
                                    variant="top"
                                    src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"/>
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </NavLink>
                    </div>

            </div>
        </>
    )
}