const API_URL = "http://localhost:3000/usuarios"; // URL do JSON Server

export default {
  async listarUsuarios() {
    const response = await fetch(API_URL);
    return await response.json();
  },

  async buscarUsuarioPorId(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  },

  async criarUsuario(usuario) {
    // Remove o campo id, se existir
    const usuarioData = { ...usuario };
    delete usuarioData.id;
  
    const response = await fetch("http://localhost:3000/usuarios", {
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
  },
};
