import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
        <Link to="/cursos" onClick={closeMenu}>Cursos</Link>
        <Link to="/avaliacao" onClick={closeMenu}>Avaliação</Link>
        <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
      </div>

      <div className="nav-right">
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Dark mode button pode ir aqui */}
      </div>
    </nav>
  );
}

export default Navbar;
