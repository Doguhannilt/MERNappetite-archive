import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {  BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>

    <Router>
      <AppRoutes/>
    </Router>
    
    </ChakraProvider>
  </React.StrictMode>,
)
