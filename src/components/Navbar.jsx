import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="logo-text">
          Inclusão Digital Indigena
        </Link>
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/avaliacao">Avaliação</Link>
        <Link to="/sobre">Sobre</Link>
      </div>

      <div className="nav-right">
        <button
          onClick={toggleDarkMode}
          className={`dark-mode-button ${darkMode ? "active" : ""}`}
        ></button>

        {user ? (
          <>
            <span className="user-info">Olá, {user.username}</span>
            <button onClick={logout}>Sair</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Cadastro</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
