import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // Verifica se o usuário está logado
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/fundo-indigena.png')" }}>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
            🚫 Acesso Negado
          </h2>
          <p className="mb-6">Você precisa estar logado para acessar essa página.</p>
          <a
            href="/login"
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition"
          >
            Ir para Login
          </a>
        </div>
      </div>
    );
  }

  // Se estiver logado, renderiza o conteúdo protegido
  return children;
}

export default ProtectedRoute;
