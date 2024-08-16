import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

import './styles/global-styles.css';
import './styles/colors.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
