import React, { useContext } from 'react';
import { CartContext } from './App';

function Tendencias() {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({ nombre: 'Uniforme de Fútbol', precio: 50.0 }); // Ejemplo de producto a agregar
    };

    return (
        <div className="container">
            <div className="section">
                <h2>Ropa de Fútbol</h2>
                <img src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2023/02/24/63f90222c74f8a7d16291411.webp" alt="Ropa de Fútbol" className="image" />
                <p>Explora nuestra línea de uniformes, botas y equipamiento de fútbol.</p>
                <button onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Tendencias;
