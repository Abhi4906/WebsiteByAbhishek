// src/Components/InternshipModal.js
import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';

function InternshipModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    internshipType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Application submitted!');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body className="p-0">
        <Row className="g-0">
          {/* Left Side - Image */}
          <Col md={5} className="d-none d-md-block">
            <Image
              src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-cat.93ab8390.jpg&w=1080&q=75"
              alt="Internship Promo"
              fluid
              className="h-100 w-100 object-cover rounded-start"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </Col>

          {/* Right Side - Form */}
          <Col md={7}>
            <div className="p-4">
              <h4 className="mb-4 text-primary">Apply for Internship</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Internship Type</Form.Label>
                  <Form.Select
                    name="internshipType"
                    value={formData.internshipType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select internship type</option>
                    <option>Web Front-End Development</option>
                    <option>Back-End Developer</option>
                    <option>Full-Stack Developer</option>
                    <option>Cloud Computing</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="outline-secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default InternshipModal;
