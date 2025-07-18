import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { X } from 'react-bootstrap-icons';

function CareerModal({ show, handleClose }) {
  // Floating circles animation
  const FloatingCircles = () => (
    <div className="floating-circles">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="circle"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            background: i % 2 === 0 ? 'rgba(100, 255, 218, 0.1)' : 'rgba(255, 215, 0, 0.1)',
            borderRadius: '50%'
          }}
        />
      ))}
    </div>
  );

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="M"
      centered
      backdrop="static"
      className="elegant-career-modal"
    >
      <Modal.Body className="p-0">
        <div className="elegant-container">
          {/* Close Button */}
          <motion.button
            className="close-button"
            onClick={handleClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>

          {/* Subtle animated background */}
          <motion.div
            className="animated-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FloatingCircles />
            <div className="gradient-overlay"></div>
          </motion.div>

          {/* Main content */}
          <div className="content-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Headline with staggered animation */}
              <div className="headline">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-accent">WE ARE</span>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <span className="text-bold">HIRING</span>
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <span className="text-accent">NOW!</span>
                </motion.div>
              </div>

              {/* Animated divider */}
              <motion.div
                className="divider"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />

              {/* Subheading */}
              <motion.h2
                className="subheading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                JOIN OUR <span className="text-highlight">TEAM</span>
              </motion.h2>

              {/* CTA Button */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <Button
                  variant="primary"
                  onClick={() => {
                    window.open("https://www.shiwansh.com/career", "_blank");
                    handleClose();
                  }}
                  className="cta-button"
                >
                  Visit Career Page
                  <motion.span
                    className="arrow-icon"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    →
                  </motion.span>
                </Button>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CareerModal;

