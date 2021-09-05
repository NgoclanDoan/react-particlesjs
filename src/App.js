import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';

function App() {
    return (
        <div
            className='App'
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            <div style={{ position: 'absolute' }}>
                <Particles
                    height='100vh'
                    width='100vw'
                    params={particlesConfig}
                ></Particles>
            </div>
            <header className='App-header'>
              <h2>Particles.js</h2>
                <p>
                    A cool background for all of your web app
                </p>
                <img src={logo} className='App-logo' alt='logo' />
                
            </header>
        </div>
    );
}

export default App;
