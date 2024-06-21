import React, { useContext } from 'react';
import { CartContext } from './App';
import './Calzado.css'; // Importa los estilos CSS específicos para este componente

function Calzado() {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (nombre, precio) => {
        addToCart({ nombre, precio });
    };
    return (
        <div>
            <h1>Adidas</h1>
            <p>Compra zapatos para hombre
                 creados para acompañarte en tus diferentes 
                 actividades deportivas, mientras entrenas en el gimnasi</p>
                 
                 <img src="https://assets.adidas.com/images/w_275,f_auto,q_auto/accc109286ee4730a5bcaecc00816c9d_9366/GV9558_01_standard.jpg" alt="marca de adidas" className="image" />
                 <button onClick={() => handleAddToCart(' adidas', 159)}>Agregar al carrito</button>

                 <h1>Puma</h1>
                 <p>Zapatos Puma Astrokicks Talla. Envío. 
                    Disponible en 2 colores. Zapatos Deportivos Hombre Puma Super Liga Us. PUMA</p>
                    <img src="https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_SL1500_.jpg" alt="marca de puma" className="image" />
                    <button onClick={() => handleAddToCart(' Puma', 130)}>Agregar al carrito</button>

        
        </div>
    );
}

export default Calzado;
