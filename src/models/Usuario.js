import axios from 'axios';

const API_URL = 'http://localhost:3000/usuarios';

export class Usuario {
  constructor(id, username, password, role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }

  static async listarTodos() {
    const response = await axios.get(API_URL);
    return response.data.map(
      usuario => new Usuario(usuario.id, usuario.username, usuario.password, usuario.role)
    );
  }

  static async criar(usuario) {
    const response = await axios.post(API_URL, usuario);
    return new Usuario(response.data.id, response.data.username, response.data.password, response.data.role);
  }
}
