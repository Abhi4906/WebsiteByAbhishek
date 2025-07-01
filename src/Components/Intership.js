import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Review from './Review';

const categories = [
  {
    title: 'Front-End Development',
    courses: 1,
    image: 'https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcategory%2Fweb-design.png&w=256&q=75',
  },
  {
    title: 'Back-End Developer',
    courses: 2,
    image: 'https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcategory%2Fdesign.png&w=256&q=75',
  },
  {
    title: 'Full-Stack Developer',
    courses: 1,
    image: 'https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcategory%2Fpersonal.png&w=256&q=75',
  },
  {
    title: 'Cloud Computing',
    courses: 1,
    image: 'https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcategory%2Fserver.png&w=256&q=75',
  },
];

function Intership() {
  return (
    <section className="py-5 text-center bg-white" style={{ marginBottom: '100px' }}>
      <h2 className="fw-bold mb-2">Explore Top Courses Caterories</h2>
      <h3 className="fw-bold mb-5">That Change Yourself</h3>

      <Container>
        <Row className="g-4">
          {categories.map((cat, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card
                className="border-0 text-center p-4 h-100"
                style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Card.Img
                  variant="top"
                  src={cat.image}
                  style={{
                    height: '100px',
                    width: '100px',
                    objectFit: 'contain',
                    margin: '0 auto',
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{cat.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Review />
    </section>
  );
}

export default Intership;
