import { useState } from 'react'
import './Teams.css'
import Boca from '../assets/Boca.png'
import River from '../assets/River.png'
import Independiente from '../assets/Independiente.png'
import Racing from '../assets/Racing.png'
import IndependienteRivadavia from '../assets/IndependienteRivadavia.png'
import Tomba from '../assets/Tomba.png'

const equipos = {
  boca: {
    nombre: 'Boca Juniors',
    escudo: Boca,
    reseña: 'Fundado en 1905 en La Boca, Buenos Aires. Conocido como el Xeneize, es el club más popular de Argentina con 6 Copas Libertadores.',
    partidos: [
      { rival: 'Barcelona SC', resultado: '3 - 0', fecha: '15/04/2026', torneo: 'Copa Libertadores' },
      { rival: 'Racing Club', resultado: '0 - 1', fecha: '07/12/2025', torneo: 'Liga Profesional' },
      { rival: 'Millonarios', resultado: '0 - 0', fecha: '14/01/2026', torneo: 'Amistoso' },
    ]
  },
  river: {
    nombre: 'River Plate',
    escudo: River,
    reseña: 'Fundado en 1901, conocido como el Millonario. Es el club más ganador del fútbol argentino con 4 Copas Libertadores.',
    partidos: [
      { rival: 'Ind. Rivadavia', resultado: '1 - 1', fecha: '03/03/2026', torneo: 'Apertura 2026' },
      { rival: 'Huracán', resultado: '2 - 1', fecha: '12/03/2026', torneo: 'Apertura 2026' },
      { rival: 'Carabobo', resultado: 'Por jugar', fecha: '16/04/2026', torneo: 'Copa Libertadores' },
    ]
  },
  independiente: {
    nombre: 'Independiente',
    escudo: Independiente,
    reseña: 'Fundado en 1905 en Avellaneda, conocido como el Rey de Copas. Es el equipo con más Copas Libertadores del mundo con 7 títulos.',
    partidos: [
      { rival: 'Ind. Rivadavia', resultado: '2 - 1', fecha: '08/03/2026', torneo: 'Apertura 2026' },
      { rival: 'Dep. Riestra', resultado: '1 - 0', fecha: '15/03/2026', torneo: 'Copa Argentina' },
      { rival: 'Atl. Tucumán', resultado: '0 - 0', fecha: '22/03/2026', torneo: 'Apertura 2026' },
    ]
  },
  racing: {
    nombre: 'Racing Club',
    escudo: Racing,
    reseña: 'Fundado en 1903 en Avellaneda, conocido como La Academia. Fue el primer equipo argentino en ganar la Copa Intercontinental en 1967.',
    partidos: [
      { rival: 'Boca Juniors', resultado: '1 - 0', fecha: '07/12/2025', torneo: 'Liga Profesional' },
      { rival: 'Boca Juniors', resultado: '0 - 0', fecha: '20/02/2026', torneo: 'Apertura 2026' },
      { rival: 'Gimnasia Chivilcoy', resultado: '2 - 1', fecha: '23/02/2026', torneo: 'Copa Argentina' },
    ]
  },
  indRivadavia: {
    nombre: 'Independiente Rivadavia',
    escudo: IndependienteRivadavia,
    reseña: 'Fundado en 1905 en Mendoza, conocido como La Lepra Mendocina. Es uno de los clubes más históricos del interior del país.',
    partidos: [
      { rival: 'River Plate', resultado: '1 - 1', fecha: '03/03/2026', torneo: 'Apertura 2026' },
      { rival: 'Barracas Central', resultado: '1 - 2', fecha: '12/03/2026', torneo: 'Apertura 2026' },
      { rival: 'Independiente', resultado: '1 - 2', fecha: '08/03/2026', torneo: 'Apertura 2026' },
    ]
  },
  tomba: {
    nombre: 'Godoy Cruz',
    escudo: Tomba,
    reseña: 'Fundado en 1921 en Mendoza, conocido como La Tomba. Es el equipo más importante de Mendoza.',
    partidos: [
      { rival: 'River Plate', resultado: '1 - 2', fecha: '27/02/2026', torneo: 'Apertura 2026' },
      { rival: 'San Lorenzo', resultado: '0 - 1', fecha: '08/03/2026', torneo: 'Apertura 2026' },
      { rival: 'Racing Club', resultado: '2 - 0', fecha: '15/03/2026', torneo: 'Apertura 2026' },
    ]
  }
}

function Teams() {
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null)
  const [solapaActiva, setSolapaActiva] = useState('reseña')

  const handleEquipo = (key) => {
    if (equipoSeleccionado === key) {
      setEquipoSeleccionado(null)
    } else {
      setEquipoSeleccionado(key)
      setSolapaActiva('reseña')
    }
  }

  return (
    <div className="teams-container">
      <h1 className="teams-title">⚽ Algunos equipos de Fútbol Argentino</h1>

      <div className="equipos-grid">
        {Object.entries(equipos).map(([key, equipo]) => (
          <div
            key={key}
            className={`equipo-card-mini ${equipoSeleccionado === key ? 'activo' : ''}`}
            onClick={() => handleEquipo(key)}
          >
            <img src={equipo.escudo} alt={equipo.nombre} className="escudo-mini" />
            <p>{equipo.nombre}</p>
          </div>
        ))}
      </div>

      {equipoSeleccionado && (
        <div className="equipo-detalle">
          <img
            src={equipos[equipoSeleccionado].escudo}
            alt={equipos[equipoSeleccionado].nombre}
            className="equipo-escudo"
          />
          <h2 className="equipo-nombre">{equipos[equipoSeleccionado].nombre}</h2>

          <div className="solapas">
            <button
              className={`solapa-btn ${solapaActiva === 'reseña' ? 'activa' : ''}`}
              onClick={() => setSolapaActiva('reseña')}
            >
              📋 Reseña
            </button>
            <button
              className={`solapa-btn ${solapaActiva === 'partidos' ? 'activa' : ''}`}
              onClick={() => setSolapaActiva('partidos')}
            >
              🗓️ Últimos Partidos
            </button>
          </div>

          {solapaActiva === 'reseña' && (
            <p className="equipo-reseña">{equipos[equipoSeleccionado].reseña}</p>
          )}

          {solapaActiva === 'partidos' && (
            <div className="partidos-lista">
              {equipos[equipoSeleccionado].partidos.map((partido, index) => (
                <div key={index} className="partido-item">
                  <span className="partido-fecha">{partido.fecha}</span>
                  <span className="partido-rival">vs {partido.rival}</span>
                  <span className="partido-torneo">{partido.torneo}</span>
                  <span className="partido-resultado">{partido.resultado}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Teams