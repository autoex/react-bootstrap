import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const LoginForm = ({handleClose, setAuthData}) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        setAuthData({
            name,
            pass,
            auth: true
        });

        localStorage.setItem('user', JSON.stringify({
            name,
            pass,
            auth: true
        }))

        handleClose();


    };
    return (
        <Form onSubmit={loginUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={name}
                              onChange={e => setName(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={pass}
                              onChange={e => setPass(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Modal.Footer>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Form>
    );
};

export default LoginForm;