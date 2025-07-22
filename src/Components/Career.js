// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Helmet } from 'react-helmet'; 


// const jobs = [
//   {
//     title: 'Sales Executive',
//     location: 'Remote / Chandigarh | Full-time / Part-time',
//     type: 'Full-time',
//     email: 'hr@shiwansh.com',
//     experience: '6+ months preferred',
//     education: 'Any graduate / MBA preferred',
//     description:
//       'Join our fast-growing team as a Sales Executive and take charge of promoting B2B SaaS products across India. Ideal for candidates with strong business acumen, target-oriented mindset, and a passion for tech-driven selling.',
//     responsibilities: [
//       'Identify and generate B2B leads via cold calling, LinkedIn, and email campaigns',
//       'Schedule and conduct virtual product demos for potential clients',
//       'Manage full sales cycle from outreach to closing deals',
//       'Update CRM records, pipeline tracking, and client reports',
//       'Collaborate with marketing for campaign alignment'
//     ],
//     skills: [
//       'B2B Sales', 'SaaS Selling', 'CRM Tools', 'Lead Generation',
//       'Client Engagement', 'Sales Funnels', 'Negotiation', 'Cold Outreach'
//     ],
//     requiredSkills: [
//       'Communication skills', 'Target-oriented approach', 'Presentation skills',
//       'Follow-up discipline', 'Basic software knowledge', 'Confidence', 'Remote work readiness'
//     ]
//   },
//   {
//     title: 'Social Media Manager (Intern)',
//     location: 'Remote / Chandigarh | Full-time / Part-time',
//     type: 'Internship',
//     email: 'hr@shiwansh.com',
//     experience: 'Fresher or 6+ months in digital marketing',
//     education: 'BBA / BCA / MBA / Mass Comm / Digital Marketing students welcome',
//     description:
//       'Launch your digital marketing career with Shiwansh Solutions. This internship is ideal for freshers eager to grow in social media management, content creation, and branding.',
//     responsibilities: [
//       'Create and manage content calendars for Instagram, LinkedIn, etc.',
//       'Design creatives using Canva and post regularly',
//       'Track performance via Google Analytics, Meta Insights',
//       'Assist in reel creation and hashtag strategies',
//       'Support paid ads and influencer outreach efforts'
//     ],
//     skills: [
//       'Social Media Marketing', 'Instagram Growth', 'LinkedIn Content', 'Google Analytics',
//       'SEO Basics', 'Content Planning', 'Brand Building', 'Digital Tools'
//     ],
//     requiredSkills: [
//       'Creativity', 'Writing skills', 'Consistency',
//       'Communication skills', 'Trend research', 'Canva design basics'
//     ]
//   },
//   {
//     title: 'HR Intern',
//     location: 'Remote / Chandigarh | Full-time / Part-time',
//     type: 'Full-time / Part-time',
//     email: 'hr@shiwansh.com',
//     experience: '0 months to 1 year preferred',
//     education: 'MBA / PGDM in HR or related fields',
//     description:
//       'We are hiring HR Interns to assist in recruitment, onboarding, and internal operations. A perfect role for someone starting their HR career with a practical, hands-on experience.',
//     responsibilities: [
//       'Post jobs on LinkedIn, Internshala, and job portals',
//       'Shortlist and screen candidates via calls/emails',
//       'Coordinate onboarding and joining formalities',
//       'Maintain employee records and HR sheets',
//       'Assist in organizing employee engagement activities'
//     ],
//     skills: [
//       'Recruitment', 'HRMS Tools', 'Google Sheets', 'Interview Coordination',
//       'People Management', 'Policy Documentation'
//     ],
//     requiredSkills: [
//       'Professionalism', 'Team Coordination', 'Attention to Detail',
//       'Clear Communication', 'Time Management', 'HR Best Practices'
//     ]
//   },
//   {
//     title: 'Sales Intern',
//     location: 'Remote / Chandigarh | Full-time / Part-time',
//     type: 'Internship',
//     email: 'hr@shiwansh.com',
//     experience: 'Fresher can apply',
//     education: 'BBA / MBA / B.Com / BCA freshers are welcome',
//     description:
//       'Looking to build your career in tech sales? As a Sales Intern at Shiwansh, you’ll gain exposure to SaaS selling, CRM handling, and client pitching — ideal for freshers ready to learn and grow.',
//     responsibilities: [
//       'Assist in cold outreach and email campaigns',
//       'Maintain CRM records and client communication logs',
//       'Support the sales team in scheduling demos and follow-ups',
//       'Help build proposals and pitch decks',
//       'Attend training and feedback sessions'
//     ],
//     skills: [
//       'CRM Tools', 'Excel / Google Sheets', 'Follow-ups', 'Client Communication',
//       'Sales Fundamentals', 'Presentation Support'
//     ],
//     requiredSkills: [
//       'Eagerness to learn', 'Curiosity', 'Basic tech skills',
//       'Clarity in communication', 'Consistency', 'Time discipline'
//     ]
//   },
//   {
//     title: 'Senior Software Developer',
//     location: 'Remote / Chandigarh | Full-time / Part-time',
//     type: 'Full-time',
//     email: 'hr@shiwansh.com',
//     experience: '5+ years required',
//     education: 'B.Tech / MCA / M.Tech in Computer Science or related field',
//     description:
//       'We are hiring an experienced Full Stack Developer to build scalable products and lead tech initiatives. Join our engineering team to work on innovative SaaS solutions with modern cloud infrastructure.',
//     responsibilities: [
//       'Develop frontend UI using React/Next.js',
//       'Design scalable backend APIs using Node.js and Express',
//       'Work on CI/CD, containerized deployments with Docker',
//       'Manage cloud infrastructure (AWS, EC2, S3, Lambda)',
//       'Ensure clean code, security, and performance optimization'
//     ],
//     skills: [
//       'React.js / Next.js', 'Node.js', 'MongoDB', 'MySQL', 'Docker',
//       'AWS', 'Git/GitHub', 'REST/GraphQL APIs', 'CI/CD Pipelines', 'Linux'
//     ],
//     requiredSkills: [
//       'Clean code practices', 'System design', 'Agile workflow',
//       'Debugging and performance tuning', 'Team collaboration', 'Communication clarity'
//     ]
//   }
// ];


