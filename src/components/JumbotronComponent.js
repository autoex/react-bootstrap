import {Container} from 'react-bootstrap';
import img1 from '../img/photo5402186058361320572.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.jumbo {
background: url(${img1}) no-repeat fixed bottom;
background-size: cover;
position:relative;
z-index:-2;
height: 350px;

}
.overlay {
background-color:#000;
opacity: .3;
z-index-1;
top:0;
left:0;
right:0;
bottom:0;
position: absolute;
}
`
const JumbotronComponent = () => {
    return (
        <Styles>
            <div className=" p-5 text-white bg-dark jumbo">
                <div className="overlay"/>
                <Container style={{position: 'relative', zIndex:1}}>
                    <h2>Change the background</h2>
                    <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look.
                        Then,
                        mix and match with additional component themes and more.</p>
                    
                </Container>
            </div>
        </Styles>
    );
};

export default JumbotronComponent;