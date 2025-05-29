import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="card">
      <h2>404 - Página Não Encontrada</h2>
      <p>
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/" className="text-green-700 dark:text-green-400 hover:underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;
