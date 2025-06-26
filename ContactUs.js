 import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="page-container mt-5">
      <h2 className="text-center mb-5">📬 Contact Me</h2>

      <Row className="align-items-center justify-content-center">
        {/* Image Column */}
        <Col md={5} className="text-center mb-4 mb-md-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Ke1RPaty2Di22u3J0ReG28Rk2lzRq-ONtA&s" // Make sure this image is in public/
            alt="Contact Me"
            className="contact-img img-fluid rounded-circle"
          />
        </Col>

        {/* Info Column */}
        <Col md={5}>
          <div className="contact-info text-start p-4 bg-light rounded shadow-sm">
            <h4>Let's get in touch!</h4>
            <hr />

            <p><strong>📱 Mobile:</strong> <a href="tel:9390594072">9390594072</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:harikab507@gmail.com">harikab507@gmail.com</a></p>

            <p className="mt-4">
              Feel free to reach out for collaborations, project inquiries, or just to say hello!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;