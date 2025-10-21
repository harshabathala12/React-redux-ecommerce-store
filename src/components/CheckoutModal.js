import React from 'react';
import styled from 'styled-components';

const CheckoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <h3>Confirm Your Purchase</h3>
        <p>This is a demonstration. Clicking 'Confirm' will finalize the process and clear your cart.</p>
        <ButtonGroup>
          <Button onClick={onClose} secondary>Cancel</Button>
          <Button onClick={onConfirm}>Confirm Purchase</Button>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

// --- STYLED-COMPONENTS DEFINITIONS ---

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large} 40px;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  max-width: 400px;
`;

const ButtonGroup = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const Button = styled.button`
  flex: 1;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, secondary }) => secondary ? '#6c757d' : theme.colors.primary};
  
  &:hover {
    opacity: 0.9;
  }
`;

export default CheckoutModal;