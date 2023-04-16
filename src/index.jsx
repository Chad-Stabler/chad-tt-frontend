import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './reset.css';
import './global.css';
import ClipProvider from './state/ClipContext';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ClipProvider>
      <App />
    </ClipProvider>
  </React.StrictMode>
);
