import React from 'react';
import {Carousel} from "react-bootstrap";
import img1 from '../img/photo5402186058361320572.jpg'
import img2 from '../img/photo5402186058361320573.jpg'
import img3 from '../img/photo5402186058361320574.jpg'
import img4 from '../img/photo5402186058361320575.jpg'

const Slider = () => {
    const imgCaption = '#RBRHondaTurkey';
    const carouselItemStyles = {height: '600px'}
    return (
        <Carousel>
            <Carousel.Item style={carouselItemStyles}>
                <img src={img1} alt="" className='d-block w-100'/>
                <Carousel.Caption><h4>{imgCaption}</h4></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItemStyles}>
                <img src={img2} alt="" className='d-block w-100'/>
                <Carousel.Caption><h4>{imgCaption}</h4></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItemStyles}>
                <img src={img3} alt="" className='d-block w-100'/>
                <Carousel.Caption><h4>{imgCaption}</h4></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItemStyles}>
                <img src={img4} alt="" className='d-block w-100'/>
                <Carousel.Caption><h4>{imgCaption}</h4></Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Slider;