import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

const blogPosts = [
  {
    id: 1,
    slug: 'why-every-business-needs-a-custom-website-in-2025',

    title: 'How to Get Your First Software Job as a Fresher in 2025',
    content: `Breaking into the software development industry as a fresher can feel overwhelming, but it’s absolutely possible with the right approach.
  
  In 2025, companies are looking beyond degrees. They want candidates who have real-world project experience, strong problem-solving skills, and a willingness to learn.
  
  Start by learning key technologies like HTML, CSS, JavaScript, React.js, and Node.js. Work on personal or open-source projects to build your portfolio. Participate in internships or training programs that offer hands-on experience.
  
  Certifications, GitHub contributions, and a solid LinkedIn profile can help you stand out.
  
  Remember, your first job won’t require you to be perfect—it will require you to be passionate, curious, and consistent.`,
    image: 'https://www.lavontech.com/wp-content/uploads/2025/05/Why-Every-Business-Needs-a-Website-in-2025.jpeg',
    date: 'July 15, 2025',
    category: 'Career Advice'
  },
  {
    id: 2,
    slug: 'mastering-aws-for-scalable-cloud-solutions',
    title: 'Mastering AWS for Scalable Cloud Solutions',
    content: `AWS provides a comprehensive suite of cloud services for modern businesses—from EC2 and Lambda to RDS and DynamoDB. 
Understanding these services allows startups and enterprises to build highly available, secure, and scalable applications.

One of AWS’s biggest advantages is its pay-as-you-go pricing, making it accessible for any size business. 
You can build infrastructures that automatically scale during peak demand and scale down during off-peak hours.

Security is also a strong suit. AWS provides tools for compliance, encryption, and access control. 
Mastering AWS means building infrastructure that grows with your business and delivers performance at a global scale.

From hosting websites to machine learning and analytics—AWS has you covered.`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    date: 'June 20, 2025',
    category: 'Cloud Computing'
  },
  {
    id: 3,
    slug: 'ui-ux-best-practices-2025',
    title: 'UI/UX Best Practices for 2025',
    content: `Design trends in 2025 are centered around clarity, speed, and personalization. Minimalist layouts with vibrant accents dominate modern interfaces. 
Animations and microinteractions add delight and improve user feedback loops.

Accessibility is not optional anymore—it’s a core part of design thinking. From color contrast to keyboard navigation, inclusive design ensures a wider reach. 
Mobile-first is also the norm, not a choice.

Additionally, user data drives better personalization. Smart UI adapts to user behavior, showing only what’s most relevant. 
Speed and performance remain top priorities as users expect instant experiences.

By combining aesthetics with usability, brands create interfaces that not only look good—but also convert.`,
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1000&q=80',
    date: 'June 15, 2025',
    category: 'Design'
  },
];

function BlogDetail() {
  const { slug } = useParams();
  const blog = blogPosts.find(post => post.slug === slug);

  if (!blog) {
    return (
      <Container className="py-5 text-center">
        <h2>Blog Not Found</h2>
        <Link to="/blogs">
          <Button variant="outline-primary" className="mt-3">
            <ArrowLeft className="me-2" />
            Back to Blogs
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <Link to="/blogs">
            <Button variant="outline-secondary">
              <ArrowLeft className="me-2" />
              Back to Blogs
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="mx-auto">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="img-fluid rounded mb-4" 
            style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
          />
          <h1 className="mb-3">{blog.title}</h1>
          <p className="text-muted">{blog.date} | {blog.category}</p>
          <hr />
          <p style={{ whiteSpace: 'pre-line' }}>{blog.content}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogDetail;
