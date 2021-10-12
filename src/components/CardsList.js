import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CardItem from "./CardItem";

const CardsList = () => {
    const cardsNumber = 3;
    const arrForCards =[];
    for(let i =0; i<cardsNumber; i++) {
        arrForCards.push(i)
    }
    return (
        <Container className='cardsList mt-4 mb-4'>
            {arrForCards.map(el=><CardItem key={el}/>)}


        </Container>
    );
};

export default CardsList;