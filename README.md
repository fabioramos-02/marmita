# Sistema de Controle de Marmitas

Este projeto implementa um sistema de controle de marmitas, desenvolvido para a disciplina de PROGWEB, onde clientes podem montar marmitas personalizadas, e o administrador pode gerenciar pedidos e ingredientes.

## Integrantes do Grupo

- Fabio Ramos
- José Liossi
- José Henrique
- Marco Antonio
- Geazi Batista

## Descrição do Projeto

O sistema permite que os usuários montem marmitas personalizadas escolhendo ingredientes de acordo com suas preferências, enquanto o administrador ou funcionários podem gerenciar pedidos, atualizar status e gerenciar o cardápio de ingredientes disponíveis.

### Funcionalidades

- Montagem e personalização de marmitas: escolha de tamanho, proteínas, acompanhamentos e saladas.
- Finalização de pedido com inserção de endereço, método de pagamento e revisão de itens.
- Acompanhamento do status do pedido em tempo real.
- Gerenciamento de pedidos e ingredientes pelo administrador e funcionários.

## Tecnologias Utilizadas

- **Front-end**: Vue.js, HTML5, CSS3 (com Bootstrap), JavaScript.
- **Back-end**: Node.js.
- **Banco de Dados**: PostgreSQL para armazenamento de dados de usuários, pedidos, cardápio e ingredientes.
- **Controle de Versão**: Git.
- **Prototipagem**: Figma (para interface e layout).

## Requisitos

Para executar este projeto, você precisará de:

- Node.js e npm instalados na máquina.
- Servidor para o banco de dados PostgreSQL.
- Servidor REST para comunicação com o banco de dados e suporte às rotas do CRUD de pedidos e ingredientes.

## Instalação e Execução

### Passo 1: Configurar o Servidor Back-end

1. Execute o servidor JSON localmente:
   ```bash
   json-server --watch db.json --port 3000
   ```

### Passo 2: Configurar o Front-end

- No diretório do projeto, instale as dependências:

  ```bash
  npm install
  ```
- Para iniciar o projeto, execute:
    ```
    npm run serve
    ```
### Passo 3: Acessar a Aplicação
Após iniciar o front-end e o back-end, acesse a aplicação em http://localhost:8080 no navegador.
Estrutura do Projeto
src/: Contém o código-fonte principal do projeto.
components/: Componentes reutilizáveis, como o ModalAviso.vue.
store/: Configuração de Vuex para gerenciamento de estado e comunicação com o backend.
views/: Contém as visualizações, como FuncionarioView.vue, que gerencia a tela de CRUD de funcionários.
util/: Funções utilitárias, como validações de CPF e formatação de dados.
Personalização da URL do Servidor
Se for necessário alterar a URL do servidor, você pode atualizar o valor em src/store/index.js para apontar para o endereço correto do backend.
