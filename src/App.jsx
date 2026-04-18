import { Routes, Route } from 'react-router-dom'
//routes es el contenedor que agrupa a todas rutas
//route define cada ruta individual
import Auth from './pages/Auth' //importamos el componente de la pagina de autenticacion


function App() {
  return (
    <Routes>
      
      <Route path="/auth" element={<Auth />} /> //cuando la url es /auth, muestra el componente auth
    </Routes>
  )
}

export default App