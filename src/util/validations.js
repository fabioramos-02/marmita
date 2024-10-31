// src/util/validations.js

// Função de validação de CPF
export function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  
    let sum, rest;
    sum = 0;
    
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf.substring(9, 10))) return false;
    
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    
    if (rest === 10 || rest === 11) rest = 0;
    return rest === parseInt(cpf.substring(10, 11));
  }
  
  // Função de validação de Contato (ex: (XX) XXXXX-XXXX)
  export function isValidContato(contato) {
    const contatoRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return contatoRegex.test(contato);
  }
  