import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.css';
import { App } from './App';

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Componentes interactivos de bootstrap


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
