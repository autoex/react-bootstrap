import React, {useState} from 'react';
import {Button, Nav} from "react-bootstrap";

const LoginNavArea = ({handleShow, authData}) => {

    const loginHandler = () => {
        handleShow()

    };
    const singOutHandler = () => {
        localStorage.removeItem('user')

    };
    return (
        <Nav>

            {authData?.auth ?
                <>
                    <div className="loginName">{authData.name}</div>
                    <Button variant='primary' className='ms-2' onClick={singOutHandler}>Sing out</Button></>
                :
                <Button variant='primary' className='me-2' onClick={loginHandler}>Log in</Button>

            }


        </Nav>
    );
};

export default LoginNavArea;