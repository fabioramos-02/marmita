import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Funcionario, FuncionarioBody } from '@/models/Funcionario';

const API_URL = 'http://localhost:3000/funcionarios';

export const useFuncionarioStore = defineStore('funcionarios', () => {
  const funcionarios = ref<Funcionario[]>([]);
  const funcionario = ref<Funcionario | undefined>(undefined);

  // Método para listar todos os funcionários
  const getFuncionarios = async (): Promise<void> => {
    const response = await axios.get(`${API_URL}`);
    funcionarios.value = response.data;
  };

  // Método para obter um funcionário pelo ID
  const getFuncionario = async (id: number): Promise<void> => {
    const response = await axios.get(`${API_URL}/${id}`);
    funcionario.value = response.data;
  };

  // Método para registrar um novo funcionário
  const registerFuncionario = async (body: FuncionarioBody): Promise<void> => {
    const response = await axios.post(`${API_URL}`, body);
    funcionario.value = response.data;
    await getFuncionarios(); // Atualiza a lista de funcionários após a criação
  };

  // Método para atualizar um funcionário existente
  const updateFuncionario = async (id: number, body: FuncionarioBody): Promise<void> => {
    const response = await axios.put(`${API_URL}/${id}`, body);
    funcionario.value = response.data;
    await getFuncionarios(); // Atualiza a lista de funcionários após a atualização
  };

  // Método para remover um funcionário pelo ID
  const removeFuncionario = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
    await getFuncionarios(); // Atualiza a lista de funcionários após a remoção
  };

  return { funcionarios, funcionario, getFuncionarios, getFuncionario, registerFuncionario, updateFuncionario, removeFuncionario };
});
