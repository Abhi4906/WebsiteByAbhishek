import React from 'react'
import { Badge, Card, Col, Container, Row } from 'react-bootstrap'

function OfferServices() {
  return (
    <div>
                      <section className="py-5 my-5 features-section" id="our services">
              <Container>
                <Row className="justify-content-center mb-5">
                  <Col lg={8} className="text-center">
                    <Badge bg="light" text="primary" className="mb-3 px-3 py-2 section-badge">OUR SERVICES</Badge>
                    <h2 className="display-5 fw-bold mb-3">Comprehensive Digital Solutions</h2>
                    <p className="lead text-muted">We provide end-to-end technology services to help your business grow</p>
                  </Col>
                </Row>
                <Row className="g-4">
                  <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm hover-effect feature-card">
                      <Card.Body className="p-4">
                        <div className="icon-box bg-primary-light mb-4">
                          <i className="bi bi-code-slash text-primary fs-4"></i>
                        </div>
                        <Card.Title className="h4 mb-3">Web Development</Card.Title>
                        <Card.Text className="text-muted">
                          Custom websites and web applications built with modern technologies for optimal performance.
                        </Card.Text>
                        {/* <Button href="#web-development" variant="link" className="px-0 text-primary text-decoration-none feature-link">
                          Learn more <ArrowRightCircle className="ms-1" />
                        </Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm hover-effect feature-card">
                      <Card.Body className="p-4">
                        <div className="icon-box bg-primary-light mb-4">
                          <i className="bi bi-phone text-primary fs-4"></i>
                        </div>
                        <Card.Title className="h4 mb-3">Mobile Apps</Card.Title>
                        <Card.Text className="text-muted">
                          Cross-platform mobile applications that deliver seamless user experiences.
                        </Card.Text>
                      {/*<Button href="#mobile-apps" variant="link" className="px-0 text-primary text-decoration-none feature-link">
                          Learn more <ArrowRightCircle className="ms-1" />
                        </Button>*/} 
                      </Card.Body>
                    </Card>
                  </Col>
                  <br/>
                  <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm hover-effect feature-card">
                      <Card.Body className="p-4">
                        <div className="icon-box bg-primary-light mb-4">
                          <i className="bi bi-cloud text-primary fs-4"></i>
                        </div>
                        <Card.Title className="h4 mb-3">Cloud Solutions</Card.Title>
                        <Card.Text className="text-muted">
                          Scalable cloud infrastructure and services to power your business operations.
                        </Card.Text>
                        {/* <Button href="#cloud-solutions" variant="link" className="px-0 text-primary text-decoration-none feature-link">
                          Learn more <ArrowRightCircle className="ms-1" />
                        </Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br/>
                <Row className="g-4">
                {/* SaaS Development Card */}
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-sm hover-effect feature-card">
                    <Card.Body className="p-4">
                      <div className="icon-box bg-primary-light mb-4">
                        <i className="bi bi-layers text-primary fs-4"></i>
                      </div>
                      <Card.Title className="h4 mb-3">SaaS Development</Card.Title>
                      <Card.Text className="text-muted">
                        Custom software-as-a-service solutions tailored to your business needs.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                {/* UI/UX Designing Card */}
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-sm hover-effect feature-card">
                    <Card.Body className="p-4">
                      <div className="icon-box bg-primary-light mb-4">
                        <i className="bi bi-palette text-primary fs-4"></i>
                      </div>
                      <Card.Title className="h4 mb-3">UI/UX Designing</Card.Title>
                      <Card.Text className="text-muted">
                        Intuitive and engaging user interfaces designed for optimal user experience.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Digital Marketing Card */}
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-sm hover-effect feature-card">
                    <Card.Body className="p-4">
                      <div className="icon-box bg-primary-light mb-4">
                        <i className="bi bi-megaphone text-primary fs-4"></i>
                      </div>
                      <Card.Title className="h4 mb-3">Digital Marketing</Card.Title>
                      <Card.Text className="text-muted">
                        Comprehensive digital strategies to grow your online presence and reach.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                </Row>
              </Container>
            </section>
    </div>
  )
}

export default OfferServices