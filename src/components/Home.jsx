import './Home.css'
import argentina from '../assets/argentina.png'

function Home() {
  return (
    <div className="home-container">

      <div className="hero-section">
        <div className="hero-overlay">
          <h1>🏆 Equipos de Fútbol Argentino</h1>
          <p className="hero-subtitle">La pasión que mueve a todo un país</p>
        </div>
      </div>

      <div className="historia-section">
        <h2>⚽ Historia del Fútbol Argentino</h2>
        <div className="historia-content">
          <div className="historia-text">
            <p>
              El fútbol llegó a Argentina a fines del siglo XIX de la mano de inmigrantes británicos. 
              En 1891 se disputó el primer torneo oficial del país, siendo uno de los primeros 
              en toda América. Con el paso de los años, el fútbol se convirtió en la pasión 
              más grande de los argentinos, formando ídolos que trascendieron fronteras como 
              Diego Maradona y Lionel Messi, campeones del mundo con la Selección Argentina.
            </p>
          </div>
          <div className="historia-img">
                    <img src={argentina} alt="Argentina 3 estrellas" />
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>¿Qué vas a encontrar?</h2>
        <div className="cards-container">
          <div className="card">
            <span>📰</span>
            <h3>Últimas Noticias</h3>
            <p>Las últimas noticias de cada club actualizadas al momento.</p>
          </div>
          <div className="card">
            <span>📊</span>
            <h3>Estadísticas</h3>
            <p>Resultados y estadísticas actualizadas de todos los equipos.</p>
          </div>
          <div className="card">
            <span>⚽</span>
            <h3>Equipos</h3>
            <p>Boca, River, Independiente, Racing, San Lorenzo, Independiente Rivadavia y Godoy Cruz.</p>
          </div>
          <div className="card">
            <span>🏆</span>
            <h3>Historia</h3>
            <p>Historia y logros de cada institución a lo largo del tiempo.</p>
          </div>
          <div className="card">
            <span>👤</span>
            <h3>Tu Cuenta</h3>
            <p>Registrate e iniciá sesión para personalizar tu experiencia.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>¡Bienvenido al mundo del fútbol argentino!</h2>
        <p>Ya sea que seas hincha de Boca o de River, de Racing o de Independiente, acá vas a encontrar todo lo que necesitás saber sobre tu equipo favorito.</p>
      </div>

    </div>
  );
}

export default Home;