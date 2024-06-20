import React from 'react';

function Home() {
    return (
        <div className="container">
            <div className="content">
                <h1>Inicio</h1>
                <p>Bienvenido a mi página de inicio.</p>
                <div className="media-container">
                    <p>¡Mira nuestro video de baloncesto en YouTube!</p>
                    <a href="https://www.youtube.com/watch?v=xbsWm8SeKxQ&t=6s" target="_blank" rel="noopener noreferrer">Ver Video en YouTube</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
