import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ArrowRightCircle, Calendar } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ✅ Renamed to avoid conflict with useState variable
const defaultBlogPosts = [
  {
    id: 1,
    slug: 'why-every-business-needs-a-custom-website-in-2025',
    title: 'Why Every Business Needs a Custom Website in 2025',
    content: `In today’s digital age, a custom website is not a luxury—it’s a necessity. Businesses must differentiate themselves in a crowded online space.
A generic template just doesn't cut it anymore, as customers expect a seamless and branded experience.

Custom websites provide tailored user journeys, improved SEO performance, and integrate better with business tools. They also allow for scalability as your business grows.

Whether you're a small business or a global brand, a professionally developed website improves your credibility and engagement. It also ensures your platform is mobile-friendly, optimized for search engines, and aligned with your long-term digital goals.

Investing in a custom site is investing in your brand's future. It’s how you stand out in a world where first impressions are made online.`,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80',
    date: 'June 25, 2025',
    category: 'Web Development'
  },
  {
    id: 2,
    slug: 'how-to-get-your-first-software-job-as-a-fresher-in-2025',
    title: 'How to Get Your First Software Job as a Fresher in 2025',
    content: `Breaking into the software development industry as a fresher can feel overwhelming, but it’s absolutely possible with the right strategy.

Employers in 2025 are seeking candidates who show real-world problem-solving abilities, collaborative skills, and a passion for continuous learning. Rather than focusing only on degrees, companies now prioritize portfolios, GitHub profiles, and internship experience.

To land your first job, start by mastering core technologies like HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. Build mini-projects and participate in open-source contributions. Engage in industrial training programs where you gain hands-on exposure and mentorship from experienced developers.

Make your resume stand out with certification, a solid LinkedIn presence, and real project experience. Tailor your CV for each role and be prepared with coding interview questions.

If you're actively searching for "software development jobs for freshers," focus on building a profile that reflects what employers are looking for: dedication, adaptability, and technical skill. With the right foundation, your first break in the tech industry is closer than you think.`,
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20221109161109/HowToBecomeASoftwareEngineer.png',
    date: 'July 15, 2025',
    category: 'Career Advice'
  },
  {
    id: 3,
    slug: 'benefits-of-industrial-training-in-software-development',
    title: 'Top Benefits of Industrial Training in Software Development for Students',
    content: `For students looking to break into the IT world, industrial training is no longer optional—it's essential. In 2025, hiring managers value practical knowledge and project exposure over theoretical excellence alone.

Industrial training bridges the gap between academic learning and real-world development. It helps students build confidence, get hands-on experience with tools like Git, GitHub, React, Node.js, and even cloud platforms like AWS. Training programs focused on real projects help build your portfolio, which directly increases your chances of landing an internship or job.

Students who undergo industrial training develop better communication, debugging, and teamwork skills—traits highly valued in today's collaborative software teams. Companies prefer candidates who can contribute from day one, and that's exactly what good industrial training prepares you for.

If you're searching for "best industrial training for software development" or "how to gain real coding experience as a student," then make sure your program includes real mentorship, live projects, and placement support.`,
    image: 'https://www.acadecraft.com/blog/uploads/blog/2021/09/Skill-Development-training.jpg',
    date: 'July 18, 2025',
    category: 'Student Training'
  },
  {
    id: 4,
    slug: 'top-mistakes-businesses-make-when-hiring-developers',
    title: 'Top Mistakes Businesses Make When Hiring Software Developers',
    content: `Hiring the right software development team is critical for business success. However, many companies fall into common traps that cost time, money, and project quality.

One major mistake is hiring based only on cost. While budget matters, choosing the cheapest team can lead to poor code quality, delays, and scalability issues. Another mistake is unclear project scope—clients must clearly define their goals and expectations to avoid mismatches.

Businesses should also evaluate a team's communication skills, previous projects, and tech stack compatibility. Hiring a team without experience in your domain (e.g., e-commerce, SaaS, healthcare) can slow things down.

If you're searching for "reliable software development company in India" or "custom app developers for startups," focus on experience, transparency, and communication. At Shiwansh Solution, we guide you through every stage—from planning to deployment—with a focus on long-term success.`,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    date: 'July 20, 2025',
    category: 'Client Education'
  },
  {
    id: 5,
    slug: 'skills-every-fullstack-developer-needs-in-2025',
    title: '7 Essential Skills Every Full Stack Developer Should Master in 2025',
    content: `In 2025, the demand for versatile full stack developers continues to rise. Whether you’re a fresher, freelancer, or transitioning professional, mastering the right combination of front-end and back-end technologies is crucial.

Top companies hiring full stack developers are looking for expertise in HTML5, CSS3, JavaScript ES6+, React.js or Next.js for the frontend, and Node.js or Express.js for the backend. Understanding databases like MongoDB and MySQL, as well as version control with Git/GitHub, is non-negotiable.

What sets apart great full stack developers is their ability to build, deploy, and maintain scalable apps. Cloud deployment (especially using AWS), CI/CD pipelines, RESTful APIs, and basic knowledge of security best practices are also in demand.

If you're searching "full stack developer roadmap 2025" or "how to become a job-ready full stack developer," focus on hands-on learning, real projects, and mentorship. These skills not only land you interviews but help you stand out during technical assessments.

Whether you’re applying for software internships, freelancing, or joining startups, mastering this stack will future-proof your career.`,
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png',
    date: 'July 22, 2025',
    category: 'Skill Building'
  },
  {
    id: 6,
    slug: 'cloud-deployment-for-beginners-using-aws',
    title: 'Cloud Deployment for Beginners: How to Host Your Website Using AWS',
    content: `Cloud deployment is no longer just for large corporations. In 2025, startups, students, and small businesses are embracing cloud platforms like AWS to deploy scalable, secure, and cost-efficient applications.

Amazon Web Services (AWS) offers tools such as EC2 for servers, S3 for storage, Route 53 for DNS, and Lambda for serverless functions—all of which help developers focus more on building and less on infrastructure. Beginners can get started with static site hosting, deploying Node.js apps with Elastic Beanstalk, and automating CI/CD using GitHub Actions.

When you search for "how to host a website on AWS" or "cloud deployment for beginners," you’re likely to land on dozens of tutorials. But here’s the truth: combining theory with a real project, guided by experts, is the most effective way to master cloud hosting.

Whether you're a student learning full stack development or a business looking for seamless deployment, cloud skills are a game-changer.`,
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*00lelg6dxh-mrwt-',
    date: 'July 25, 2025',
    category: 'Cloud Deployment'
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
  const [visiblePosts, setVisiblePosts] = useState(9);

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
           Explore the latest in software, business innovation, and career growth—through insights, tutorials, and industry trends
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
                      {/* <div className="d-flex align-items-center mb-2 text-muted small">
                        <Calendar className="me-2" />
                        <span>{post.date}</span>
                      </div> */}
                      <Card.Title className="mb-3 fs-5 fs-md-4">{post.title}</Card.Title>

                      {/* ✅ Safe summary fallback */}
                      <Card.Text className="text-muted mb-3 d-none d-md-block">
                        {post.content.slice(0, 120)}...
                      </Card.Text>

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
