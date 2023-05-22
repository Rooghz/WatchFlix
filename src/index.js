import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'typeface-poppins';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#1a1a1d',
        fontFamily: 'Poppins',
        fontWeight: 600,
        color: 'white',
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
