import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import App from './components/App';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './styles/styles.css';
import logo from './assets/Logo.png';
import bookNowIcon from './assets/booknow.png';
import whatsappIcon from './assets/whatsapp.png';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Ensure the app takes up full viewport height
`;

const ContentWrapper = styled.div`
  flex: 1; // Allow the content to expand and fill available space
  padding-bottom: 60px; /* Adjust padding to prevent footer overlap */
  @media (max-width: 768px) {
    padding-bottom: 100px; /* Adjust padding for smaller screens if needed */
  }
`;

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

  img {
    max-width: 80%;
    max-height: 80%;
  }

  @media (max-width: 768px) { // Adjust positioning for mobile
    bottom: ${(props) => (props.bottom === '80px' ? '70px' : props.bottom === '20px' ? '10px' : props.bottom)}; // Adjust as needed
    right: 10px;
  }
`;

function App() {
  return (
    <Router>
      <AppContainer> {/* Use the styled container */}
        <Navbar logo={logo} />
        <ContentWrapper> {/* Wrap the main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/app" element={<App />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </ContentWrapper>
        <Footer />

        <FloatingButton
          href="https://wa.me/9392054075"
          backgroundColor="#25D366"
          hoverBackgroundColor="#1DA851"
          bottom="80px"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
        </FloatingButton>

        <FloatingButton
          as={Link}
          to="/contact"
          backgroundColor="#007bff"
          hoverBackgroundColor="#0056b3"
          bottom="20px"
        >
          <img src={bookNowIcon} alt="Book Now" />
        </FloatingButton>
      </AppContainer>
    </Router>
  );
}

export default App;