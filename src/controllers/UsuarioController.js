const API_URL = "http://localhost:3000/usuarios";

export default {
  async login(username, password) {
    try {
      // Faz uma requisição para obter todos os usuários
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erro ao buscar usuários");

      const usuarios = await response.json();
      
      // Encontra um usuário com as credenciais correspondentes
      const usuarioEncontrado = usuarios.find(
        u => u.username === username && u.password === password
      );
      
      if (usuarioEncontrado) {
        // Retorna um objeto simulado com token e role
        return { token: "fake-token", role: usuarioEncontrado.role };
      } else {
        throw new Error("Usuário ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      return null;
    }
  },

  async listarUsuarios() {
    const response = await fetch(API_URL);
    return await response.json();
  },

  async buscarUsuarioPorId(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  },

  async criarUsuario(usuario) {
    const usuarioData = { ...usuario };
    delete usuarioData.id;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarioData),
    });

    return await response.json();
  },

  async atualizarUsuario(id, usuario) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    return await response.json();
  },

  async deletarUsuario(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  }
};
