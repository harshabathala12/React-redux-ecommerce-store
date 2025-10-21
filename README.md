# Paradise Nursery - E-Commerce Store

A modern, responsive e-commerce front-end application for a fictional houseplant store, built with React and Redux.

### [Live Demo](https://greensbyhb.netlify.app/) <!-- IMPORTANT: Add your Vercel link here! -->

## Features

- **State Management:** Robust state management for the shopping cart using Redux Toolkit.
- **State Persistence:** The user's cart is saved to local storage, persisting across page refreshes.
- **Asynchronous Data:** Products are loaded asynchronously, simulating a real API call with loading and error states.
- **Modern UI/UX:**
  - Styled with `styled-components` using a global theme for consistency.
  - Polished user experience with toast notifications and smooth page transitions via `framer-motion`.
  - Fully responsive design for desktop and mobile.
- **Code Splitting:** Pages are lazy-loaded for improved performance and faster initial load times.
- **Complete User Flow:** Includes a landing page, product listings, a fully functional shopping cart, and an order confirmation page.

## Technologies Used

- **React:** UI library for building components.
- **Redux Toolkit:** The official, recommended way to write Redux logic for state management.
- **React Router:** For client-side routing.
- **Redux Persist:** To persist Redux store state in local storage.
- **Styled Components:** For component-level styling and theming.
- **Framer Motion:** For animations and page transitions.
- **React Hot Toast:** For clean and simple notifications.

## Local Setup

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/harshabathala12/React-redux-ecommerce-store.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd react-redux-ecommerce-store
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    ```
The application will be available at `http://localhost:3000`.

---