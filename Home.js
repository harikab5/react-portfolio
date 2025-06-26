 import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="page-container mt-5 text-center">
      <h1 className="mb-4">Hello! I'm B.Harika</h1>
      <Row className="align-items-center justify-content-center">
        <Col md={6}>
          <img
            src="/PHOTO.jpeg"
            alt="Profile"
            className="profile-img img-fluid rounded-circle mb-3"
          />
        </Col>
        <Col md={6}>
          <p>Currently a student at Madanapalle Institute of Technology and Science.</p>
          <p>I am passionate about web development and building innovative projects.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;