// export default function Career() {
//   const handleShare = () => {
//     const link = 'https://shiwansh.com/career';
//     navigator.clipboard.writeText(link).then(() => {
//       alert('Link copied: ' + link);
//     }).catch(() => {
//       alert('Failed to copy link.');
//     });
//   };

//   return (
//     <>

//   <Helmet>
//   <title>Careers at Shiwansh Solutions | Remote Jobs & Internships</title>
//   <meta name="description" content="Join Shiwansh Solutions – We’re hiring Sales Executives, Interns, and Developers. Apply for remote and in-office jobs across India." />
//   <meta name="keywords" content="Shiwansh Solutions Careers, remote jobs India, sales jobs, tech internships, SaaS company hiring, marketing internship India, work from home jobs, fresher hiring, developer openings India, HR internship, startup hiring, React developer jobs, remote internships, career growth in SaaS" />
//   <meta name="author" content="Shiwansh Solutions" />
//   <meta property="og:title" content="Shiwansh Solutions is Hiring | Apply Now" />
//   <meta property="og:description" content="Apply now for remote roles in sales, development, and marketing. Freshers & experienced candidates welcome." />
//   <meta property="og:image" content="https://shiwansh.com/images/shiwansh-careers-banner.jpg" />
//   <meta property="og:url" content="https://shiwansh.com/career" />
//   <meta property="og:type" content="website" />
// </Helmet>


