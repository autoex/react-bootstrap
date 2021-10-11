import React, {useState, useEffect} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import LoginNavArea from "./LoginNavArea";
import ModalWindow from "./Modal";


const Styles = styled.div`
a, .navbar-dark .navbar-nav .nav-link {
text-decoration:none;
color: #adb1b8;
&:hover {
color: white}
}`

const NavBar = () => {
    const [authData, setAuthData] = useState({
        name: '',
        pass: '',
        auth: false
    });
    useEffect(()=> {
        setAuthData(JSON.parse(localStorage.getItem('user')))

    }, [authData]);

    useEffect(()=>{
        console.log(localStorage.getItem('user'))
        setAuthData(JSON.parse(localStorage.getItem('user')))
    }, []);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Styles>
            <Navbar bg="dark" variant="dark" expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link>
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/users'>Users</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/about'>About</Link>
                            </Nav.Link>
                        </Nav>
                        <LoginNavArea handleShow={handleShow} authData={authData}  />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
           <ModalWindow title='Log In' show={show} handleClose={handleClose} authData={authData} setAuthData={setAuthData} />
        </>


    );
};

export default NavBar;