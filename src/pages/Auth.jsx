import './Auth.css'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

function Auth() {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const handleLogin = () => {
    setSnackbar({
      open: true,
      message: 'Credenciales incorrectas. Verificá tu email y contraseña.',
      severity: 'error'
    })
  }

  const handleRegister = () => {
    setSnackbar({
      open: true,
      message: '¡Registro exitoso! Te enviamos un correo para confirmar tu cuenta.',
      severity: 'success'
    })
  }

  return (
    <div className="auth-container">

      {/* LOGIN */}
      <Box className="auth-card">
        <Typography variant="h5" className="auth-title">Iniciar Sesión</Typography>
        <TextField label="Email" type="email" variant="outlined" fullWidth className="auth-input" />
        <TextField label="Contraseña" type="password" variant="outlined" fullWidth className="auth-input" />
        <Button variant="contained" fullWidth className="auth-button" onClick={handleLogin}>
          Ingresar
        </Button>
      </Box>

      {/* DIVIDER */}
      <div className="auth-divider"></div>

      {/* REGISTRO */}
      <Box className="auth-card">
        <Typography variant="h5" className="auth-title">Registrarse</Typography>
        <TextField label="Nombre" type="text" variant="outlined" fullWidth className="auth-input" />
        <TextField label="Apellido" type="text" variant="outlined" fullWidth className="auth-input" />
        <TextField label="DNI (sin puntos, ni letras, solo NUMERO" type="text" variant="outlined" fullWidth className="auth-input" />
        <TextField label="Email" type="email" variant="outlined" fullWidth className="auth-input" />
        <TextField label="Contraseña" type="password" variant="outlined" fullWidth className="auth-input" />
        <Button variant="contained" fullWidth className="auth-button" onClick={handleRegister}>
          Registrarse
        </Button>
      </Box>

      {/* SNACKBAR */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>

    </div>
  )
}

export default Auth