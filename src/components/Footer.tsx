import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLink href="/legal">Legal Information and Website Disclaimer</FooterLink>
    </FooterContainer>
  );
};

export default Footer;
