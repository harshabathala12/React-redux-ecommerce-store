// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} Paradise Nursery. All Rights Reserved.</p>
        <p>A demonstration project built with React & Redux.</p>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large} 0;
  text-align: center;
  margin-top: auto; /* Pushes footer to the bottom */
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.large};
`;

export default Footer;