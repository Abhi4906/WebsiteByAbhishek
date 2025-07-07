import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Footer() {
    const [activePage, setActivePage] = useState('home');
  return (
    <div>
              <footer className="bg-dark text-white pt-5 pb-4 footer-custom">
        <Container>
          <Row className="g-4">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <span className="logo-gradient fs-3 fw-bold">Shiwansh</span>
                <span className="text-white ms-2 fs-3">Solutions</span>
              </div>
              <p className="text-muted mb-4">
                Transforming businesses through innovative digital solutions and 
                cutting-edge technology.
              </p>
              <div className="d-flex gap-3">
                {/* <Button href="https://facebook.com" variant="outline-light" size="sm" className="rounded-circle p-2 footer-social-icon">
                  <i className="bi bi-facebook"></i>
                </Button>
                <Button href="https://twitter.com" variant="outline-light" size="sm" className="rounded-circle p-2 footer-social-icon">
                  <i className="bi bi-twitter"></i>
                </Button> */}
                <Button href="https://in.linkedin.com/company/shiwansh-solutions" variant="outline-light" size="sm" className="rounded-circle p-2 footer-social-icon">
                  <i className="bi bi-linkedin"></i>
                </Button>
                <Button href="https://wa.me/919534098040" variant="outline-light" size="sm" className="rounded-circle p-2 footer-social-icon">
                  <i className="bi bi-whatsapp"></i>
                </Button>
              </div>
            </Col>

            <Col md={4} lg={2} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 footer-heading">Services</h5>
              <ul className="list-unstyled footer-links">
                <li className="mb-2"><a href="#" onClick={() => setActivePage('services')} className="text-muted text-decoration-none footer-link">Web Development</a></li>
                <li className="mb-2"><a href="#" onClick={() => setActivePage('services')} className="text-muted text-decoration-none footer-link">Mobile Apps</a></li>
                <li className="mb-2"><a href="#" onClick={() => setActivePage('services')} className="text-muted text-decoration-none footer-link">UI/UX Design</a></li>
                <li className="mb-2"><a href="#" onClick={() => setActivePage('services')} className="text-muted text-decoration-none footer-link">Cloud Solutions</a></li>
                <li className="mb-2"><a href="#" onClick={() => setActivePage('services')} className="text-muted text-decoration-none footer-link">Digital Marketing</a></li>
              </ul>
            </Col>

            <Col md={4} lg={2} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 footer-heading">Company</h5>
              <ul className="list-unstyled footer-links">
                <li className="mb-2"><a href="/about" onClick={() => setActivePage('about')} className="text-muted text-decoration-none footer-link">About Us</a></li>
                {/* <li className="mb-2"><a href="#" onClick={() => setActivePage('team')} className="text-muted text-decoration-none footer-link">Our Team</a></li> */}
                <li className="mb-2"><a href="/career" className="text-muted text-decoration-none footer-link">Careers</a></li>
                {/* <li className="mb-2"><a href="/blogs" className="text-muted text-decoration-none footer-link">Blog</a></li> */}
                <li><a href="/Intership" className="text-muted text-decoration-none footer-link">Intership</a></li>
              </ul>
            </Col>

            <Col md={4} lg={4}>
              <h5 className="text-uppercase mb-4 footer-heading">Contact Us</h5>
              <ul className="list-unstyled text-muted footer-contact-info">
                <li className="mb-3 d-flex">
                  <i className="bi bi-geo-alt-fill me-3 text-primary footer-contact-icon"></i>
                  <span>B-116, Modeltown, Sector 126, Mohali - 140308</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-telephone-fill me-3 text-primary footer-contact-icon"></i>
                  <span>+91 9534098040</span>
                </li>
                <li className="d-flex">
                  <i className="bi bi-envelope-fill me-3 text-primary footer-contact-icon"></i>
                  <a href="mailto:contact@shiwanshsolutions.com" className="text-muted text-decoration-none footer-link">
                    hr@shiwansh.com
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <hr className="my-4 border-secondary" />

          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="small text-muted mb-0">
                &copy; {new Date().getFullYear()} Shiwansh Solutions. All rights reserved.<br/>@Developed By: Abhishek Yadav.
              </p>
            </Col>
            {/* <Col md={6} className="text-center text-md-end">
              <ul className="list-inline small mb-0 footer-legal-links">
                <li className="list-inline-item"><a href="#privacy" className="text-muted text-decoration-none footer-link">Privacy Policy</a></li>
                <li className="list-inline-item mx-2">·</li>
                <li className="list-inline-item"><a href="#terms" className="text-muted text-decoration-none footer-link">Terms of Service</a></li>
                <li className="list-inline-item mx-2">·</li>
                <li className="list-inline-item"><a href="#sitemap" className="text-muted text-decoration-none footer-link">Sitemap</a></li>
              </ul>
            </Col> */}
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer