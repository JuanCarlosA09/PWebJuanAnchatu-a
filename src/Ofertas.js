import React, { useContext } from 'react';
import { CartContext } from './App';
import './Ofertas.css'; // Importa los estilos CSS específicos para este componente

function Ofertas() {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (nombre, precio) => {
        addToCart({ nombre, precio });
    };

    return (
        <div className="container">
            <h2>OFERTAS BOBA</h2>
            <div className="products">
                <div className="product">
                    <img src="https://images.stockx.com/images/Nike-Los-Angeles-Lakers-Kobe-Bryant-Black-Mamba-City-Edition-Swingman-Jersey-Black-Gold-Product-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1658329288?height=78&width=78" alt="Ropa de Fútbol" className="image" />
                    <h3>Nike Kobe Mamba Mentality Los Angeles Lakers City Edition Swingman Jersey (FW23)
                    </h3>
                    <p><strong>$110</strong>
                    </p>
                    <button onClick={() => handleAddToCart('Uniforme de Fútbol', 110)}>Agregar al carrito</button>
                </div>
                <div className="product">
                    <img src="https://images.stockx.com/images/Nike-Kobe-9-Elite-Detail-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1610080789" alt="Ropa de Básquet" className="image" />
                    <h3>Nike Kobe 9 Elite
                    </h3>
                    <p><strong>$200</strong></p>
                    <button onClick={() => handleAddToCart('Uniforme de Básquet', 200)}>Agregar al carrito</button>
                </div>

                <div className="product">
                    <img src="https://images.stockx.com/images/Nike-Brazil-2022-23-Stadium-Home-Jersey-Dynamic-Yellow-Green-Spark-Paramount-Blue-Paramount-Blue-1.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1670618756&q=60" alt="Ropa de Básquet" className="image" />
                    <h3>Nike Brazil 2022/23 Stadium Home Jersey
                    </h3>
                    <p><strong>$80</strong></p>
                    <button onClick={() => handleAddToCart('Uniforme de Básquet', 80)}>Agregar al carrito</button>
                </div>

                <div className="product">
                    <img src="https://images.stockx.com/360/Nike-Zoom-Mercurial-Vapor-15-Elite-KM-FG-Mbappe-Dark-Beetroot/Images/Nike-Zoom-Mercurial-Vapor-15-Elite-KM-FG-Mbappe-Dark-Beetroot/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1685115775&h=320&q=60" alt="Ropa de Básquet" className="image" />
                    <h3>Nike Zoom Mercurial Vapor 15 Elite KM FG
                    </h3>
                    <p>.<strong>$110</strong></p>
                    <button onClick={() => handleAddToCart('Zapatillas de Futbol', 110)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Ofertas;
