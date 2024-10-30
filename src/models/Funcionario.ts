export interface Funcionario {
  id: number;
  nome: string;
  cpf: string;
  endereco: string;
  contato: string;
  email: string;
}

// Tipo para operações de criação e atualização (sem `id`)
export type FuncionarioBody = Omit<Funcionario, 'id'>;
