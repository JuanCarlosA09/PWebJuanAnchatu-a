import React, { useContext } from 'react';
import { CartContext } from './App';

function Tendencias() {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (nombre, precio) => {
        addToCart({ nombre, precio });
    };

    return (
        <div className="container">
            <div className="section">
                <h2><strong>¡Tendencias actuales en Fútbol y baloncesto</strong> </h2>
                <div className="product">
                <p>¡Equípate para la victoria con las últimas tendencias en ropa deportiva!

¿Eres un apasionado del fútbol o del básquetbol? ¿Buscas ropa y equipamiento de alta calidad para mejorar tu rendimiento y lucir tu estilo dentro y fuera de la cancha? ¡Estás en el lugar correcto!

En nuestra tienda online encontrarás una amplia selección de productos de las mejores marcas, con diseños innovadores y tecnologías de última generación para que puedas practicar tu deporte favorito al máximo nivel.</p>

                    <img src="https://m.media-amazon.com/images/I/51NhX5fdSEL._AC_UF894,1000_QL80_.jpg" alt="Ropa de Fútbol" className="image" />
                    <p><strong>Tendencias en Ropa de Fútbol:</strong></p>
                
                    <ul data-sourcepos="11:1-11:43"><li data-sourcepos="11:1-11:43"><strong>Camisetas aerodinámicas y transpirables:</strong><span> Fabricadas con materiales ligeros y frescos que te permiten mantenerte seco y cómodo durante el juego.</span></li><li data-sourcepos="12:1-12:160"><strong>Botas con máxima tracción y control del balón:</strong><span> Diseñadas para diferentes superficies y estilos de juego,</span><span> para que puedas dominar el balón en todo momento.</span></li><li data-sourcepos="13:1-14:0"><strong>Protección integral:</strong><span> Rodilleras,</span><span> espinilleras y tobilleras para que puedas jugar con total seguridad y confianza.</span></li></ul>
                    <img src="https://www.deportescaneda.com/uploads/ckeditor/pictures/185/content_Espinilleras_para_f_tbol__1_.jpg" alt="Ropa de Fútbol" className="image" />

                </div>
            </div>

            <div className="section">
            <p><strong>Tendencias en Ropa de Baloncesto:</strong></p>
            <ul data-sourcepos="17:1-18:34"><li data-sourcepos="17:1-17:122"><strong>Camisetas y shorts con tecnología de absorción del sudor:</strong><span> Te mantienen fresco y seco durante el partido más intenso.</span></li><li data-sourcepos="18:1-18:34"><strong>Zapatillas con amortiguación y rebote superiores:</strong><span> Para que puedas saltar más alto,</span><span> correr más rápido y proteger tus articulaciones.</span></li><li data-sourcepos="19:1-20:0"><strong>Ropa de entrenamiento cómoda y versátil:</strong><span> Ideal para tus entrenamientos previos y posteriores al juego.</span></li></ul>
            <div className="product">
            <img src="https://images.squarespace-cdn.com/content/v1/5ab4527b3c3a536a7a352c05/1609259730252-PA7RQDUCBZTW68D29NSN/NikeNews_NBACityEdition2020_CHI_City_Collection_100598.jpg" alt="Ropa de Fútbol" className="image" />
                </div>
            </div>
        </div>
    );
}

export default Tendencias;
