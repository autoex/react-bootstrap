import React from 'react';
import {Modal} from "react-bootstrap";
import LoginForm from "./LoginForm";

const ModalWindow = ({title, show, handleClose,  setAuthData}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginForm handleClose={handleClose} setAuthData={setAuthData}/>
            </Modal.Body>




        </Modal>
    );
};

export default ModalWindow;