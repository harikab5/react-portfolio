import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container className="page-container mt-5 text-center">
      <h2 className="mb-4">My Projects</h2>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="project-card shadow-sm">
            <Card.Img variant="top" src="https://www.elibrarysoftware.com/img/library-shelf.jpg" alt="Library Management System" />
            <Card.Body>
              <Card.Title>📚 Library Management System</Card.Title>
              <Card.Text>
                A full-stack application built with React, Node.js, and MongoDB.
                It allows users to manage books, issue and return books, and maintain user records efficiently.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects; 