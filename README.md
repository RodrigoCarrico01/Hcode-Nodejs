
# ENGLISH

## Node.js Course - Application Flow

*This repository contains a series of files organized by modules, exploring different **Node.js** features like **async/await**, **callbacks**, **promises**, **events**, **process handling**, **and nodemon**. Each file is designed to provide hands-on examples to help you understand these key concepts.*

## Table of Contents

> Repository Structure
> Installation
> File Descriptions
> How to Run

## Repository Structure

```
/async
    ├── async.js
    ├── callback.js
    └── promise.js
/events
    └── events.js
/tools
    ├── process.js
    └── /subdirectory
        └── sub.js
testenodemon.js
```

## Installation

1. ``git clone https://github.com/my-username/repository-name.git``
2. ``cd repository-name``
3. ``npm install``

## File Descriptions

### Async

- **async/async.js**
- - Demonstrates how to use `async/await` to handle asynchronous code execution.
- - Example: Adds 5000 to the given number after a `setTimeout` of 3 seconds.
- - Run with: ``node async/async.js``

- **async/callback.js**
- - Explores the use of callbacks in asynchronous operations.
- - Example: Uses a callback to return the result of an async sum operation.
- - Run with: ``node async/callback.js``

- **async/promise.js**
- - Demonstrates how to use Promises for asynchronous programming.
- - Example: Resolves an async sum using the `.then()` method.
- - Run with: ``node async/promise.js``

### Eventos 

- **events/events.js**
- - Shows how to work with the built-in `events` module in Node.js.
- - Example: Creates a custom event called `seguranca` and triggers it.
- - Run with: ``node events/events.js``

### Tools

- **tools/process.js**
- - Explores the `process` module to get information about the system environment and handle command-line arguments.
- - Example: Displays environment details and runs routines based on provided arguments.
- - Run with: 
> ``node tools/process.js -a``    # Run the main routine  
> ``node tools/process.js -i``    # Run the installation routine 
> ``node tools/process.js -q``    # Quit the application  

- **tools/subdirectory/sub.js**
- - Demonstrates the difference between `__dirname` and `process.cwd()` when dealing with file directories.
- - Run with: ``node tools/process.js``  

___________________________________________________________

# PORTUGUÊS

## Curso NodeJS - Fluxo de Aplicação

*Este repositório contém uma série de ficheiros organizados por módulos, onde exploramos diferentes funcionalidades do Node.js, tais como **async/await**, **callbacks**, **promises**, **eventos**, **processos** e **nodemon**. Cada ficheiro tem exemplos práticos que ajudam a entender o funcionamento de cada conceito.*

## Índice

> Estrutura do Repositório
> Instalação
> Descrição dos Ficheiros
> Como Executar

## Estrutura do Repositório

```
/async
    ├── async.js
    ├── callback.js
    └── promise.js
/events
    └── events.js
/tools
    ├── process.js
    └── /subdirectory
        └── sub.js
testenodemon.js
```

## Instalação

1. ``git clone https://github.com/meu-username/nome-do-repositorio.git``
2. ``cd nome-do-repositorio``
3. ``npm install``

## Descrição dos Ficheiros

### Async

- **async/async.js**
- - Demonstra o uso de `async/await` para esperar pela resolução de uma função assíncrona.
- - Exemplo: Soma 5000 ao número fornecido após um `setTimeout` de 3 segundos.
- - Comando: ``node async/async.js``

- **async/callback.js**
- - Demonstra o uso de funções de callback em operações assíncronas.
- - Exemplo: Utiliza um callback para retornar o resultado de uma soma assíncrona.
- - Comando: ``node async/callback.js``

- **async/promise.js**
- - Demonstra o uso de Promises para operações assíncronas.
- - Exemplo: Resolve uma soma assíncrona utilizando o método `.then()`.
- - Comando: ``node async/promise.js``

### Eventos 

- **events/events.js**
- - Demonstra o uso do módulo `events` do Node.js.
- - Exemplo: Cria um evento personalizado chamado `seguranca` e executa-o.
- - Comando: ``node events/events.js``

### Tools

- **tools/process.js**
- - Explora o módulo `process` para obter informações do ambiente e interpretar parâmetros passados pelo terminal.
- - Exemplo: Verifica diretórios, informações do sistema e executa rotinas dependendo dos argumentos.
- - Comando: 
> ``node tools/process.js -a``    # Para executar a rotina principal
> ``node tools/process.js -i``    # Para executar a instalação
> ``node tools/process.js -q``    # Para encerrar a aplicação

- **tools/subdirectory/sub.js**
- - Demonstra a diferença entre `__dirname` e `process.cwd()` ao trabalhar com diretórios e ficheiros no Node.js.
- - Comando: ``node tools/process.js``  












