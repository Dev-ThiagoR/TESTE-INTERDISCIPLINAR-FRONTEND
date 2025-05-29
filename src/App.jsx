import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cursos from "./pages/Cursos";
import Avaliacao from "./pages/Avaliacao";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";
import AcessoNegado from "./pages/AcessoNegado";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/cursos"
                element={
                  <ProtectedRoute>
                    <Cursos />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/avaliacao"
                element={
                  <ProtectedRoute>
                    <Avaliacao />
                  </ProtectedRoute>
                }
              />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/acesso-negado" element={<AcessoNegado />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
