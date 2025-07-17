import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ArrowRightCircle, Calendar } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const defaultBlogPosts = [
  {
    id: 1,
    slug: 'why-every-business-needs-a-custom-website-in-2025',
    title: 'Why Every Business Needs a Custom Website in 2025',
    summary: 'Discover the impact of personalized websites on branding, performance, and user engagement in the digital age.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80',
    date: 'June 25, 2025',
    category: 'Web Development'
  },
  {
    id: 2,
    slug: 'mastering-aws-for-scalable-cloud-solutions',
    title: 'Mastering AWS for Scalable Cloud Solutions',
    summary: 'Explore how AWS enables startups and enterprises to build resilient and scalable infrastructure efficiently.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    date: 'June 20, 2025',
    category: 'Cloud Computing'
  },
  {
    id: 3,
    slug: 'ui-ux-best-practices-2025',
    title: 'UI/UX Best Practices for 2025',
    summary: 'Learn about cutting-edge UI/UX trends that enhance usability, accessibility, and customer engagement metrics.',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1000&q=80',
    date: 'June 15, 2025',
    category: 'Design'
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(3);

  useEffect(() => {
    try {
      setBlogPosts(defaultBlogPosts);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setError('Failed to load blog posts. Showing default content.');
      setBlogPosts(defaultBlogPosts);
    }
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-4 py-md-5 bg-white">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-5 mb-3">Our Blog</h1>
            <p className="lead text-muted mb-4 px-2 px-md-0">
              Insights, tutorials, and trends from the world of web development, cloud, and design.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Posts */}
      <section className="py-3 py-md-5 bg-white">
        <Container>
          {error && (
            <div className="alert alert-warning text-center">
              {error}
            </div>
          )}
          <Row className="g-4">
            {blogPosts.slice(0, visiblePosts).map((post, index) => (
              <Col key={post.id} xs={12} sm={6} lg={4}>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  custom={index}
                >
                  <Card className="h-100 border-0 shadow-sm overflow-hidden hover-effect">
                    <div className="position-relative" style={{ overflow: 'hidden' }}>
                      <Card.Img
                        variant="top"
                        src={post.image}
                        alt={post.title}
                        style={{ 
                          height: '220px', 
                          objectFit: 'cover', 
                          transition: 'transform 0.5s ease',
                          width: '100%'
                        }}
                        className="card-img-scale"
                        loading="lazy"
                      />
                      <div className="position-absolute top-0 start-0 bg-primary text-white px-3 py-1 small">
                        {post.category}
                      </div>
                    </div>
                    <Card.Body className="p-3 p-md-4">
                      <div className="d-flex align-items-center mb-2 text-muted small">
                        <Calendar className="me-2" />
                        <span>{post.date}</span>
                      </div>
                      <Card.Title className="mb-3 fs-5 fs-md-4">{post.title}</Card.Title>
                      <Card.Text className="text-muted mb-3 d-none d-md-block">{post.summary}</Card.Text>
                      <Button as={Link} to={`/blog/${post.slug}`} variant="link" className="ps-0 text-primary text-decoration-none p-0">
                        Read More <ArrowRightCircle className="ms-2" />
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {visiblePosts < blogPosts.length && (
            <div className="text-center mt-4 mt-md-5">
              <Button 
                variant="outline-primary" 
                size="lg" 
                className="rounded-pill px-4"
                onClick={loadMorePosts}
              >
                Load More Articles <ArrowRightCircle className="ms-2" />
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Hover styles */}
      <style jsx>{`
        .hover-effect:hover .card-img-scale {
          transform: scale(1.05);
        }
        .card-img-scale {
          transition: transform 0.5s ease;
        }
        @media (max-width: 768px) {
          .display-5 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Blogs;
