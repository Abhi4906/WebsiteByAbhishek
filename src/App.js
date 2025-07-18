import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import Banner from './Components/Banner';
import Services from './Components/Services';
import OfferServices from './Components/OfferServices';
import Contact from './Components/Contact';
import About from './Components/About';
import Freeconsultation from './Components/Freeconsultation';
import Footer from './Components/Footer';
import Intership from './Components/Intership';
import TeamPage from './TeamPage';
import InternshipModal from './Components/InternshipModal';
import ClientFeedback from './Components/ClientFeedback';
import BlogDetail from './Components/BlogDetail';
import Blogs from './Components/Blogs';
import Career from './Components/Career';
import AnalyticsTracker from './Components/AnalyticsTracker';
import CareerModal from './Components/CareerModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from "react-ga4";

// HomePage Component
function HomePage() {
  return (
    <>
      <Banner />
      <Services />
      <ClientFeedback />
    </>
  );
}

// Main App Component
function App() {
  const [showInternshipModal, setShowInternshipModal] = useState(false);
  const [showCareerModal, setShowCareerModal] = useState(false);

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-JKGYZ5D5M2");
  
    // Show internship modal after 5 seconds
    const internshipTimer = setTimeout(() => {
      setShowInternshipModal(true);
      
      // After internship modal closes, show career modal after 10 seconds
      const careerTimer = setTimeout(() => {
        // Only show career modal if internship modal was closed
        if (!showInternshipModal) {
          setShowCareerModal(true);
        }
      }, 10000);
      
      return () => clearTimeout(careerTimer);
    }, 5000);
  
    return () => {
      clearTimeout(internshipTimer);
    };
  }, []);

  // Close handler for internship modal that triggers career modal
  const handleInternshipClose = () => {
    setShowInternshipModal(false);
    // Show career modal 10 seconds after closing internship modal
    setTimeout(() => {
      setShowCareerModal(true);
    }, 10000);
  };

  return (
    <div className="app-container">
      <BrowserRouter>
        <AnalyticsTracker />
        
        {/* Navbar */}
        <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3 navbar-custom">
          <Container>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <span className="logo-gradient">Shiwansh</span>
              <span className="text-dark ms-2">Solutions</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" className="navbar-toggler-custom" />
            <Navbar.Collapse id="main-nav" className="justify-content-end">
              <Nav className="align-items-lg-center">
                <Nav.Link as={Link} to="/" className="mx-2 nav-link-custom">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="mx-2 nav-link-custom">About</Nav.Link>
                <Nav.Link as={Link} to="/intership" className="mx-2 nav-link-custom">Internship</Nav.Link>
                <Nav.Link as={Link} to="/career" className="mx-2 nav-link-custom">Career</Nav.Link>
                             <Nav.Link as={Link} to="/blogs" className="mx-2 nav-link-custom">Blogs</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="mx-2 nav-link-custom">
                  Contact Us <ArrowRightCircle className="ms-1" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<OfferServices />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/intership" element={<Intership />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/analyticstracker" element={<AnalyticsTracker />} />
        </Routes>

        {/* Footer & Consultation */}
        <Freeconsultation />
        <Footer /> {/* Make sure Footer component doesn't have any modal triggers */}
      </BrowserRouter>

      {/* Modals */}
      <InternshipModal
        show={showInternshipModal}
        handleClose={handleInternshipClose}
      />
      
      <CareerModal
        show={showCareerModal}
        handleClose={() => setShowCareerModal(false)}
      />
    </div>
  );
}

export default App;