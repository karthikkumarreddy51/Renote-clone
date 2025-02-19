import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import instaLogo from '../assets/insta.png';
import linkedinLogo from '../assets/linkedin.png';
import facebookLogo from '../assets/facebook.png';
import xLogo from '../assets/x.png';
import playstoreLogo from '../assets/playstore.png';
import appstoreLogo from '../assets/appstore.png';

const FooterStyled = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  z-index: 100;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    align-items: flex-start;
    text-align: left;
  }
`;

const BadgeLink = styled.a`
  display: block;
  margin-bottom: 0.5rem;

  img {
    max-width: 150px;
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #777;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 1rem;

  a {
    margin: 0 0.5rem;
    color: #333;
    font-size: 1.2rem;
    display: inline-block; /* Prevent icon from stretching */
    img {
        width: 25px; /* Adjust size as needed */
        height: 25px; /* Adjust size as needed */
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }

  a {
    color: #333;
    text-decoration: none;
    margin: 0.5rem 0;

    @media (min-width: 768px) {
      margin: 0 0.5rem;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <FooterSection>
        <p>ReNoteAI</p>
        <p>
          ReNote Al Pvt Ltd,<br />
          T-Hub Phase 2.0, Madhapur,<br />
          Hyderabad, Telangana, India-500081.
        </p>
        <p>
          +91 9666363363, +91 8886663326<br />
          sales@renote.ai
        </p>
        <SocialIcons>
          <a href="https://www.facebook.com/karthikkumarreddy.doraghacharlla/" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://x.com/ReNote_AI?t=65Ubm8s6UJ5NUM2dsBmEcg&s=09" target="_blank" rel="noopener noreferrer">
            <img src={xLogo} alt="X" />
          </a>
          <a href="https://www.instagram.com/doragacharlakarthikkumarreddy/" target="_blank" rel="noopener noreferrer">
            <img src={instaLogo} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/karthik-kumar-reddy-doragacharla-4a3815258/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
        </SocialIcons>
      </FooterSection>

      <FooterSection>
        <p>Download Our App</p>
        <BadgeLink href="https://play.google.com/store/apps/details?id=com.renote&pli=1" target="_blank" rel="noopener noreferrer">
          <img src={playstoreLogo} alt="Get it on Google Play" />
        </BadgeLink>
        <BadgeLink href="https://apps.apple.com/in/app/renoteai/id6479944118" target="_blank" rel="noopener noreferrer">
          <img src={appstoreLogo} alt="Download on the App Store" />
        </BadgeLink>
      </FooterSection>

      <FooterSection>
        <NavLinks>
          <Link to="/products">Products</Link>
          <Link to="/app">App</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </NavLinks>
      </FooterSection>

      <Copyright>
        Copyright © {new Date().getFullYear()}. All Rights Reserved. | <Link to="/terms">Terms & Conditions</Link> | <Link to="/privacy">Privacy Policy</Link>
      </Copyright>
    </FooterStyled>
  );
}

export default Footer;