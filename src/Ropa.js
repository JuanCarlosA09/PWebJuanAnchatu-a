import React, { useContext } from 'react';
import { CartContext } from './App';
import './Ropa.css'; // Importa los estilos CSS específicos para este componente

function Ropa() {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (nombre, precio) => {
        addToCart({ nombre, precio });
    };

    return (
        <div className="container">
            <h1>Conjunto adidas</h1>
            <p>Haz seguimiento a tu pedido 
            ¡Aprovecha hoy! Conoce en adidas tu ropa favorita para hacer de tu estilo algo único. </p>
            <img src="https://assets.adidas.com/images/w_450,f_auto,q_auto/2a9bff8cb30341c0847bac8200bc5fb3_9366/GN8441_00_plp_laydown.jpg" alt="marca de adidas" className="image" />
            <button onClick={() => handleAddToCart('Conjunto adidas', 50)}>Agregar al carrito</button>

            <h1>Conjunto Puma</h1>
            <p>Combina funcionalidad y estilo con nuestra ropa PUMA
                 para hombre. Encuentra todo, desde camisetas hasta pantalones deportivos,
                  diseñados para impresionar.</p>
                  <img src="https://i.pinimg.com/236x/96/53/bd/9653bdfb205764a00ce40d906e93c407.jpg" alt="marca de puma" className="image" />
                  <button onClick={() => handleAddToCart('Conjunto Puma', 70)}>Agregar al carrito</button>

        </div>
    );
}

export default Ropa;
