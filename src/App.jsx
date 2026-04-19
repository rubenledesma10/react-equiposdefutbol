import { Routes, Route } from 'react-router-dom'
//routes es el contenedor que agrupa a todas rutas
//route define cada ruta individual
import Auth from './pages/Auth' //importamos el componente de la pagina de autenticacion
import Home from './pages/Home'
import Teams from './pages/Teams'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/auth" element={<Auth />} /> //cuando la url es /auth, muestra el componente auth
      <Route path='/teams' element={<Teams />} />
    </Routes>
  )
}

export default App

