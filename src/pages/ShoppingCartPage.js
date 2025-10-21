import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  selectCartItems,
  selectTotalItems,
  selectTotalCost,
} from '../features/cart/cartSlice';
import styled from 'styled-components';
import CheckoutModal from '../components/CheckoutModal';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmCheckout = () => {
    setIsModalOpen(false);
    navigate('/confirmation');
  };
  
  if (cartItems.length === 0) {
    return (
      <EmptyCartContainer>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any plants yet.</p>
        <CTAButton as={Link} to="/products">Explore Products</CTAButton>
      </EmptyCartContainer>
    );
  }

  return (
    <>
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmCheckout}
      />
      <PageContainer>
        <PageTitle>Your Shopping Cart</PageTitle>
        <CartLayout>
          <CartItemsList>
            {cartItems.map(item => (
              <CartItem key={item.id}>
                <ItemImage src={item.thumbnail} alt={item.name} />
                <ItemDetails>
                  <h4>{item.name}</h4>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                </ItemDetails>
                <ItemControls>
                  <ControlButton onClick={() => dispatch(decrementQuantity(item.id))}>-</ControlButton>
                  <Quantity>{item.quantity}</Quantity>
                  <ControlButton onClick={() => dispatch(incrementQuantity(item.id))}>+</ControlButton>
                </ItemControls>
                <ItemTotal>${(item.price * item.quantity).toFixed(2)}</ItemTotal>
                <DeleteButton onClick={() => dispatch(removeFromCart(item.id))}>&times;</DeleteButton>
              </CartItem>
            ))}
          </CartItemsList>

          <OrderSummary>
            <h3>Order Summary</h3>
            <SummaryLine>
              <span>Total Plants:</span>
              <span>{totalItems}</span>
            </SummaryLine>
            <SummaryLine>
              <strong>Total Cost:</strong>
              <strong>${totalCost.toFixed(2)}</strong>
            </SummaryLine>
            <CTAButton onClick={() => setIsModalOpen(true)}>Proceed to Checkout</CTAButton>
          </OrderSummary>
        </CartLayout>
      </PageContainer>
    </>
  );
};

// --- STYLED-COMPONENTS DEFINITIONS ---

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
`;

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
`;

// --- THIS IS THE FIX ---
const EmptyCartContainer = styled.div`
  text-align: center;
  padding: 80px 20px;
  display: flex; /* Use flexbox */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  gap: ${({ theme }) => theme.spacing.medium}; /* Add space between items */

  & > h2 {
    margin-bottom: ${({ theme }) => theme.spacing.small}; /* Add a bit more space after the heading */
  }
`;
// --- END OF FIX ---

const CartLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const CartItemsList = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-right: ${({ theme }) => theme.spacing.medium};
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  margin: 0 ${({ theme }) => theme.spacing.large};
`;

const ControlButton = styled.button`
  background: ${({ theme }) => theme.colors.lightGray};
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
`;

const Quantity = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
`;

const ItemTotal = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 100px;
  text-align: right;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #aaa;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.medium};
  line-height: 1;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const OrderSummary = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: sticky;
  top: 94px; /* Header height + spacing */
`;

const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  &:last-of-type {
    margin-top: ${({ theme }) => theme.spacing.large};
    padding-top: ${({ theme }) => theme.spacing.medium};
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

const CTAButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;
  max-width: 300px; /* Ensure button doesn't get too wide */

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default ShoppingCartPage;