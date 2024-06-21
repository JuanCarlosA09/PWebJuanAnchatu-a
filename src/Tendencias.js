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
                <h2>Ropa de Fútbol</h2>
                <div className="product">
                    <img src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2023/02/24/63f90222c74f8a7d16291411.webp" alt="Ropa de Fútbol" className="image" />
                    <p>Explora nuestra línea de uniformes, botas y equipamiento de fútbol.</p>
                    <button onClick={() => handleAddToCart('Uniforme de Fútbol', 50.0)}>Agregar al carrito</button>
                </div>
            </div>

            <div className="section">
                <h2>Ropa de Básquet</h2>
                <div className="product">
                    <img src="ruta-de-tu-imagen-de-basket.jpg" alt="Ropa de Básquet" className="image" />
                    <p>Descubre nuestra colección de ropa y equipamiento para baloncesto.</p>
                    <button id="addToCartButton" type="button" class="btn-add-to-cart btn-primary btn-block-addtocart js-add-to-cart js-enable-btn btn-icon hidden-ready js-add-to-cart-popup-auto-close   js-gtm-addToCart">
<span class="btn-block-addtocart__icon">
<i class="icomoon-add-cart"></i>
</span>
Añadir al Carrito</button>                </div>
            </div>
        </div>
    );
}

export default Tendencias;
