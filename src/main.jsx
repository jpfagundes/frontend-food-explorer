import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';

import theme from './styles/theme';
import { AuthProvider } from './hooks/auth';
import { New } from './pages/New';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode  >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <New />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
