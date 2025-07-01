import React, { useEffect, useRef } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'

function Feature() {
  // Auto-scroll trusted clients
  const trustedClientsRef = useRef(null);

  useEffect(() => {
    const scrollContainer = trustedClientsRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed as needed

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

    return (
    <div>
            <section className="py-5 bg-white trusted-clients-section">
              <Container>
                <Row className="justify-content-center mb-4">
                  <Col lg={8} className="text-center">
                  <Badge bg="light" text="primary" className="mb-3 px-3 py-2 section-badge">OUR Partners</Badge>
                    <h2 className="display-5 fw-bold mb-3">Our Valued Partners</h2>
                    <p className="lead text-muted">We're proud to collaborate with industry leaders</p>
                  </Col>
                </Row>
                <div className="trusted-clients-container">
                  <div className="trusted-clients-scroll" ref={trustedClientsRef}>
                    <div className="trusted-clients-inner">
                      {/* First set of logos */}
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flipkart_logo.svg/2560px-Flipkart_logo.svg.png" alt="Flipkart" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="Microsoft" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="Twitter" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="Apple" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="trusted-client-logo" />
                      
                      {/* Duplicate set for seamless looping */}
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flipkart_logo.svg/2560px-Flipkart_logo.svg.png" alt="Flipkart" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="Microsoft" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="Twitter" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="Apple" className="trusted-client-logo" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="trusted-client-logo" />
                    </div>
                  </div>
                </div>
              </Container>
            </section>

    </div>
  )
}

export default Feature