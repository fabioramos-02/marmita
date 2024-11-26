import axios from 'axios';

const API_URL = 'http://localhost:3000/funcionarios';

export class Funcionario {
  constructor(id, nome, cpf, endereco, contato, email) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.contato = contato;
    this.email = email;
  }

  static async listarTodos() {
    const response = await axios.get(API_URL);
    return response.data;
  }

  static async criar(funcionario) {
    const response = await axios.post(API_URL, funcionario);
    return response.data;
  }
}
