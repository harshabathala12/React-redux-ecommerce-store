import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../features/cart/cartSlice';
import styled from 'styled-components';

const Header = () => {
  const totalItems = useSelector(selectTotalItems);

  return (
    <HeaderContainer>
      <Logo to="/">Paradise Nursery</Logo>
      <Nav>
        <StyledNavLink to="/products">Products</StyledNavLink>
        <StyledNavLink to="/cart">
          Cart
          <CartBadge>{totalItems}</CartBadge>
        </StyledNavLink>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.1rem;
  position: relative;
  padding: 5px 0;
  
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

const CartBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
  position: absolute;
  top: -5px;
  right: -15px;
`;

export default Header;