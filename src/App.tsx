import React, {useEffect, useState} from 'react';
import './App.css';
import './FlorDeEncantados.css';

const FlorDeEncantados: React.FC<{ brilla: boolean }> = ({brilla}) => {
    return (
        <div id="flor" className="flor-de-encantados">
            <div className="tallo"></div>
            <div className="hoja izquierda"></div>
            <div className="hoja derecha"></div>
            <div className="centro-flor"></div>
            <div className={`petalo uno ${brilla ? 'brilla' : ''}`}></div>
            <div className={`petalo dos ${brilla ? 'brilla' : ''}`}></div>
            <div className={`petalo tres ${brilla ? 'brilla' : ''}`}></div>
            <div className={`petalo cuatro ${brilla ? 'brilla' : ''}`}></div>
            <div className={`petalo cinco ${brilla ? 'brilla' : ''}`}></div>
            <div className={`petalo seis ${brilla ? 'brilla' : ''}`}></div>
            <div className={`petalo siete ${brilla ? 'brilla' : ''}`}></div>
            <div className={`petalo ocho ${brilla ? 'brilla' : ''}`}></div>
        </div>
    );
};

const App: React.FC = () => {
    const [playing, setPlaying] = useState(false);
    const [brilla, setBrilla] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
        setBrilla(true); // Activar la animación de brillo cuando se inicia la canción
        const audio = new Audio('/songs/encantados.mp3');
        audio.addEventListener('ended', () => {
            setPlaying(false);
            setBrilla(false); // Desactivar la animación de brillo cuando la canción termina
        });
        audio.play();
    };

    useEffect(() => {
        if (playing) {
            const audio = new Audio('/songs/encantados.mp3');
            audio.addEventListener('ended', () => {
                setPlaying(false);
                setBrilla(false); // Desactivar la animación de brillo cuando la canción termina
            });
            audio.play();
        }
    }, [playing]);

    return (
        <div className="app">
            <div className="button-container">
                <button onClick={handlePlay} disabled={playing}>
                    Dale click a la flor :D
                </button>
            </div>
            <FlorDeEncantados brilla={brilla}/>
            <h1 className="bottom-heading">X</h1>
        </div>
    );
};

export default App;