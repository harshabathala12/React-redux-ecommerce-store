import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ConfirmationPage = () => (
  <Container>
    <h2>Thank You For Your Order!</h2>
    <p>A confirmation has been sent to your email (not really!).</p>
    <StyledLink to="/products">Continue Shopping</StyledLink>
  </Container>
);

const Container = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const StyledLink = styled(Link)`
  // ... styles for button
`;

export default ConfirmationPage;