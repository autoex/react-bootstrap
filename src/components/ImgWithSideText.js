import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import img4 from "../img/photo5402186058361320575.jpg";

const ImgWithSideText = () => {
    return (
        <Container style={{marginTop: '2rem'}}>
            <Row>
                <Col md={7}><img src={img4} alt="" height={400}/></Col>
                <Col md={5}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Col>
            </Row>
        </Container>
    );
};

export default ImgWithSideText;