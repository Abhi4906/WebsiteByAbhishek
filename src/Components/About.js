import React, { useState } from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'

function About() {
    const [activePage, setActivePage] = useState('home');
    return (
    <div>
                  <section className="py-5 my-5 about-section">
            <Container>
              <Row className="align-items-center">
                <Col lg={6} className="mb-5 mb-lg-0">
                  <Badge bg="light" text="primary" className="mb-3 px-3 py-2 section-badge">ABOUT US</Badge>
                  <h2 className="display-4 fw-bold mb-4">Shiwansh Solutions for Your Business</h2>
                  <p className="lead text-muted mb-4">
                    Shiwansh Solutions is a leading technology company dedicated to helping businesses 
                    transform through innovative digital solutions.
                  </p>
                  <p className="mb-4">
                    Founded in 2020, we've grown from a small startup to a trusted partner for businesses 
                    across various industries. Our team of experts brings together diverse skills and 
                    experience to deliver exceptional results.
                  </p>
                  {/* <div className="d-flex gap-3">
                    <Button variant="primary" size="lg" className="rounded-pill px-4 about-button">
                      Learn More About Us
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      size="lg" 
                      className="rounded-pill px-4"
                      onClick={() => setActivePage('team')}
                    >
                      Our Team
                    </Button>
                  </div> */}
                </Col>
                <Col lg={6}>
                  <div className="about-image p-4 bg-light rounded">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Our team working" 
                      className="img-fluid rounded shadow about-team-img"
                    />
                  </div>
                </Col>
              </Row>
              
              <Row className="mt-5 pt-5 stats-row">
                <Col md={4} className="mb-4">
                  <div className="text-center p-4 stat-card">
                    <h3 className="display-3 fw-bold text-primary mb-3">50+</h3>
                    <h4 className="h5 mb-0">Happy Clients</h4>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="text-center p-4 stat-card">
                    <h3 className="display-3 fw-bold text-primary mb-3">100+</h3>
                    <h4 className="h5 mb-0">Projects Completed</h4>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="text-center p-4 stat-card">
                    <h3 className="display-3 fw-bold text-primary mb-3">50+</h3>
                    <h4 className="h5 mb-0">Team Members</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
    </div>
  )
}

export default About