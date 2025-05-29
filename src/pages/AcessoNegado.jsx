import { Link } from "react-router-dom";

function AcessoNegado() {
  return (
    <div className="card">
      <h2>🚫 Acesso Negado</h2>
      <p>Você precisa estar logado para acessar essa página.</p>
      <Link to="/login">
        <button>Ir para Login</button>
      </Link>
    </div>
  );
}

export default AcessoNegado;
