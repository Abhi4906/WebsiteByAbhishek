import React from 'react'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'

function Contact() {
  return (
    <div>
                  <section className="py-5 my-5 contact-section">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <div className="text-center mb-5">
                    <Badge bg="primary" pill className="mb-3 px-3 py-2 section-badge">GET IN TOUCH</Badge>
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
                      <form>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Your Name</label>
                          <input type="text" className="form-control" id="name" placeholder="Enter your name"required/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email Address</label>
                          <input type="email" className="form-control" id="email" placeholder="Enter your email"required/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="mobile" className="form-label">Mobile Number</label>
                          <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number"pattern="[0-9]{10}"title="Please enter a 10-digit mobile number" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label">Subject</label>
                          <input type="text" className="form-control" id="subject" placeholder="What's this about?"/>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="message" className="form-label">Message</label>
                          <textarea className="form-control" id="message" rows={5} placeholder="Tell us about your project or inquiry"required></textarea>
                        </div>
                        <Button variant="primary" size="lg" type="submit"className="w-100 rounded-pill py-3 fw-bold submit-button">
                          Send Message
                        </Button>
                      </form>
                    </Card.Body>
                  </Card>
                </Col>
      
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
                          +91 62803 91882   (Office)<br />
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
                          <Button  href="https://wa.me/919534098040"variant="outline-primary" className="rounded-circle p-2 social-icon">
                            <i className="bi bi-whatsapp"></i>
                          </Button>
                          {/* <Button variant="outline-primary" className="rounded-circle p-2 social-icon">
                            <i className="bi bi-twitter"></i>
                          </Button> */}
                          <Button href="https://in.linkedin.com/company/shiwansh-solutions"  variant="outline-primary" className="rounded-circle p-2 social-icon">
                            <i className="bi bi-linkedin"></i>
                          </Button>
                          {/* <Button variant="outline-primary" className="rounded-circle p-2 social-icon">
                            <i className="bi bi-instagram"></i>
                          </Button> */}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
    </div>
  )
}

export default Contact