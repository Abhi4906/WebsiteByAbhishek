import React, { useState } from 'react'
import { Container, Nav, Navbar, Carousel, Button, Card, Row, Col, Badge } from 'react-bootstrap';
import { ArrowRightCircle, CheckCircleFill } from 'react-bootstrap-icons';

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePage, setActivePage] = useState('home');

  return (
    <div>
      {/* Hero Carousel */}
      <section className="hero-section">
        <Carousel
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          fade
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Digital transformation solutions"
                className="hero-image"
              />
              <div className="hero-overlay"></div>
            </div>
            <Carousel.Caption className="hero-caption">
              {/* <Badge bg="warning" pill className="mb-3 px-3 py-2 text-dark">Expert Team</Badge> */}
              <h1 className="display-4 fw-bold mb-4">Custom Software Solutions & Digital Marketing Experts</h1>
              <p className="lead mb-4">We specialize in web development, mobile apps, cloud services, UI/UX design, and performance marketing to boost your digital presence.</p>
              <a href="/contact">
                <Button
                  variant="light"
                  size="lg"
                  className="px-4 rounded-pill text-primary cta-button"
                >
                  Contact Us <ArrowRightCircle className="ms-1" />
                </Button>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Our expert technology team"
                className="hero-image"
              />
              <div className="hero-overlay"></div>
            </div>
            <Carousel.Caption className="hero-caption">
              {/* <Badge bg="warning" pill className="mb-3 px-3 py-2 text-dark">Expert Team</Badge> */}
              <h1 className="display-4 fw-bold mb-4">
                Custom Software Solutions & Digital Marketing Experts</h1>
              <p className="lead mb-4">We specialize in web development, mobile apps, cloud services, UI/UX design, and performance marketing to boost your digital presence.

              </p>
              <a href="/contact">
                <Button
                  variant="light"
                  size="lg"
                  className="px-4 rounded-pill text-primary cta-button"
                >
                  Contact Us <ArrowRightCircle className="ms-1" />
                </Button>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

    </div>
  )
}

export default Banner