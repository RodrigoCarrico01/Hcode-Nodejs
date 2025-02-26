# ENGLISH

# NodeJS Course - File Upload

This repository is part of the Node.js course and demonstrates how to handle file uploads using the Express framework and the Multer library.

## Installation

### 1. Clone the Repository
```bash
    git clone <REPOSITORY_URL>
    cd <REPOSITORY_NAME>
```

### 2. Install Dependencies
```bash
    npm install
```

## Dependencies

This project relies on the following dependencies:
- **express**: Web framework for Node.js
- **body-parser**: Middleware for handling HTTP requests
- **multer**: Middleware for file uploads
- **bootstrap**: CSS library for styling

To manually install the dependencies, run the following command:
```bash
    npm install express body-parser multer bootstrap
```

## Running the Server

```bash
    node server.js
```

The server will start on port **3000**, and you can access it in your browser at:
```
http://127.0.0.1:3000
```

## How to Use

1. Open the main page in your browser.
2. Select a file using the form.
3. Click the "Upload File" button to submit the file.
4. The uploaded file will be stored in the **uploads/** directory inside the project folder.

## Project Structure

```
/REPOSITORY_NAME
├── node_modules/        # Project dependencies
├── uploads/            # Directory where uploaded files are stored
├── server.js           # Main server file
├── index.html          # User interface
├── package.json        # Project settings and dependencies
└── README.md           # Documentation file
```

## Additional Notes
- Make sure the **uploads/** folder exists before starting the server. If it doesn’t, create it manually.
- If you see the error "Please select a file!", ensure you have chosen a file before submitting the form.


__________________________________________________________________________

# PORTUGUÊS

# Curso NodeJS - Upload

Este repositório faz parte do curso de Node.js e demonstra como realizar o upload de ficheiros utilizando o framework Express e a biblioteca Multer.

## Instalação

### 1. Clonar o repositório
```
    git clone <URL_DO_REPOSITORIO>
    cd <NOME_DO_REPOSITORIO>
```

### 2. Instalar dependências
```
    npm install
```

## Dependências

O projeto utiliza as seguintes dependências:
- **express**: Framework web para Node.js
- **body-parser**: Middleware para manipular requisições HTTP
- **multer**: Middleware para manipular upload de ficheiros
- **bootstrap**: Biblioteca CSS para estilização

Para instalar manualmente as dependências, pode utilizar o seguinte comando:
```
    npm install express body-parser multer bootstrap
```

## Executar o Servidor

```
    node server.js
```

O servidor irá iniciar na porta **3000** e pode ser acessado através do navegador em:
```
http://127.0.0.1:3000
```

## Como Usar

1. Aceder à página inicial pelo navegador.
2. Selecionar um ficheiro através do formulário.
3. Clicar no botão "Enviar o ficheiro" para realizar o upload.
4. O ficheiro será armazenado na pasta **uploads/** no diretório do projeto.

## Estrutura do Projeto

```
/NOME_DO_REPOSITORIO
├── node_modules/        # Dependências do projeto
├── uploads/            # Diretório onde os ficheiros serão guardados
├── server.js           # Servidor principal
├── index.html          # Interface do utilizador
├── package.json        # Configurações do projeto e dependências
└── README.md           # Este ficheiro de documentação
```

## Notas Adicionais
- Certifica-te de que a pasta **uploads/** existe antes de iniciar o servidor. Se não existir, cria-a manualmente.
- Em caso de erro "Por favor, seleciona um ficheiro!", garante que estás a selecionar um ficheiro antes de enviar o formulário.



