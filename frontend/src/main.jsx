import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {  BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes';
import { ChakraProvider } from '@chakra-ui/react'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>

    <Router>
      <Auth0ProviderWithNavigate>
      <AppRoutes/>
      </Auth0ProviderWithNavigate>
    </Router>
    
    </ChakraProvider>
  </React.StrictMode>,
)
