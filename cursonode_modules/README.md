# ENGLISH

## NodeJS Course - Modules

### Description

*This repository contains code related to the "Modules" section of the Node.js course. Here, we explore concepts of module import and export, destructuring, and events.*

### Structure 
- ``module-01.js``: Main module with exported functions.
- ``module-02.js``: Full import of the module-01.js module.
- ``module-02-destruturacao.js``: Import of specific functions via destructuring.
- ``events.mjs``: Demonstrates the use of EventEmitter for publishing and subscribing to events.

### Requirements
> Node.js v12 or higher.

### Installation

1. Clone the repository: ``git clone {repository-url}``
2. Navigate to the repository directory: ``cd repository-name``
3. Ensure that Node.js is properly installed: ``node -v``

### Using the Code
> module-01.js
*This file defines three main elements:*
- `oculta`: A function that prints a message to the console.
- `executa`: Another function that displays a message.
- `welcome`: A welcome message.

*To test:*
```node module-01.js```

*The following should appear in the console:*
```A executar module-01.js```
**(translated - Running module-01.js)**

> module-02.js
*Here, we import the `module-01.js` file and use its functions directly.* 

*To execute*
```node module-02.js```

*Expected output:*
```
A executar a função executa
A executar a função oculta
``` 
**(translated - Running the executa function & Running the oculta function**


> module-02-destruturacao.js
*Uses destructuring to import only the `executa` and `oculta` functions from the module.*

*To execute:*
```node module-02-destruturacao.js```

*Expected output:*
```
A executar a função executa
A executar a função oculta
```
**(translated - Running the executa function & Running the oculta function**

> event.mjs
*Demonstrates the use of `EventEmitter`:*
- Defines an event `seguranca` and another `encerrar`.
- Associates callback functions to these events and emits them.

*To execute:*
```node --experimental-modules events.mjs```

*Expected output:*
```
Executando o evento 'seguranca': userAdmin Alterou Salário
Assinante: A encerrar a execução da importação de dados!
```
**(translated - Executing the 'seguranca' event: userAdmin Changed Salary & Subscriber: Closing the data import execution!)**


___________________________________________________________________

# PORTUGUÊS

## Curso NodeJS - Modules

### Descrição

*Este repositório contém códigos relacionados ao módulo de "Modules" do curso de Node.js. Aqui exploramos conceitos de importação e exportação de módulos, destruturação e eventos.*

### Estrutura 
- ``module-01.js``: Módulo principal com funções exportadas.
- ``module-02.js``: Importação completa do módulo module-01.js.
- ``module-02-destruturacao.js``: Importação de funções específicas via destruturação.
- ``events.mjs``: Demonstra o uso do EventEmitter para publicar e subscrever eventos.

### Requisitos
> Node.js v12 ou superior.

### Instalação

1. Clone o repositório: ``git clone {repositorio-url}``
2. Aceda o diretório do repositório: ``cd nome-repositorio``
3. Certifique-se de que o Node está intalado corretamente: ``node -v``

### Utilização do código
> module-01.js
*Este ficheiro define três elementos principais:*
- `oculta`: Uma função que imprime uma mensagem no console.
- `executa`: Outra função para mostrar uma mensagem.
- `welcome`: Uma mensagem de boas-vindas.

*Para testar:*
```node module-01.js```

*Deverá aparecer no console:*
```A executar module-01.js```

> module-02.js
*Aqui, importamos o ficheiro `module-01.js` e utilizamos as suas funções diretamente.*

*Para executar:*
```node module-02.js```

*Saída esperada:*
```
A executar a função executa
A executar a função oculta
``` 

> module-02-destruturacao.js
*Utiliza a destruturação para importar apenas as funções `executa` e `oculta` do módulo.*

*Para executar:*
```node module-02-destruturacao.js```

*Saída esperada:*
```
A executar a função executa
A executar a função oculta
```

> event.mjs
*Demonstração do uso de `EventEmitter` com import:*
- Define um evento `seguranca` e outro `encerrar`.
- Associa funções de callback a esses eventos e os emite.

*Para executar:*
```node --experimental-modules events.mjs```

*Saída esperada:*
```
Executando o evento 'seguranca': userAdmin Alterou Salário
Assinante: A encerrar a execução da importação de dados!
```

