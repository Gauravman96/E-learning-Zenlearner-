import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { EnrollProvider } from './context/EnrollContext';
import './index.css';  // ✅ very important for Tailwind


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <EnrollProvider>
      <App />
    </EnrollProvider>
  </BrowserRouter>
);


