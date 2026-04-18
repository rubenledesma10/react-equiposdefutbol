import { StrictMode } from 'react' //modo estricto de React, detecta problemas potenciales en desarrollo
import { createRoot } from 'react-dom/client' //funcion para crear el punto de entrada de la app en el DOM
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom' //proveedor de react router, envuelve toda la app para que la navegacion funcione en todos los componentes

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <BrowserRouter>
      <Navbar />
      <App/>
    </BrowserRouter>


  </StrictMode>,
)
