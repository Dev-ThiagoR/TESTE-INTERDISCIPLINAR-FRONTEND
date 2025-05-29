import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="logo-text" onClick={closeMenu}>
          Inclusão Digital
        </Link>
      </div>

      <div className={`nav-center ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Inicio</Link>
        <Link to="/cursos" onClick={closeMenu}>Cursos</Link>
        <Link to="/avaliacao" onClick={closeMenu}>Avaliação</Link>
        <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
      </div>

      <div className="nav-right">
        {isAuthenticated ? (
          <>
            <span>Olá, {user.username}</span>
            <button onClick={logout} className="btn-logout">Sair</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={closeMenu}>Login</Link>
            <Link to="/register" onClick={closeMenu}>Cadastro</Link>
          </>
        )}

        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
