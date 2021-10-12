import React from 'react';
import {Container} from "react-bootstrap";
import UsersTable from "./UsersTable";

const Users = () => {
    return (
        <Container className='mt-3'>
            <UsersTable/>
        </Container>
    );
};

export default Users;