import React from 'react';
import {Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default ()=>(
    <div className="display-1">
        <Container>
          <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
    </Container>
        <Link to='/b'>ELo</Link>
    </div>
)