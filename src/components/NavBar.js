import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div`
a, .navbar-dark .navbar-nav .nav-link {
text-decoration:none;
color: #adb1b8;
&:hover {
color: white}
}`

const NavBar = () => {
    return (
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
                        <Nav>
                            <Button variant='primary' className='me-2'>Log in</Button>
                            <Button variant='primary'>Sing out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>

    );
};

export default NavBar;