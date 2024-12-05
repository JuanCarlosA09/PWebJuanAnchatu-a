import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Tendencias from './Tendencias';
import Ofertas from './Ofertas';
import Marcas from './Marcas';
import Ropa from './Ropa';
import Calzado from './Calzado';
import './App.css'; // Importa los estilos CSS aquí

// Creamos un contexto para el carrito y la autenticación
export const CartContext = createContext();
export const AuthContext = createContext();

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemIndex) => {
        const newCartItems = cartItems.filter((_, index) => index !== itemIndex);
        setCartItems(newCartItems);
    };

    const handlePagar = () => {
        if (isAuthenticated) {
            // Mostrar modal de método de pago
            setShowPaymentModal(true);
        } else {
            // Mostrar modal para iniciar sesión o crear cuenta
            setShowAuthModal(true);
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Aquí deberías implementar la lógica real de autenticación
        setIsAuthenticated(true);
        setShowAuthModal(false);
        setShowLoginModal(false);
        setShowPaymentModal(true); // Mostrar modal de método de pago después de iniciar sesión
    };

    const handleCreateAccount = (event) => {
        event.preventDefault();
        // Aquí deberías implementar la lógica real para crear una cuenta
        setIsAuthenticated(true);
        setShowAuthModal(false);
        setShowCreateAccountModal(false);
        setShowPaymentModal(true); // Mostrar modal de método de pago después de crear cuenta
    };

    const handlePayment = (event) => {
        event.preventDefault();
        // Aquí deberías implementar la lógica real de procesamiento de pago
        alert('Pago procesado con éxito!');
        setShowPaymentModal(false);
    };

    return (
        <Router>
            <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
                <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
                    <nav className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
                            <li className="nav-item"><Link to="/Tendencias" className="nav-link">Tendencias</Link></li>
                            <li className="nav-item"><Link to="/Ofertas" className="nav-link">Ofertas</Link></li>
                            <li className="nav-item"><Link to="/Marcas" className="nav-link">Marcas</Link></li>
                            <li className="nav-item"><Link to="/Ropa" className="nav-link">Ropa</Link></li>
                            <li className="nav-item"><Link to="/Calzado" className="nav-link">Calzado</Link></li>
                        </ul>
                    </nav>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Inicio />} />
                            <Route path="/Tendencias" element={<Tendencias />} />
                            <Route path="/Ofertas" element={<Ofertas />} />
                            <Route path="/Marcas" element={<Marcas />} />
                            <Route path="/Ropa" element={<Ropa />} />
                            <Route path="/Calzado" element={<Calzado />} />
                        </Routes>
                    </div>
                    {/* Carrito integrado directamente */}
                    <div className="carrito">
                        <img src="/generic-cart-icon.png" alt="Carrito de compras" className="cart-icon" />
                        <div className="cart-content">
                            <h2>Carrito de Compras</h2>
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index}>
                                        {item.nombre} - ${item.precio}
                                        <button onClick={() => removeFromCart(index)}>Eliminar</button>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={handlePagar}>Pagar</button>
                        </div>
                    </div>
                    {/* Modal para iniciar sesión o crear cuenta */}
                    {showAuthModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <h2>Iniciar Sesión o Crear Cuenta</h2>
                                <button onClick={() => { setShowLoginModal(true); setShowAuthModal(false); }}>Iniciar Sesión</button>
                                <button onClick={() => { setShowCreateAccountModal(true); setShowAuthModal(false); }}>Crear Cuenta</button>
                                <button onClick={() => setShowAuthModal(false)}>Cerrar</button>
                            </div>
                        </div>
                    )}
                    {/* Modal para iniciar sesión */}
                    {showLoginModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <h2>Iniciar Sesión</h2>
                                <form onSubmit={handleLogin}>
                                    <input type="text" placeholder="Usuario" required />
                                    <input type="password" placeholder="Contraseña" required />
                                    <button type="submit">Iniciar Sesión</button>
                                </form>
                                <button onClick={() => { setShowLoginModal(false); setShowAuthModal(true); }}>Volver</button>
                            </div>
                        </div>
                    )}
                    {/* Modal para crear cuenta */}
                    {showCreateAccountModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <h2>Crear Cuenta</h2>
                                <form onSubmit={handleCreateAccount}>
                                    <input type="text" placeholder="Nombre" required />
                                    <input type="email" placeholder="Correo Electrónico" required />
                                    <input type="password" placeholder="Contraseña" required />
                                    <button type="submit">Crear Cuenta</button>
                                </form>
                                <button onClick={() => { setShowCreateAccountModal(false); setShowAuthModal(true); }}>Volver</button>
                            </div>
                        </div>
                    )}
                    {/* Modal para método de pago */}
                    {showPaymentModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <h2>Información de Pago</h2>
                                <form onSubmit={handlePayment}>
                                    <input type="text" placeholder="Nombre en la Tarjeta" required />
                                    <input type="text" placeholder="Número de Tarjeta" required />
                                    <input type="text" placeholder="Fecha de Expiración (MM/AA)" required />
                                    <input type="text" placeholder="CVV" required />
                                    <button type="submit">Pagar</button>
                                </form>
                                <button onClick={() => setShowPaymentModal(false)}>Cerrar</button>
                            </div>
                        </div>
                    )}
                </AuthContext.Provider>
            </CartContext.Provider>
        </Router>
    );
}

export default App;
