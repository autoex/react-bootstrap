import React from 'react';
import Slider from "./Slider";
import JumbotronComponent from "./JumbotronComponent";
import CardsList from "./CardsList";
import ImgWithSideText from "./ImgWithSideText";

const Home = () => {
    return (
        <div>
            <Slider/>
            <CardsList/>
            <JumbotronComponent/>
            <ImgWithSideText/>
        </div>
    );
};

export default Home;