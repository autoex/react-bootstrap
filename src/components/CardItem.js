import React from 'react';
import {Card} from "react-bootstrap";
import img4 from "../img/photo5402186058361320575.jpg";
import Button from "react-bootstrap/Button";

const CardItem = () => {
    return (
        <Card className='cardItem'>
            <Card.Img variant='top' src={img4}/>
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem,
                    totam!</Card.Text>
                <Button variant='primary'>Learn more</Button>
            </Card.Body>
        </Card>
    );
};

export default CardItem;