import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { ArrowRightCircle, EnvelopeFill, Linkedin, Github } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function TeamPage() {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: 'Shiwansh Sharma',
      role: 'Founder & CEO',
      bio: 'Technology visionary with 10+ years of experience in digital transformation and enterprise solutions.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      skills: ['Leadership', 'Strategy', 'Cloud Architecture']
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'CTO',
      bio: 'Expert in full-stack development and system architecture with a passion for scalable solutions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
      skills: ['JavaScript', 'Node.js', 'Microservices']
    },
    {
      id: 3,
      name: 'Rahul Verma',
      role: 'Lead Developer',
      bio: 'Specializes in React and React Native development with a focus on performance optimization.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      skills: ['React', 'React Native', 'TypeScript']
    },
    {
      id: 4,
      name: 'Ananya Singh',
      role: 'UX/UI Designer',
      bio: 'Creative designer focused on creating intuitive user experiences and beautiful interfaces.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
      skills: ['Figma', 'User Research', 'Prototyping']
    },
    {
      id: 5,
      name: 'Vikram Joshi',
      role: 'DevOps Engineer',
      bio: 'Cloud infrastructure specialist with expertise in CI/CD pipelines and automation.',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1067&q=80',
      skills: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 6,
      name: 'Neha Gupta',
      role: 'QA Engineer',
      bio: 'Detail-oriented tester ensuring our products meet the highest quality standards.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
      skills: ['Automation', 'Testing', 'Quality Assurance']
    }
  ];

  return (
    <section className="py-5 my-5 team-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <Badge bg="light" text="primary" className="mb-3 px-3 py-2 section-badge">OUR TEAM</Badge>
            <h2 className="display-5 fw-bold mb-3">Meet Our Expert Team</h2>
            <p className="lead text-muted">
              The talented professionals who make Shiwansh Solutions a leader in digital transformation
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {teamMembers.map((member) => (
            <Col key={member.id} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm hover-effect team-card">
                <div className="team-image-container">
                  <Card.Img 
                    variant="top" 
                    src={member.image} 
                    alt={member.name}
                    className="team-member-img"
                  />
                </div>
                <Card.Body className="p-4 text-center">
                  <Card.Title className="h4 mb-2">{member.name}</Card.Title>
                  <Badge bg="primary-light" text="primary" className="mb-3 px-3 py-2 role-badge">
                    {member.role}
                  </Badge>
                  <Card.Text className="text-muted mb-4">
                    {member.bio}
                  </Card.Text>
                  
                  <div className="mb-4">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} bg="light" text="dark" className="me-2 mb-2 skill-badge">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="d-flex justify-content-center gap-3">
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      className="rounded-circle p-2 team-social-icon"
                      title="Email"
                    >
                      <EnvelopeFill />
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      className="rounded-circle p-2 team-social-icon"
                      title="LinkedIn"
                    >
                      <Linkedin />
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      className="rounded-circle p-2 team-social-icon"
                      title="GitHub"
                    >
                      <Github />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 pt-4">
          <Col className="text-center">
            <h3 className="h4 mb-4">Want to join our team?</h3>
            <Button 
              variant="primary" 
              size="lg" 
              className="px-4 rounded-pill shadow join-team-button"
            >
              View Open Positions <ArrowRightCircle className="ms-1" />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TeamPage;