//       {/* Main Content */}
//       <div
//         className="min-vh-100 py-4 py-md-5"
//         style={{
//           background: 'linear-gradient(135deg, #e0e7ff 0%, #f9e8ff 100%)',
//         }}
//       >
//         {/* Header */}
//         <div className="container text-center mb-5">
//           <motion.h1
//             className="display-4 fw-bold text-dark mb-3"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <span
//               style={{
//                 background: 'linear-gradient(to right, #4f46e5, #a855f7)',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//                 color: 'transparent',
//               }}
//             >
//               🚀 Join Our Team
//             </span>
//           </motion.h1>
//           <motion.p
//             className="lead text-muted mx-auto"
//             style={{ maxWidth: '700px' }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             We’re hiring across India! Apply now or send your CV to{' '}
//             <strong>hr@shiwansh.com</strong>. Be part of a digital-first, remote-friendly team.
//           </motion.p>
//         </div>

//         {/* Job Cards */}
//         <div className="container mb-5">
//           <div className="row g-4">
//             {jobs.map((job, index) => (
//               <motion.div
//                 key={index}
//                 className="col-12"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="card border-0 shadow-sm rounded-4">
//                   <div className="card-body p-4">
//                     <div className="d-flex flex-column flex-md-row justify-content-between">
//                       <h2 className="h5 fw-bold text-dark">{job.title}</h2>
//                       <span className="text-muted small">
//                         {job.location} | {job.type}
//                       </span>
//                     </div>
//                     <p className="mt-2 mb-3 text-secondary">{job.description}</p>
//                     <p className="mb-1"><strong>Experience:</strong> {job.experience}</p>
//                     <p className="mb-3"><strong>Education:</strong> {job.education}</p>
//                     <div className="row">
//                       <div className="col-md-6 mb-3">
//                         <h6>📌 Responsibilities</h6>
//                         <ul className="text-secondary small ps-3 mb-0">
//                           {job.responsibilities.map((item, i) => (
//                             <li key={i}>• {item}</li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <h6>🛠 Skills & Requirements</h6>
//                         <div className="d-flex flex-wrap gap-2">
//                           {job.skills.concat(job.requiredSkills).map((skill, i) => (
//                             <span
//                               key={i}
//                               className="badge bg-primary bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Footer CTA */}
//         <div className="container text-center mb-5">
//           <motion.p
//             className="text-secondary"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             Prefer to apply directly? Send your CV to{' '}
//             <a href="mailto:hr@shiwansh.com" className="text-primary fw-semibold text-decoration-underline">
//               hr@shiwansh.com
//             </a>{' '}
//             or connect with us on{' '}
//             <a href="https://www.linkedin.com/company/shiwansh-solutions" target="_blank" rel="noopener noreferrer">
//               LinkedIn
//             </a>
//           </motion.p>
//         </div>
//       </div>
//     </>
//   );
// }












'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

