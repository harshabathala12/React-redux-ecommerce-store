import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { addToCart, selectCartItems } from '../features/cart/cartSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast'; // Import toast
import LoadingSpinner from '../components/LoadingSpinner';

const AnimatedPage = (props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    {...props}
  />
);

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`); // Add toast notification
  };

  const isItemInCart = (productId) => cartItems.some(item => item.id === productId);

  if (status === 'loading' || status === 'idle') return <LoadingSpinner />;
  if (status === 'failed') return <ErrorMessage>Error: {error}</ErrorMessage>;

  return (
    <AnimatedPage>
      <PageContainer>
        <PageTitle>Our Houseplants</PageTitle>
        {products.map((category) => (
          <CategorySection key={category.category}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <ProductGrid>
              {category.items.map((product) => (
                <ProductCard key={product.id}>
                  <ProductImage src={product.thumbnail} alt={product.name} />
                  <ProductInfo>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                    <ActionButton
                      onClick={() => handleAddToCart(product)}
                      disabled={isItemInCart(product.id)}
                    >
                      {isItemInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                    </ActionButton>
                  </ProductInfo>
                </ProductCard>
              ))}
            </ProductGrid>
          </CategorySection>
        ))}
      </PageContainer>
    </AnimatedPage>
  );
};

// --- STYLED-COMPONENTS ---

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
`;

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
  font-size: 1.2rem;
`;

const CategorySection = styled.section`
  margin-bottom: 50px;
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  padding-bottom: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

// THIS IS THE FIX FOR CENTERING
const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the items */
  gap: ${({ theme }) => theme.spacing.large};
`;

const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  width: 280px; /* Give a fixed width for better alignment */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
`;

const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  flex-grow: 1;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, disabled }) => disabled ? '#b0bec5' : theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s ease;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default ProductListingPage;