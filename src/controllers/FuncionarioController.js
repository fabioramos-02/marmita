const API_URL = "http://localhost:3000/funcionarios";

export default {
  async listarFuncionarios() {
    const response = await fetch(API_URL);
    return await response.json();
  },

  async buscarFuncionarioPorId(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  },

  async criarFuncionario(funcionario) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(funcionario),
    });
    return await response.json();
  },

  async atualizarFuncionario(id, funcionario) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(funcionario),
    });
    return await response.json();
  },

  async deletarFuncionario(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  },
};