const jobs = [
  {
    title: 'Sales Executive',
    location: 'Remote / Chandigarh | Full-time / Part-time',
    type: 'Full-time',
    email: 'hr@shiwansh.com',
    experience: '6+ months preferred',
    education: 'Any graduate / MBA preferred',
    description:
      'Join our fast-growing team as a Sales Executive and take charge of promoting B2B SaaS products across India. Ideal for candidates with strong business acumen, target-oriented mindset, and a passion for tech-driven selling.',
    responsibilities: [
      'Identify and generate B2B leads via cold calling, LinkedIn, and email campaigns',
      'Schedule and conduct virtual product demos for potential clients',
      'Manage full sales cycle from outreach to closing deals',
      'Update CRM records, pipeline tracking, and client reports',
      'Collaborate with marketing for campaign alignment'
    ],
    skills: [
      'B2B Sales', 'SaaS Selling', 'CRM Tools', 'Lead Generation',
      'Client Engagement', 'Sales Funnels', 'Negotiation', 'Cold Outreach'
    ],
    requiredSkills: [
      'Communication skills', 'Target-oriented approach', 'Presentation skills',
      'Follow-up discipline', 'Basic software knowledge', 'Confidence', 'Remote work readiness'
    ]
  },
  {
    title: 'Social Media Manager (Intern)',
    location: 'Remote / Chandigarh | Full-time / Part-time',
    type: 'Internship',
    email: 'hr@shiwansh.com',
    experience: 'Fresher or 6+ months in digital marketing',
    education: 'BBA / BCA / MBA / Mass Comm / Digital Marketing students welcome',
    description:
      'Launch your digital marketing career with Shiwansh Solutions. This internship is ideal for freshers eager to grow in social media management, content creation, and branding.',
    responsibilities: [
      'Create and manage content calendars for Instagram, LinkedIn, etc.',
      'Design creatives using Canva and post regularly',
      'Track performance via Google Analytics, Meta Insights',
      'Assist in reel creation and hashtag strategies',
      'Support paid ads and influencer outreach efforts'
    ],
    skills: [
      'Social Media Marketing', 'Instagram Growth', 'LinkedIn Content', 'Google Analytics',
      'SEO Basics', 'Content Planning', 'Brand Building', 'Digital Tools'
    ],
    requiredSkills: [
      'Creativity', 'Writing skills', 'Consistency',
      'Communication skills', 'Trend research', 'Canva design basics'
    ]
  },
  {
    title: 'HR Intern',
    location: 'Remote / Chandigarh | Full-time / Part-time',
    type: 'Full-time / Part-time',
    email: 'hr@shiwansh.com',
    experience: '0 months to 1 year preferred',
    education: 'MBA / PGDM in HR or related fields',
    description:
      'We are hiring HR Interns to assist in recruitment, onboarding, and internal operations. A perfect role for someone starting their HR career with a practical, hands-on experience.',
    responsibilities: [
      'Post jobs on LinkedIn, Internshala, and job portals',
      'Shortlist and screen candidates via calls/emails',
      'Coordinate onboarding and joining formalities',
      'Maintain employee records and HR sheets',
      'Assist in organizing employee engagement activities'
    ],
    skills: [
      'Recruitment', 'HRMS Tools', 'Google Sheets', 'Interview Coordination',
      'People Management', 'Policy Documentation'
    ],
    requiredSkills: [
      'Professionalism', 'Team Coordination', 'Attention to Detail',
      'Clear Communication', 'Time Management', 'HR Best Practices'
    ]
  },
  {
    title: 'Sales Intern',
    location: 'Remote / Chandigarh | Full-time / Part-time',
    type: 'Internship',
    email: 'hr@shiwansh.com',
    experience: 'Fresher can apply',
    education: 'BBA / MBA / B.Com / BCA freshers are welcome',
    description:
      'Looking to build your career in tech sales? As a Sales Intern at Shiwansh, you’ll gain exposure to SaaS selling, CRM handling, and client pitching — ideal for freshers ready to learn and grow.',
    responsibilities: [
      'Assist in cold outreach and email campaigns',
      'Maintain CRM records and client communication logs',
      'Support the sales team in scheduling demos and follow-ups',
      'Help build proposals and pitch decks',
      'Attend training and feedback sessions'
    ],
    skills: [
      'CRM Tools', 'Excel / Google Sheets', 'Follow-ups', 'Client Communication',
      'Sales Fundamentals', 'Presentation Support'
    ],
    requiredSkills: [
      'Eagerness to learn', 'Curiosity', 'Basic tech skills',
      'Clarity in communication', 'Consistency', 'Time discipline'
    ]
  },
  {
    title: 'Senior Software Developer',
    location: 'Remote / Chandigarh | Full-time / Part-time',
    type: 'Full-time',
    email: 'hr@shiwansh.com',
    experience: '5+ years required',
    education: 'B.Tech / MCA / M.Tech in Computer Science or related field',
    description:
      'We are hiring an experienced Full Stack Developer to build scalable products and lead tech initiatives. Join our engineering team to work on innovative SaaS solutions with modern cloud infrastructure.',
    responsibilities: [
      'Develop frontend UI using React/Next.js',
      'Design scalable backend APIs using Node.js and Express',
      'Work on CI/CD, containerized deployments with Docker',
      'Manage cloud infrastructure (AWS, EC2, S3, Lambda)',
      'Ensure clean code, security, and performance optimization'
    ],
    skills: [
      'React.js / Next.js', 'Node.js', 'MongoDB', 'MySQL', 'Docker',
      'AWS', 'Git/GitHub', 'REST/GraphQL APIs', 'CI/CD Pipelines', 'Linux'
    ],
    requiredSkills: [
      'Clean code practices', 'System design', 'Agile workflow',
      'Debugging and performance tuning', 'Team collaboration', 'Communication clarity'
    ]
  }
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
    <>
      <Helmet>
        <title>Careers at Shiwansh Solutions | Remote Jobs & Internships</title>
        <meta name="description" content="Join Shiwansh Solutions – We’re hiring Sales Executives, Interns, and Developers. Apply for remote and in-office jobs across India." />
        <meta name="keywords" content="Shiwansh Solutions Careers, remote jobs India, sales jobs, tech internships, SaaS company hiring, marketing internship India, work from home jobs, fresher hiring, developer openings India, HR internship, startup hiring, React developer jobs, remote internships, career growth in SaaS" />
        <meta name="author" content="Shiwansh Solutions" />
        <meta property="og:title" content="Shiwansh Solutions is Hiring | Apply Now" />
        <meta property="og:description" content="Apply now for remote roles in sales, development, and marketing. Freshers & experienced candidates welcome." />
        <meta property="og:image" content="https://shiwansh.com/images/shiwansh-careers-banner.jpg" />
        <meta property="og:url" content="https://shiwansh.com/career" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-vh-100 py-4 py-md-5" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f9e8ff 100%)' }}>
        {/* Header */}
        <div className="container text-center mb-5">
          <motion.h1 className="display-4 fw-bold text-dark mb-3" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ background: 'linear-gradient(to right, #4f46e5, #a855f7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              🚀 Join Our Team
            </span>
          </motion.h1>
          <motion.p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            We’re hiring across India! Apply now or send your CV to <strong>hr@shiwansh.com</strong>. Be part of a digital-first, remote-friendly team.
          </motion.p>
        </div>

        {/* Job Cards */}
        <div className="container mb-5">
          <div className="row g-4">
            {jobs.map((job, index) => (
              <motion.div key={index} className="col-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body p-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                      <h2 className="h5 fw-bold text-dark">{job.title}</h2>
                      <span className="text-muted small">{job.location} | {job.type}</span>
                    </div>
                    <p className="mt-2 mb-3 text-secondary">{job.description}</p>
                    <p className="mb-1"><strong>Experience:</strong> {job.experience}</p>
                    <p className="mb-3"><strong>Education:</strong> {job.education}</p>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h6>📌 Responsibilities</h6>
                        <ul className="text-secondary small ps-3 mb-0">
                          {job.responsibilities.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      </div>
                      <div className="col-md-6 mb-3">
                        <h6>🛠 Skills & Requirements</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {job.skills.concat(job.requiredSkills).map((skill, i) => (
                            <span key={i} className="badge bg-primary bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill">{skill}</span>
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
          <motion.p className="text-secondary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            Prefer to apply directly? Send your CV to{' '}
            <a href="mailto:hr@shiwansh.com" className="text-primary fw-semibold text-decoration-underline">hr@shiwansh.com</a>{' '}
            or connect with us on{' '}
            <a href="https://www.linkedin.com/company/shiwansh-solutions" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </motion.p>
        </div>
      </div>
    </>
  );
}
