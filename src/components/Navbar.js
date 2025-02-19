// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/Logo.png';

const NavbarStyled = styled.nav`
  width: 100%;
  background-color: #f8f9fa;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const NavItems = styled.div`
  display: flex;
  margin-right: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
  }
`;

const NavItem = styled(NavLink)` // Define NavItem *before* using it
  text-decoration: none;
  color: #007bff;
  margin: 0 1rem;
  &.active {
    font-weight: bold;
    color: darkblue;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

function Navbar() {
  return (
    <NavbarStyled>
      <LogoContainer>
        {logo && <img src={logo} alt="Logo" style={{ maxHeight: '60px', maxWidth: '100%', display: 'block' }} />}
      </LogoContainer>
      <NavItems>
        <NavItem to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavItem>
        <NavItem to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavItem>
        <NavItem to="/app" className={({ isActive }) => isActive ? "active" : ""}>App</NavItem>
        <NavItem to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavItem>
        <NavItem to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavItem>
      </NavItems>
    </NavbarStyled>
  );
}

export default Navbar;