import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const blogPosts = [
  {
    id: 1,
    title: 'Why Every Business Needs a Custom Website in 2025',
    summary:
      'Discover the impact of personalized websites on branding, performance, and user engagement.',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*ww3IkE11L7Fur8ir.png',
    date: 'June 25, 2025',
  },
  {
    id: 2,
    title: 'Mastering AWS for Scalable Cloud Solutions',
    summary:
      'Explore how AWS enables startups and enterprises to scale infrastructure efficiently.',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*ww3IkE11L7Fur8ir.png',
    date: 'June 20, 2025',
  },
  {
    id: 3,
    title: 'UI/UX Best Practices for 2025',
    summary:
      'Learn about modern UI/UX trends that enhance usability, accessibility, and engagement.',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*ww3IkE11L7Fur8ir.png',
    date: 'June 15, 2025',
  },

];

function Blogs() {
  return (
    <div>
      {/* Blog Header */}
      <section className="py-5 bg-white text-center">
        <Container>
          <h1 className="fw-bold mb-3">Our Blog</h1>
          <p className="text-muted">
            Insights, tutorials, and trends from the world of web development, cloud, and design.
          </p>
        </Container>
      </section>

      {/* Blog Listing */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {blogPosts.map((post) => (
              <Col key={post.id} md={4}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={post.image}
                    alt={post.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text className="text-muted">{post.summary}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <small className="text-muted">{post.date}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    
    </div>
  );
}

export default Blogs;
