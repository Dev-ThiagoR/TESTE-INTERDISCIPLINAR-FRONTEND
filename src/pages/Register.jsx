import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Simula o cadastro
    login(email, senha);
    navigate('/dashboard');
  };

  return (
    <div className="card">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div>
          <label>Confirme a Senha</label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            required
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <p>
        Já tem uma conta?{' '}
        <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
}

export default Register;
