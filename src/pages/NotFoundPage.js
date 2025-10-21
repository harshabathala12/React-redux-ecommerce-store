import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage = () => (
  <Container>
    <ErrorCode>404</ErrorCode>
    <ErrorMessage>Oops! Page Not Found</ErrorMessage>
    <p>The page you are looking for does not exist or has been moved.</p>
    <HomeButton as={Link} to="/">Go to Homepage</HomeButton>
  </Container>
);

// --- STYLED-COMPONENTS DEFINITIONS ---

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: calc(100vh - 70px);
  padding: 20px;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0;
  line-height: 1;
`;

const ErrorMessage = styled.h2`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const HomeButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.large};
  padding: 12px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default NotFoundPage;