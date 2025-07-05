'use client';

import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const jobs = [
  {
    title: 'Full Stack Intern',
    location: 'Remote / Chandigarh',
    type: 'Internship',
    email: 'ravi@shiwansh.com',
    experience: 'Fresher can apply',
    education: 'BCA / B.Tech / MCA students or recent graduates preferred',
    description:
      'Join our dev team to build scalable web applications and APIs. Ideal for freshers and students looking to kickstart their career in tech.',
    responsibilities: [
      'Assist in frontend and backend development tasks',
      'Work with React and Node.js under mentorship',
      'Participate in code reviews and sprint meetings',
    ],
    skills: ['React.js', 'Node.js', 'MongoDB', 'Git', 'REST APIs'],
    requiredSkills: ['Basic programming knowledge', 'Team collaboration', 'Good communication skills', 'Basic software knowledge is a plus'],
  },
  {
    title: 'Software Developer',
    location: 'Remote',
    type: 'Full-time',
    email: 'ravi@shiwansh.com',
    experience: '4+ years required',
    education: 'B.Tech / MCA / M.Tech in Computer Science or related field',
    description:
      'We are hiring skilled developers to build production-grade web apps and APIs using modern technologies.',
    responsibilities: [
      'Design and implement backend APIs and services',
      'Build and optimize frontend components',
      'Write scalable and secure code following best practices',
    ],
    skills: [
      'MERN Stack', 'MySQL', 'Git', 'AWS', 'Docker',
      'CI/CD Pipelines', 'REST APIs', 'GraphQL',
      'Unit Testing', 'Agile Methodology', 'Linux/Unix', 'Serverless Functions'
    ],
    requiredSkills: [
      'Clean coding', 'Database design', 'Problem-solving',
      'Good communication skills', 'Basic software knowledge is a plus'
    ],
  },
  {
    title: 'Sales Executive',
    location: 'Remote / Chandigarh',
    type: 'Full-time',
    email: 'ravi@shiwansh.com',
    experience: '6+ months preferred',
    education: 'Any graduate / MBA preferred',
    description:
      'Drive B2B sales and SaaS product promotions. Ideal for candidates with business acumen and communication skills.',
    responsibilities: [
      'Generate and follow up with leads',
      'Conduct online demos and close deals',
      'Maintain and update CRM tools',
    ],
    skills: ['Lead Generation', 'CRM Tools', 'Client Communication', 'Negotiation'],
    requiredSkills: ['Confidence', 'Basic marketing knowledge', 'Sales strategy', 'Good communication skills', 'Basic software knowledge is a plus'],
  },
  {
    title: 'HR Executive',
    location: 'Remote / Chandigarh',
    type: 'Full-time / Part-time',
    email: 'ravi@shiwansh.com',
    experience: '6 months to 2 years preferred',
    education: 'MBA / PGDM in HR or related fields',
    description:
      'We’re hiring an HR executive to manage recruitment, employee engagement, and general coordination.',
    responsibilities: [
      'Screen and interview candidates',
      'Coordinate onboarding processes',
      'Handle internal documentation and HR policies',
    ],
    skills: ['Recruitment Tools', 'HRMS', 'Interviewing', 'Excel'],
    requiredSkills: ['Professionalism', 'Communication', 'Time Management', 'Good communication skills', 'Basic software knowledge is a plus'],
  },
  {
    title: 'Sales Intern',
    location: 'Remote / Chandigarh',
    type: 'Internship',
    email: 'ravi@shiwansh.com',
    experience: 'Fresher can apply',
    education: 'BBA / MBA / B.Com / BCA freshers are welcome',
    description:
      'Support the sales team in outreach, reporting, and CRM updates. Perfect for those looking to explore a career in tech sales.',
    responsibilities: [
      'Assist in cold emailing and calling',
      'Work with CRM and maintain lead database',
      'Learn to build proposals and pitch decks',
    ],
    skills: ['Excel', 'CRM Tools', 'Follow-ups', 'Communication'],
    requiredSkills: ['Basic computer skills', 'Curiosity', 'Consistency', 'Good communication skills', 'Basic software knowledge is a plus'],
  },
  {
    title: 'Social Media Manager (Intern)',
    location: 'Remote',
    type: 'Internship',
    email: 'ravi@shiwansh.com',
    experience: 'Fresher or 6+ months in digital marketing',
    education: 'BBA / BCA / MBA / Mass Comm / Digital Marketing students welcome',
    description:
      'Help us build brand visibility through engaging content and digital outreach. Great learning ground for future digital marketers.',
    responsibilities: [
      'Plan and create content calendars',
      'Schedule posts and analyze metrics',
      'Support social campaigns and outreach',
    ],
    skills: ['SEO Basics', 'Canva', 'Instagram Marketing', 'Google Analytics'],
    requiredSkills: ['Creativity', 'Consistency', 'Good writing skills', 'Good communication skills', 'Basic software knowledge is a plus'],
  },
];

export default function Career() {
  const handleShare = () => {
    const link = 'https://shiwansh.com/career';
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied: ' + link);
    }).catch(() => {
      alert('Failed to copy link.');
    });
  };

  return (
    <div
      className="min-vh-100 py-4 py-md-5"
      style={{
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f9e8ff 100%)',
      }}
    >
      {/* Header */}
      <div className="container text-center mb-5">
        <motion.h1
          className="display-4 fw-bold text-dark mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              background: 'linear-gradient(to right, #4f46e5, #a855f7)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            🚀 Join Our Team
          </span>
        </motion.h1>
        <motion.p
          className="lead text-muted mx-auto"
          style={{ maxWidth: '700px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We’re shaping the future of tech — and we want you with us. Apply now or send your CV to{' '}
          <strong>ravi@shiwansh.com</strong>
        </motion.p>
      </div>

      {/* Job Cards */}
      <div className="container mb-5">
        <div className="row g-4">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="col-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                    <h2 className="h5 fw-bold text-dark">{job.title}</h2>
                    <span className="text-muted small">
                      {job.location} | {job.type}
                    </span>
                  </div>
                  <p className="mt-2 mb-3 text-secondary">{job.description}</p>
                  <p className="mb-1"><strong>Experience:</strong> {job.experience}</p>
                  <p className="mb-3"><strong>Education:</strong> {job.education}</p>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h6>📌 Responsibilities</h6>
                      <ul className="text-secondary small ps-3 mb-0">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h6>🛠 Skills & Requirements</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {job.skills.concat(job.requiredSkills).map((skill, i) => (
                          <span
                            key={i}
                            className="badge bg-primary bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="container text-center mb-5">
        <motion.p
          className="text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Prefer to apply directly? Send your CV to{' '}
          <a href="mailto:ravi@shiwansh.com" className="text-primary fw-semibold text-decoration-underline">
            ravi@shiwansh.com
          </a>{' '}
          or connect with us on{' '}
          <a href="https://www.linkedin.com/company/shiwansh-solutions" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </motion.p>

    
      </div>
    </div>
  );
}
