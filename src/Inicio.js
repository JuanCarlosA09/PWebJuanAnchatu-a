import React from 'react';

function Inicio() {
    return (
        <div className="container">
            <div className="content">
                <h1>Bienvenido a nuestra tienda de ropa deportiva</h1>
                <p>Encuentra la mejor ropa deportiva para baloncesto y fútbol.</p>

                <div className="section">
                    <h2>Ropa de Baloncesto</h2>
                    <img src="https://i.ytimg.com/vi/hbjJWOXtkZo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCbKM14e5EDJ3MgpCeX7KY_XrkTKA" alt="Ropa de Baloncesto" className="image" />
                    <p>Descubre nuestra colección de camisetas, shorts y accesorios de baloncesto.</p>
                </div>

                

                <div className="media-container">
                    <h2>¡Mira nuestro video de baloncesto en YouTube!</h2>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/xbsWm8SeKxQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="section">
                    <h2>Ropa de Fútbol</h2>
                    <img src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2023/02/24/63f90222c74f8a7d16291411.webp" className="image" />
                    <p>Explora nuestra línea de uniformes, botas y equipamiento de fútbol.</p>
                </div>
                <div className="media-container">
                    <h2>¡Mira nuestro video de baloncesto en YouTube!</h2>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/91HXGDtfnR0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
