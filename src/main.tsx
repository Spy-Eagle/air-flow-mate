import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx is loading');
console.log('Root element exists:', !!document.getElementById("root"));

createRoot(document.getElementById("root")!).render(<App />);
