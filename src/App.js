import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Tendencias from './Tendencias';
import Ofertas from './Ofertas';
import Marcas from './Marcas';
import Ropa from './Ropa';
import Calzado from './Calzado';
import './App.css'; // Importa tus estilos CSS aquí

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
