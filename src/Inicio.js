import React from 'react';

function Inicio() {
    return (
        <div className="container">
            <div className="content">
                <h1>Bienvenido a nuestra tienda de ropa deportiva</h1>
                <p>Encuentra la mejor ropa deportiva para baloncesto y fútbol.</p>

                <div className="section">
                    <h2>Descubre con nosotros las tendencias del Baloncesto</h2>
                    <img src="https://i.ytimg.com/vi/hbjJWOXtkZo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCbKM14e5EDJ3MgpCeX7KY_XrkTKA" alt="Ropa de Baloncesto" className="image" />
                    
                    <h3>Kevin Durant</h3>
                    <p>Llega con estas increiblees zapatillas de alto rendimiento de baloncesto diseñadas para jugadores versátiles, lo mejor de Kevin Durant llegó con los <strong>
                        Nike KD 14 Seasonal</strong> 
                    que incorporan malla multicapa y amortiguación con respuesta inmediata para que no pares de jugar. Estos <strong>zapatos de básquet</strong> 
                    tiene una correa en el mediopié, como un ligero guiño a la conocida <strong>KD4</strong>.
                    <h3>Beneficios del producto</h3></p>
                    <ul><li>Cierre que envuelve la parte superior de las agujetas para ofrecer un ajuste firme.</li><li>Construcción de poliéster.</li><li>Material resistente.</li><li>Correa ajustable.</li><li>Sistema de ajuste con cordones.</li><li>Suela de goma de alta resistencia a la abrasión.</li><li>Diseño estampado.</li><li>Lengüeta para mayorcomodidad.</li></ul>

                    
                </div>

                

                <div className="media-container">
                <h2>¡Observa el gran desenpeño que tienen las KD14!</h2>
                <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/cGAB5uc3tJ4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="section">
                    <h2>Fútbol un deporte lleno de Historia  </h2>
                    <img src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2023/02/24/63f90222c74f8a7d16291411.webp" className="image" />
                    <p>Total 90 es una línea de productos deportivos de la marca estadounidense Nike; creada en 2000 para Fútbol. La gama de productos se compone principalmente de zapatos, camisetas, y pantalones cortos, pero también incluye otros elementos espinilleras ,maletas etc. La mayoría de la ropa Total 90 está diseñada y se compone nike hypervenom, no se ajusta hacia el exterior del material por lo que puede evaporarse rápidamente. Se han producido siete generaciones de botas Total 90, comenzando por Total 90, seguido por Total 90 II, Total 90 III, Total 90 IV supremacy, Total 90 Laser, Total 90 Laser II y el último Total 90 Laser IV. Entre otras como las botas Total 90 Laser III Shoot para campos de césped artificial.

En 2007, Nike introduce la Nike Total 90 Laser. La principal característica son los anillos de goma en la parte superior de la bota, lo que mejora de la precisión de poder. En abril de 2008, el Total 90 Laser fue seguido por el Total 90 Laser II y más recientemente, por la Laser III. Esta última es la más revolucionariap</p>
                </div>
                <div className="media-container">
                    <h2>¡Observa el gran desenpeño que tenia las Total
                        90!</h2>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/LoiS-hvmbuE"
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
