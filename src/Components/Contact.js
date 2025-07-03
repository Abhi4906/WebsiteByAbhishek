import React, { useState } from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate email format and allowed domains
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'icloud.com',
      'protonmail.com',
      'shiwansh.com',
      'shiwanshsolutions.com'
    ];
    
    if (!emailRegex.test(email)) return false;
    
    const domain = email.split('@')[1].toLowerCase();
    return allowedDomains.includes(domain);
  };

  // Validate mobile number (exactly 10 digits)
  const validateMobile = (mobile) => {
    return /^\d{10}$/.test(mobile);
  };

  // Validate the entire form
  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      mobile: '',
      message: ''
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please use a valid email (e.g., @gmail.com, @yahoo.com)';
      isValid = false;
    }

    // Mobile validation (optional but must be valid if provided)
    if (formData.mobile && !validateMobile(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit number';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Special handling for mobile number to prevent non-digit input
    if (id === 'mobile') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [id]: digitsOnly }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:4000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
      });

      alert(result.message || 'Thank you for your message! We will get back to you soon.');
      
    } catch (error) {
      alert(error.message || 'An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="py-5 my-5 contact-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h2 className="display-4 fw-bold mb-3">Contact Us</h2>
                <p className="lead text-muted">
                  Have questions or want to discuss a project? We'd love to hear from you.
                </p>
              </div>
            </Col>
          </Row>
  
          <Row className="g-4">
            <Col lg={6}>
              <Card className="border-0 shadow-sm h-100 contact-form-card">
                <Card.Body className="p-5">
                  <h3 className="h4 mb-4">Send us a message</h3>
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name Field */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Your Name *</label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name" 
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email" 
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      <small className="text-muted">We accept Gmail, Yahoo, Outlook, etc.</small>
                    </div>

                    {/* Mobile Field */}
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">Mobile Number</label>
                      <input 
                        type="tel" 
                        className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                        id="mobile" 
                        placeholder="9876543210"
                        value={formData.mobile}
                        onChange={handleChange}
                        maxLength="10"
                      />
                      {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                      <small className="text-muted">Optional - 10 digits only</small>
                    </div>

                    {/* Subject Field */}
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea 
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        id="message" 
                        rows={5} 
                        placeholder="Tell us about your project or inquiry (minimum 10 characters)"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>

                    <Button 
                      variant="primary" 
                      size="lg" 
                      type="submit"
                      className="w-100 rounded-pill py-3 fw-bold submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
  
            {/* Contact Information Card (unchanged) */}
            <Col lg={6}>
              <Card className="border-0 bg-light h-100 contact-info-card">
                <Card.Body className="p-5">
                  <h3 className="h4 mb-4">Contact Information</h3>
                  <p className="mb-5">
                    Fill out the form or reach out to us directly through the contact 
                    details below.
                  </p>
  
                  <div className="d-flex mb-4 contact-info-item">
                    <div className="me-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle contact-icon">
                        <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="h6 mb-1">Our Office</h4>
                      <p className="text-muted mb-0">
                        B-116, Modeltown, Sector 126,<br />
                        Mohali-140308, India
                      </p>
                    </div>
                  </div>
  
                  <div className="d-flex mb-4 contact-info-item">
                    <div className="me-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle contact-icon">
                        <i className="bi bi-telephone-fill text-primary fs-4"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="h6 mb-1">Phone</h4>
                      <p className="text-muted mb-0">
                        +91 62803 91882 (Office)<br />
                        +91 82830 58260 (Mobile)<br />
                        (Mon-Fri, 9am-6pm)
                      </p>
                    </div>
                  </div>
  
                  <div className="d-flex contact-info-item">
                    <div className="me-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle contact-icon">
                        <i className="bi bi-envelope-fill text-primary fs-4"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="h6 mb-1">Email</h4>
                      <p className="text-muted mb-0">
                        contactravi@shiwansh.com<br />
                        support@shiwanshsolutions.com
                      </p>
                    </div>
                  </div>
  
                  <hr className="my-5" />
  
                  <div>
                    <h4 className="h6 mb-3">Follow Us</h4>
                    <div className="d-flex gap-3 social-icons">
                      <Button href="https://wa.me/919534098040" variant="outline-primary" className="rounded-circle p-2 social-icon">
                        <i className="bi bi-whatsapp"></i>
                      </Button>
                      <Button href="https://in.linkedin.com/company/shiwansh-solutions" variant="outline-primary" className="rounded-circle p-2 social-icon">
                        <i className="bi bi-linkedin"></i>
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;