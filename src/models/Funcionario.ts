export class Funcionario {
  id: string;
  nome: string;
  cpf: string;
  endereco: string;
  contato: string;
  email: string;

  constructor(id: string, nome: string, cpf: string, endereco: string, contato: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.contato = contato;
    this.email = email;
  }
}
