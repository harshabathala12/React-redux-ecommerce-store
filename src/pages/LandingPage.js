import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingPage = () => (
  <Hero>
    <Overlay />
    <Content>
      <h1>Welcome to Paradise Nursery</h1>
      <Divider />
      <p>Where Green Meets Serenity. Find the perfect plant for your space.</p>
      <CTAButton to="/products">Get Started</CTAButton>
    </Content>
  </Hero>
);

const Hero = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  background: url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1500&q=80') no-repeat center center/cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  background-color: rgba(0,0,0,0.2);
  padding: 2rem 4rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Divider = styled.div`
  width: 60px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.accent};
  margin: 1rem auto;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: 12px 28px;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default LandingPage;