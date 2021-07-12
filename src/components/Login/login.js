import React, {useState} from 'react';

import {Button, Container, Form} from 'react-bootstrap';

function Login() {

    const[uname, setUname] = useState('');
    const[password, setPassword] = useState('');

    const handleClick = (e) =>{
        e.preventDefault();
    }


    return(
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={uname} onChange={(e) => setUname(e.target.value)} type="text" placeholder="Enter username" />
                    <Form.Text className="text-muted">
                    We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Login" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => handleClick(e)}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Login;