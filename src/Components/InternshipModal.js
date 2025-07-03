import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Image, Alert } from 'react-bootstrap';

function InternshipModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    internshipType: '',
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const mobileRegex = /^[6-9]\d{9}$/; // Starts with 6,7,8,9 and 10 digits total

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Name should only contain letters and spaces (2-50 chars)';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Mobile must be 10 digits and start with 6, 7, 8, or 9';
    }

    if (!formData.internshipType) {
      newErrors.internshipType = 'Please select an internship type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const mapInternshipToId = (type) => {
    switch (type) {
      case 'Front-End Development': return 1;
      case 'Back-End Development': return 2;
      case 'Full-Stack Development': return 3;
      case 'DevOps': return 4;
      case 'Cloud Computing ( AWS / Azure )': return 5;
      case 'AI/ML': return 6;
      case 'Other': return 7;
      default: return 0;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      Name: formData.name,
      mobile: formData.mobile,
      internshipId: mapInternshipToId(formData.internshipType),
    };

    try {
      const response = await fetch('http://localhost:4000/api/interns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        setFormData({
          name: '',
          mobile: '',
          internshipType: '',
        });
        setErrors({});

        setTimeout(() => {
          setSubmissionSuccess(false);
          handleClose();
        }, 4000);
      } else {
        const errorData = await response.json();
        alert('❌ Failed to submit. Please try again.');
        console.error('Submission error:', errorData);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('❌ Network error. Please check your connection.');
    }
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

              {submissionSuccess && (
                <Alert variant="success">
                  ✅ Your interest has been submitted successfully! Our team will contact you soon.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    isInvalid={!!errors.mobile}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mobile}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Internship</Form.Label>
                  <Form.Select
                    name="internshipType"
                    value={formData.internshipType}
                    onChange={handleChange}
                    isInvalid={!!errors.internshipType}
                  >
                    <option value="">Interested In</option>
                    <option>Front-End Development</option>
                    <option>Back-End Development</option>
                    <option>Full-Stack Development</option>
                    <option>DevOps</option>
                    <option>Cloud Computing ( AWS / Azure )</option>
                    <option>AI/ML</option>
                    <option>Other</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.internshipType}
                  </Form.Control.Feedback>
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
