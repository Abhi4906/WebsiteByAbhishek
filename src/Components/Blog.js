import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

function Blog() {
  const blogPost = {
    title: 'Why Every Business Needs a Custom Website in 2025',
    date: 'June 25, 2025',
    image: 'https://miro.medium.com/v2/resize:fit:1200/format:webp/0*ww3IkE11L7Fur8ir.png',
    content: `
      In today’s digital-first world, having a basic website isn’t enough. 
      Custom websites empower businesses to stand out, offer seamless user experiences, 
      and scale as needed.

      A tailored solution means your platform works specifically for your goals — 
      whether it’s e-commerce, booking systems, lead generation, or community engagement.

      With modern technologies like React, Next.js, and cloud hosting on AWS, 
      you get performance, security, and future-readiness all bundled together.
      
      Start now to stay ahead in 2025.
    `,
  };

  return (
    <div>
      {/* Blog Header */}
      <section className="py-5 bg-white text-center">
        <Container>
          <h1 className="fw-bold">{blogPost.title}</h1>
          <p className="text-muted">{blogPost.date}</p>
        </Container>
      </section>

      {/* Blog Content */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="img-fluid mb-4 rounded"
                style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
              />
              <div className="text-muted" style={{ whiteSpace: 'pre-line', fontSize: '1.1rem' }}>
                {blogPost.content}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    
    </div>
  );
}

export default Blog;
