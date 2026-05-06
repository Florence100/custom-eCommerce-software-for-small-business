import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/variables.css';
import './assets/styles/base.css';
import './assets/styles/typography.css';

const root = document.getElementById("root");
createRoot(root).render(<App />);