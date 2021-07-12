import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import Welcome from '../Welcome/welcome';
import Login from '../Login/login';
import './loginPage.css';

function LoginPage () {
    return(
        <div>
            <Container>
            <Row>
                <Col fluid='true'><Welcome/></Col>
            </Row>
            <Row>
                <Col lg={6} md={6} xs={12}>
                    <Image rounded className="img-welcome" src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg'></Image>
                </Col>
                <Col lg={6} md={6} xs={12}>
                    <Login/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default LoginPage;