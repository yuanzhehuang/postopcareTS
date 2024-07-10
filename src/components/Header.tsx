import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: #4CB5AE;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Nav = styled.nav`
  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Post Operative Care</Logo>
      <Nav>
        <a href="/">Home</a>
        <a href="/physicians">Physician List</a>
        <a href="/departments">Department List</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/login">Login</a>
        <a href="/contact">Contact Us</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
