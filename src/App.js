import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ReNoteApp from './components/ReNoteApp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './styles/styles.css';
import logo from './assets/Logo.png';
import bookNowIcon from './assets/booknow.png'; // Import the book now icon
import whatsappIcon from './assets/whatsapp.png'; // Import the WhatsApp icon

// ... (Container styled component remains the same)

const FloatingButton = styled.a`
  position: fixed;
  bottom: ${(props) => props.bottom};
  right: 20px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 1000;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
  }

  /* Style for image icons inside the button */
  img {
    max-width: 80%; // Adjust as needed
    max-height: 80%; // Adjust as needed
  }
`;

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar logo={logo} />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/app" element={<ReNoteApp />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        <Footer />

        <FloatingButton
          href="https://wa.me/9392054075"
          backgroundColor="#25D366"
          hoverBackgroundColor="#1DA851"
          bottom="80px"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" /> {/* Use the WhatsApp icon */}
        </FloatingButton>

        <FloatingButton
          as={Link}
          to="/contact"
          backgroundColor="#007bff"
          hoverBackgroundColor="#0056b3"
          bottom="20px"
        >
          <img src={bookNowIcon} alt="Book Now" /> {/* Use the Book Now icon */}
        </FloatingButton>
      </div>
    </Router>
  );
}

export default App;