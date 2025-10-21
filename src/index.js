import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store, persistor } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingSpinner from './components/LoadingSpinner';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 1. Redux Provider is the highest-level state provider */}
    <Provider store={store}>
      {/* 2. ThemeProvider is next, so the theme is available to EVERYTHING below it */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* 3. PersistGate is now a CHILD of ThemeProvider */}
        <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
          {/* Now, both the <LoadingSpinner/> and the <App/> can access the theme */}
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);