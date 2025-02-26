# ENGLISH

# NodeJS Course - Third-Party APIs

This repository is part of a Node.js course and focuses on integrating third-party APIs and working with Express.js functionalities. This guide will walk you through the installation of dependencies, running the project, and testing the endpoints using the `SERVER.rest` file.

## Requirements
- Node.js (version 14 or higher).
- NPM or Yarn.
- Recommended code editor: Visual Studio Code.
- [REST Client Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) installed in Visual Studio Code to test HTTP requests.

## Installation

1. Clone the repository:
   ```
   git clone <repository-URL>
   cd <repository-name>
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

## Project Structure
The project is structured as follows:

```
.
├── app.js                  # Main application file
├── routes                  # Routes folder
│   ├── admin.js            # Admin-related routes
│   └── user.js             # User-related routes
├── public                  # Static files
│   ├── css
│   │   └── style.css       # CSS styles
│   └── index.html          # Main HTML page
├── package.json            # Node.js configuration file
└── SERVER.rest             # File for testing HTTP requests
```

## Running the Project

1. Start the server:
   ```
   node app.js
   ```

2. The server will be running at: [http://localhost:3000](http://localhost:3000)

## Main Features

- **Static Routes:** The `public` folder contains static resources (CSS, images, HTML) accessible at [http://localhost:3000/static](http://localhost:3000/static).
- **Middleware:** Global middleware configured for request logging.
- **Cookies:** Routes to set and read cookies.
  - `GET /setcookie` - Sets a cookie.
  - `GET /getcookie` - Reads the cookie.

### Admin Routes

- `GET /admin` - Access the admin section.
- `GET /admin/:id` - Access the admin section with an ID.
- `POST /admin` - Send login and password data.
- `PATCH /admin/:id` - Partially update a resource.
- `PUT /admin/:id` - Replace a resource.
- `DELETE /admin/:id` - Delete a resource.

### User Routes

- `GET /user` - List all users.
- `GET /user/:id` - Get details of a specific user.

## Testing Requests

To test the requests, use the `SERVER.rest` file in Visual Studio Code with the REST Client extension.

Examples of available requests in the file:

```plaintext
### get admin
GET http://localhost:3000/admin

### get admin by id
GET  http://localhost:3000/admin/250

### admin access via POST
POST http://localhost:3000/admin
Content-Type: application/json

{
    "login":"rodrigomartins",
    "senha":"123456"
}

### admin access via PATCH
PATCH http://localhost:3000/admin/250

### admin access via PUT
PUT http://localhost:3000/admin/250

### admin access via DELETE
DELETE http://localhost:3000/admin/250

### get user
GET http://localhost:3000/user

### get user by id
GET http://localhost:3000/user/520
```

## Dependencies Used
- `express` - Web framework for Node.js.
- `cookie-parser` - Middleware for handling cookies.

To install any additional dependencies, run:
```
npm install <dependency-name>
```

## Final Notes
- Ensure all dependencies are installed before running the project.
- Use the `SERVER.rest` file to validate the routes.
- For questions or improvements, feel free to open an issue in the repository.


________________________________________________________________________

# PORTUGUÊS

# Curso NodeJS - Api Terceiros

Este repositório faz parte do curso de Node.js e explora o uso de APIs de terceiros e funcionalidades do Express.js. Neste documento, serão explicados os passos necessários para instalar as dependências, executar o projeto e realizar testes de requisições utilizando o arquivo `SERVER.rest`.

## Requisitos
- Node.js instalado (versão 14 ou superior).
- NPM ou Yarn.
- Editor de código recomendado: Visual Studio Code.
- Extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) instalada no Visual Studio Code para testar as requisições HTTP.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL-do-repositório>
   cd <nome-do-repositório>
   ```

2. Instale as dependências necessárias:
   ```
   npm install
   ```

## Estrutura do Projeto
O projeto está organizado da seguinte forma:

```
.
├── app.js                  # Ficheiro principal da aplicação
├── routes                  # Pasta com as rotas
│   ├── admin.js            # Rotas relacionadas à administração
│   └── user.js             # Rotas relacionadas aos utilizadores
├── public                  # Pasta para ficheiros estáticos
│   ├── css
│   │   └── style.css       # Estilos CSS
│   └── index.html          # Página HTML principal
├── package.json            # Ficheiro de configuração do Node.js
└── SERVER.rest             # Ficheiro para testes de requisições HTTP
```

## Executar o Projeto

1. Inicie o servidor:
   ```
   node app.js
   ```

2. O servidor estará disponível em: [http://localhost:3000](http://localhost:3000)

## Funcionalidades Principais

- **Rotas Estáticas:** A pasta `public` contém recursos estáticos (CSS, imagens, HTML) acessíveis em [http://localhost:3000/static](http://localhost:3000/static).
- **Middleware:** Middleware global configurado para logging de pedidos.
- **Cookies:** Rota para definir e ler cookies.
  - `GET /setcookie` - Define um cookie.
  - `GET /getcookie` - Lê o cookie.

### Rotas de Admin

- `GET /admin` - Acessar a secção de administração.
- `GET /admin/:id` - Acessar a secção de administração com um ID.
- `POST /admin` - Enviar dados de login e senha.
- `PATCH /admin/:id` - Atualizar parcialmente um recurso.
- `PUT /admin/:id` - Substituir um recurso.
- `DELETE /admin/:id` - Eliminar um recurso.

### Rotas de User

- `GET /user` - Listar todos os utilizadores.
- `GET /user/:id` - Obter detalhes de um utilizador específico.

## Testes de Requisição

Para testar as requisições, utilize o ficheiro `SERVER.rest` no Visual Studio Code com a extensão REST Client.

Exemplos de requisições disponíveis no ficheiro:

```plaintext
### get admin
GET http://localhost:3000/admin

### get admin com id
GET  http://localhost:3000/admin/250

### admin aceder via post
POST http://localhost:3000/admin
Content-Type: application/json

{
    "login":"rodrigomartins",
    "senha":"123456"
}

### admin aceder via patch
PATCH http://localhost:3000/admin/250

### admin aceder via put
PUT http://localhost:3000/admin/250

### admin aceder via delete
DELETE http://localhost:3000/admin/250

### get user
GET http://localhost:3000/user

### get user com o id
GET http://localhost:3000/user/520
```

## Dependências Utilizadas
- `express` - Framework web para Node.js.
- `cookie-parser` - Middleware para lidar com cookies.

Para instalar uma dependência adicional, utilize:
```
npm install <nome-da-dependencia>
```

## Notas Finais
- Certifique-se de que todas as dependências estão instaladas antes de executar o projeto.
- Utilize o ficheiro `SERVER.rest` para validar o funcionamento correto das rotas.
- Para dúvidas ou melhorias, crie uma _issue_ no repositório.

