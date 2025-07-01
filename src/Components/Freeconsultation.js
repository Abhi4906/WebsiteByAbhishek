import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

function Freeconsultation() {
    const [activePage, setActivePage] = useState('home');
    return (
    <div>
              <section className="py-5 bg-primary text-white cta-section">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="display-6 fw-bold mb-3">Ready to transform your business?</h2>
              <p className="lead mb-4 opacity-75">
                Let's discuss how we can help you achieve your digital goals.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button  onClick={() => setActivePage('contact')} href="/contact"variant="light" size="lg" className="px-4 py-3 rounded-pill fw-bold shadow cta-button" >
                Get Free Consultation <ArrowRightCircle className="ms-1" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Freeconsultation