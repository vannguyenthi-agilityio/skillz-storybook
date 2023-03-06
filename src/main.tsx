// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from '@App';
import { ChakraProvider } from '@chakra-ui/react';

// Theme
import CHAKRA_THEME from '@themes/chakra';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={CHAKRA_THEME}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
