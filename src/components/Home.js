import React from 'react';
import Slider from "./Slider";
import {Card, Col, Container, Row} from "react-bootstrap";
import img4 from '../img/photo5402186058361320575.jpg'
import Button from "react-bootstrap/Button";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={img4}/>
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem,
                                    totam!</Card.Text>
                                <Button variant='primary'>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col><Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant='top' src={img4}/>
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem,
                                totam!</Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col><Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant='top' src={img4}/>
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem,
                                totam!</Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;