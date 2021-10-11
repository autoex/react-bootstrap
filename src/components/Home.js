import React from 'react';
import Slider from "./Slider";
import {Card, Col, Container, Row} from "react-bootstrap";
import img4 from '../img/photo5402186058361320575.jpg'
import Button from "react-bootstrap/Button";
import JumbotronComponent from "./JumbotronComponent";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Container className='mt-4 mb-4'>
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
            <JumbotronComponent/>
            <Container style={{marginTop: '2rem'}}>
                <Row>
                    <Col md={7}><img src={img4} alt="" height={400}/></Col>
                    <Col md={5}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;