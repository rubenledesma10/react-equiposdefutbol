import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <App />
    
  </StrictMode>,
)
