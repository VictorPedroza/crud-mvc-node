# CRUD MVC com NODE

Este é um projeto de exemplo que implementa um CRUD (Create, Read, Update, Delete) utilizando o padrão arquitetural MVC (Model-View-Controller) com Node.js e Express.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **EJS (Embedded JavaScript Templates)** - Motor de templates para renderização das views
- **MySQL2** - Cliente MySQL para Node.js
- **Sequelize** - ORM para interação com banco de dados (opcional)
- **dotenv** - Gerenciamento de variáveis de ambiente
- **body-parser** - Middleware para tratamento de requisições HTTP
- **CORS** - Permite requisições entre diferentes domínios
- **Nodemon** - Reinicializa automaticamente o servidor durante o desenvolvimento

## Estrutura do Projeto

```
/project-root
  |-- src/
      |-- config/
      |-- controllers/
      |-- entities/
      |-- router/
      |-- utils/
      |-- server.js
  |-- package.json
  |-- README.md
```

- **config/** - Configuração do banco de dados e outras dependências.
- **controllers/** - Contém a lógica de controle e manipulação de requisições.
- **entities/** - Definição das entidades e interação com o banco de dados.
- **router/** - Define as rotas do sistema e direciona para os controladores.
- **utils/** - Funções auxiliares e utilitárias para o projeto.
- **server.js** - Arquivo principal do servidor.
- **package.json** - Gerenciamento de dependências e scripts.
- **README.md** - Documentação do projeto.

