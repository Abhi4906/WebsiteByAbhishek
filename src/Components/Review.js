// src/Components/Review.js
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

const reviews = [
  {
    name: 'Runjun kumar',
    title: 'Back-end  developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'I learned MERN Stack and Cloud from Shiwansh Solution. Their teaching and job support were excellent. They provide practical knowledge, clear concepts, and great career guidance. Highly recommended for beginners.',
  },
  {
    name: 'Abhishek Yadav',
    title: 'Front-End Developer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: ' Started my career with Shiwansh Solution, where I learned integration, React.js, and Next.js. It was a great experience, and now I am working with a decent package',
  },
  {
    name: 'Abhishek Yadav',
    title: 'Front-End Developer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: ' Started my career with Shiwansh Solution, where I learned integration, React.js, and Next.js. It was a great experience, and now I am working with a decent package',
  },
  {
    name: 'Raju Chauhan',
    title: 'Full Stack developer',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    text: 'Shiwansh Solutions is a great place for tech freshers to start their career. It offers a supportive team, hands-on learning, and real project experience. You get to work with the latest technologies in a friendly environment. A perfect company to grow skills, gain confidence, and build a strong tech foundation.',
  },
];

function Review() {
  return (
    <section className="py-5 text-center bg-light">
      <h2 className="fw-bold mb-3">Student&apos;s Feedback</h2>
      <p className="text-muted mb-5">
      Start your tech journey with Shiwansh Solution — learn to communicate with the global world, build a bright future, and grow your career with our hands-on internship program.
      </p>

      <Container>
        <Row className="g-4">
          {reviews.map((review, index) => (
            <Col key={index} xs={12} md={4}>
              <Card className="p-4 h-100" style={{ backgroundColor: '#f0f4ff', border: 'none', borderRadius: '12px' }}>
                <div className="d-flex align-items-center mb-3">
                  {/* <Image
                    src={review.image}
                    roundedCircle
                    width={60}
                    height={60}
                    className="me-3 border border-white"
                  /> */}
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">{review.name}</h6>
                    <small className="text-muted fst-italic">{review.title}</small>
                  </div>
                </div>
                <Card.Text className="text-start text-muted">
                  {review.text}
                </Card.Text>
                <div className="text-start text-warning">
                  {[...Array(5)].map((_, i) => (
                    <StarFill key={i} />
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Review;
