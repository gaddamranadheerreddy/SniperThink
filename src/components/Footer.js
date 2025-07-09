import React, {useContext} from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
        {/* bg-dark text-white py-4" */}
      <Container className="text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} SniperThink. All rights reserved.</p>
        <a href="#home" className="text-success text-decoration-none">
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
