
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import Banner from './Components/Banner';
import Feature from './Components/Feature';
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
import Blog from './Components/Blog';

import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Components/Blogs';
import Career from './Components/Career';

function HomePage() {
  return (
    <>
      <Banner />
      {/* <Feature /> */}
      <Services />
      <ClientFeedback />
    </>
  );
}

function App() {
  const [showInternshipModal, setShowInternshipModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInternshipModal(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <BrowserRouter>
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
                <Nav.Link as={Link} to="/contact" className="mx-2 nav-link-custom">
                  Contact Us <ArrowRightCircle className="ms-1" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<OfferServices />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/intership" element={<Intership />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blog />} />
            <Route path="/career" element={<Career />} />
        </Routes>



        <Freeconsultation />
        <Footer />
      </BrowserRouter>

      {/* Show Internship Modal after 3s */}
      <InternshipModal
        show={showInternshipModal}
        handleClose={() => setShowInternshipModal(false)}
      />
    </div>
  );
}

export default App;
