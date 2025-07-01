// src/Components/ClientFeedback.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { StarFill, StarHalf } from 'react-bootstrap-icons';

const reviewss = [
    {
        name: 'Emily Thompson',
        title: 'Front-End Developer',
        text: 'Shiwansh Solution provided me with the best guidance in front-end tools. Their real-world project approach helped me build confidence.',
        rating: 4.5,
    },
    {
        name: 'James Anderson',
        title: 'Back-End Developer',
        text: 'I learned Node.js and databases from scratch. The team’s support was amazing and helped me build scalable backend systems.',
        rating: 5,
    },
    {
        name: 'Sophie Müller',
        title: 'UI/UX Designer',
        text: 'The UI/UX training was excellent. I got to work on real designs and learned Figma and design systems practically.',
        rating: 4.5,
    },
    {
        name: 'Michael Brown',
        title: 'Full Stack Developer',
        text: 'From React to MongoDB, the full stack training was intense and rewarding. Shiwansh Solution is great for aspiring developers.',
        rating: 5,
    },
    {
        name: 'Olivia Watson',
        title: 'Cloud Engineer',
        text: 'They taught me AWS, Docker, and deployment workflows. The DevOps sessions were practical and industry-focused.',
        rating: 4.5,
    },
    {
        name: 'Liam Scott',
        title: 'Software Developer',
        text: 'I started as a beginner, but with their support, I now work on full-stack applications for a global product company.',
        rating: 5,
    }
];

function ClientFeedback() {
    return (
        <section className="py-5 text-center bg-white">
            <h2 className="fw-bold mb-3">Client Feedback</h2>
            <p className="text-muted mb-5">
                Trusted by global businesses for Web & App Development, Cloud, SaaS, UI/UX, and Digital Marketing — Shiwansh Solution delivers fast, scalable, and tailored tech solutions.
            </p>


            <Container>
                <Row className="g-4">
                    {reviewss.map((review, index) => {
                        const fullStars = Math.floor(review.rating);
                        const hasHalfStar = review.rating % 1 !== 0;

                        return (
                            <Col key={index} xs={12} md={4}>
                                <Card
                                    className="p-4 h-100"
                                    style={{
                                        backgroundColor: '#f9f9f9',
                                        border: 'none',
                                        borderRadius: '12px'
                                    }}
                                >
                                    <div className="text-start mb-3">
                                        <h6 className="mb-0 fw-bold">{review.name}</h6>
                                        {/* <small className="text-muted fst-italic">{review.title}</small> */}
                                    </div>
                                    <Card.Text className="text-start text-muted">
                                        {review.text}
                                    </Card.Text>
                                    <div className="text-start text-warning">
                                        {[...Array(fullStars)].map((_, i) => (
                                            <StarFill key={i} />
                                        ))}
                                        {hasHalfStar && <StarHalf />}
                                    </div>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default ClientFeedback;
