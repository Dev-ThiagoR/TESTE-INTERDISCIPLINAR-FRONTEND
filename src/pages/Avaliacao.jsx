function Avaliacao() {
  return (
    <div className="card">
      <h2>Avaliação dos Cursos</h2>
      <p>
        Sua opinião é muito importante para nós! Ajude a melhorar nossa plataforma e nossos cursos.
      </p>

      <form style={{ marginTop: '20px' }}>
        <label>Nome:</label>
        <input type="text" placeholder="Digite seu nome" required />

        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" required />

        <label>Curso Avaliado:</label>
        <input type="text" placeholder="Nome do curso" required />

        <label>Nota (1 a 5):</label>
        <input type="number" min="1" max="5" placeholder="Digite uma nota" required />

        <label>Comentário:</label>
        <textarea
          placeholder="Deixe seu comentário"
          rows="4"
          style={{
            width: '100%',
            padding: '14px',
            margin: '10px 0',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            color: 'var(--text-color)',
            resize: 'none',
          }}
        ></textarea>

        <button type="submit">Enviar Avaliação</button>
      </form>
    </div>
  );
}

export default Avaliacao;
