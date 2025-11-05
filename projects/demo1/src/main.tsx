import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './components/core/app/App.tsx';

const root = document.getElementById('root');

// Alternativa a la comprobación de nullish
// if (!root) throw new Error('Failed to find the root element');

createRoot(root as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
