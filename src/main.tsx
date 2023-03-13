// Libraries
import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// Components
import App from '@App';

// Theme
import CHAKRA_THEME from '@themes';

// Pages
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />
  },
  {
    path: '/sign-in',
    element: <SignInPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={CHAKRA_THEME}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
