import { Link } from "react-router-dom";

function AcessoNegado() {
  return (
    <div className="acesso-container">
      <h1>🚫 Acesso Negado</h1>
      <p>Você precisa estar logado para acessar essa página.</p>
      <Link to="/login">
        <button>Ir para Login</button>
      </Link>
    </div>
  );
}

export default AcessoNegado;
