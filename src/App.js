import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Import Toaster
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence

import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for code splitting
const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const ProductListingPage = React.lazy(() => import('./pages/ProductListingPage'));
const ShoppingCartPage = React.lazy(() => import('./pages/ShoppingCartPage'));
const ConfirmationPage = React.lazy(() => import('./pages/ConfirmationPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Router>
      {/* Toaster for notifications */}
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          {/* AnimatePresence for page transitions */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/cart" element={<ShoppingCartPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer /> {/* Add Footer */}
    </Router>
  );
}

export default App;