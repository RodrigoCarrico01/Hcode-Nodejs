# ENGLISH

## NodeJS Course - Native APIs

*This repository contains practical code examples used in the fourth module of the Node.js course, focused on demonstrating the use of Node.js native modules. Each section covers essential functionalities like **buffer manipulation**, **parallel processing**, **events**, **error handling**, **file system operations**, and much more.*

## Installation
> To run the examples in this repository, you'll need to have Node.js installed on your machine:
1. *Clone the repository:* `git clone {repository_url}` and `cd {repository-folder`
2. *Install dependencies:* `npm install`
*Note: Most examples in this project do not require additional dependencies, but running npm install ensures that any necessary modules are correctly set up.*

## Conteúdo
> Buffer
> Child Process
> Console
> Error Handling
> Events
> HTTP Server
> Path
> File System (FS)

### 1. Buffer
**Location**: `buffer/buffer.js`
*The **Buffer** module is used to work with binary data streams. The provided example includes:*
- Creating buffers from strings.
- Converting buffers to different text formats.
- Validating if an object is a buffer.

#### How to use:
``` node buffer/buffer.js ```
*This will display the buffer content in different encoding formats.*

### 2. Child Process
**Location**: `childProcess/childProcess.js`
*This example demonstrates how to execute background processes using the **child_process** module:*
- The example runs the `ls` command on UNIX systems.
- Captures the process's output (stdout) and errors (stderr).

#### How to use:
```node childProcess/childProcess.js```
*This will list the contents of multiple directories as specified in the command.*

### 3. Console
**Location**: `console/console.js`
*Demonstrates different methods of the global **console** object:*
- `console.log` and `console.error` for general messages and errors.
- `console.table` for displaying arrays and objects in tabular form.
- `console.count` and `console.countReset` to count function calls.
- `console.time` and `console.timeEnd` to measure execution time.

#### How to use:
```node console/console.js```
*This will display tables, counts, and execution times in the terminal.*

### 4.1 Error Handling
**Location**: `error/error.js`
*This example shows how to capture and handle errors in nested functions using `try...catch`.*

#### How to use
```node error/error.js```
*This will generate a custom error message and allow the program to continue after the error.*

### 4.2 Error Handling | Event
**Location**: `error/errorEvent.js`
*Demonstrates how to detect and handle custom errors using the **events** module.*

#### How to use:
```node error/errorEvent.js```
*When an invalid data type is passed, the program will trigger an error event and display a corresponding message.*

### 5. Events
**Location**: `events/events.js`
*Demonstrates the creation of custom events with the **events** module:*
- Creating subscribers that respond to specific events.
- Emitting events to trigger the subscribers.

#### How to use:
```node events/events.js```
*This will display messages when the security and shutdown events are emitted.*

### 6. HTTP Server
**Localização**: `http/index.js`
*Creates a simple HTTP server using the **http** module:* 
- Returns an HTML page to the client.
- Automatically opens the browser pointing to the server.

#### How to use:
```node http/index.js```
*The server will start at http://127.0.0.1:3000/ and automatically open the browser.*

### 7. Path
**Location**: `path/path.js`
*Demonstrates the use of the **path** module for file path manipulation:*
- `basename`: gets the file name.
- `normalize`: normalizes the path, removing redundancies.
- `join` and `resolve`: builds absolute and relative paths.
- `extname`: gets the file extension.

#### How to use:
```node path/path.js```
*This will display various file path manipulations in the terminal.*

### 8.1 File System (FS) |  Async Read
**Location**: `fs/asyncRead.js`
*This section contains various examples of file manipulation using the **fs** module.*
- Reads a file asynchronously using **async/await**.

#### How to use:
```node fs/asyncRead.js```
This will display the content of `fs/text.txt` in the terminal.*

### 8.2 File System (FS) | Html
**Location**: `fs/html.js`
- Reads an HTML file and returns it via the ``HTTP`` server.

#### How to use:
```node fs/html.js```
*Access the server at http://127.0.0.1:3000/ to view the HTML content.*

### 8.3 File System (FS) | create dir structure
**Location**: `fs/mkdir.js`
- Automatically creates a recursive directory structure.

#### How to use:
```node fs/mkdir.js```
*This will create the specified directories inside `fs/project/assets/.`*

### 8.4 File System (FS) | write file (promise)
**Location**: `fs/promiseWriteFile.js`
- Demonstrates file creation using **Promises**.

#### How to use:
```node fs/promiseWriteFile.js```
*This will create a file named `fs/promiseFile.txt.`*

### 8.5 File System (FS) | read dir
**Location**: `fs/readDir.js`
- Lists all files in the current directory using a **callback function**.

#### How to use:
```node fs/readDir.js```
*This will display the files in the directory where the script was executed.*

### 8.6 File System (FS) | read file :)
**Location**: `fs/readFile.js`
- Demonstrates file reading using **blocking** (sync) and **non-blocking** (async) methods.

#### How to use:
```node fs/readFile.js```
*This will display the content of `fs/text.txt` in the terminal.*

### 8.7 File System (FS) | Write file (util)
**Location**: `fs/utilWriteFile.js`
- Creates files using the **util** module to promisify functions.

#### How to use:
```node fs/utilWriteFile.js```
*This will create the file `fs/utilFile.txt`.*

### 8.8 File System (FS)| write file
**Location**: `fs/writeFile.js`
- Simply creates files using the **fs.writeFile** method.

#### How to use: 
```node fs/writeFile.js```
*This will create the file `fs/file.txt`.*


________________________________________________________________________________

# PORTUGUÊS

## Curso NodeJS - APIs Nativas 

*Este repositório contém códigos práticos utilizados no quarto módulo do curso de Node.js, focado em demonstrar o uso de módulos nativos da plataforma. Cada secção cobre funcionalidades essenciais como **manipulação de buffers**, **processamento paralelo**, **eventos**, **erros**, **sistema de ficheiros** e muito mais.*

## Instalação
> Para executar os exemplos deste repositório, é necessário ter o Node.js instalado na sua máquina:
1. *Clone o repositório:* `git clone {repository_url}` e `cd {repository-folder`
2. *Instale as dependências:* `npm install`
*Nota: A maioria dos exemplos neste projeto não requer dependências adicionais, mas executar o npm install garante que todos os módulos necessários estão corretamente configurados.*

## Conteúdo
> Buffer
> Child Process
> Console
> Gestão de Erros
> Eventos
> HTTP Server
> Path
> Sistema de Ficheiros (FS)

### 1. Buffer
**Localização**: `buffer/buffer.js`
*O módulo **Buffer** é utilizado para trabalhar com fluxos de dados binários. No exemplo fornecido, temos:*
- Criação de buffers a partir de strings.
- Conversão de buffers para diferentes formatos de texto.
- Validação se um objeto é um buffer.

#### Como usar:
``` node buffer/buffer.js ```
*Deverá mostrar o conteúdo do buffer em diferentes formatos de codificação.*

### 2. Child Process
**Localização**: `childProcess/childProcess.js`
*Este código demonstra como executar processos em segundo plano (child processes) usando o módulo **child_process**:*
- O exemplo executa o comando `ls` no ambiente UNIX.
- Captura a saída (stdout) e os erros (stderr) do processo.

#### Como usar:
```node childProcess/childProcess.js```
*Deverá listar o conteúdo de vários diretórios conforme especificado no comando.*

### 3. Console
**Localização**: `console/console.js`
*Demonstra o uso de diferentes métodos do objeto global **console**:*
- `console.log` e `console.error` para mensagens gerais e erros.
- `console.table` para visualizar arrays e objetos de forma tabular.
- `console.count` e `console.countReset` para contar chamadas de funções.
- `console.time` e `console.timeEnd` para medir o tempo de execução.

#### Como usar:
```node console/console.js```
*Isto irá exibir tabelas, contagens e tempos de execução no terminal.*

### 4.1 Gestão de Error 
**Localização**: `error/error.js`
*Este exemplo mostra como capturar e tratar erros em funções aninhadas usando `try...catch.`*

#### Como usar:
```node error/error.js```
*Isto irá gerar uma mensagem de erro personalizada e permitir que o programa continue após o erro.*

### 4.2 Gestão de Erros | Event
**Localização**: `error/errorEvent.js`
*Demonstra o uso de eventos para detetar e tratar erros personalizados usando o módulo **events**.*

#### Como usar:
```node error/errorEvent.js```
*Quando um tipo de dado inválido é passado, o programa irá disparar um evento de erro e exibir uma mensagem correspondente.*

### 5. Eventos
**Localização**: `events/events.js`
*Demonstra a criação de eventos personalizados com o módulo **events**:*
- Criação de assinantes (subscribers) que respondem a eventos específicos.
- Emissão de eventos (publishers) para acionar os assinantes.

#### Como usar:
```node events/events.js```
*Deverá exibir mensagens conforme os eventos seguranca e encerrar são emitidos.*

### 6. HTTP Server
**Localização**: `http/index.js`
*Cria um servidor HTTP simples utilizando o módulo **http**:*
- Retorna uma página HTML ao cliente.
- Abre automaticamente o navegador apontando para o servidor.

#### Como usar:
```node http/index.js```
*O servidor será iniciado em http://127.0.0.1:3000/ e abrirá automaticamente o navegador.*

### 7. Path
**Localização**: `path/path.js`
*Demonstra o uso do módulo **path** para manipulação de caminhos de ficheiros:*
- `basename`: obtém o nome do ficheiro.
- `normalize`: normaliza o caminho, removendo redundâncias.
- `join e resolve`: constrói caminhos absolutos e relativos.
- `extname`: obtém a extensão do ficheiro.

#### Como usar:
```node path/path.js```
*Deverá mostrar no terminal diferentes manipulações de caminhos de ficheiros.*

### 8.1 Sistema de Ficheiros(FS) |  Async Read
**Localização**: `fs/asyncRead.js`
*Esta secção contém vários exemplos de manipulação de ficheiros utilizando o módulo **fs**.*
- Lê um ficheiro de forma assíncrona utilizando **async/await.**

#### Como usar:
```node fs/asyncRead.js```
*Deverá exibir o conteúdo de fs/texto.txt no terminal.*

### 8.2 Sistema de Ficheiros(FS) | Html
**Localização**: `fs/html.js`
- Lê um ficheiro HTML e retorna-o via servidor `HTTP`.

#### Como usar:
```node fs/html.js```
*Aceda ao servidor em http://127.0.0.1:3000/ para visualizar o conteúdo HTML.*

### 8.3 Sistema de Ficheiros(FS) | create dir structure
**Localização**: `fs/mkdir.js`
- Cria uma estrutura de diretórios recursiva automaticamente.

#### Como usar:
```node fs/mkdir.js```
*Deverá criar os diretórios especificados dentro de fs/projeto/assets/.*

### 8.4 Sistema de Ficheiros(FS) | write file (promise)
**Localização**: `fs/promiseWriteFile.js`
- Demonstra a criação de ficheiros usando Promises.

#### Como usar:
```node fs/promiseWriteFile.js```
*Deverá criar um ficheiro chamado `fs/promiseArquivo.txt`*

### 8.5 Sistema de Ficheiros(FS) | read dir
**Localização**: `fs/readDir.js`
- Lista todos os ficheiros no diretório atual utilizando uma função de callback.

#### Como usar:
```node fs/readDir.js```
*Deverá exibir os ficheiros do diretório onde o script foi executado.*

### 8.6 Sistema de Ficheiros(FS) | read file :)
**Localização**: `fs/readFile.js`
- Demonstra a leitura de ficheiros usando métodos de bloqueio (sync) e não bloqueio (async).

#### Como usar:
```node fs/readFile.js```
*Deverá exibir o conteúdo de `fs/texto.txt` no terminal.*

### 8.7 Sistema de Ficheiros(FS) | Write file (util)
**Localização**: `fs/utilWriteFile.js`
- Cria ficheiros utilizando o módulo util para promisificar funções.

#### Como usar:
```node fs/utilWriteFile.js```
*Deverá criar o ficheiro `fs/utilArquivo.txt`.*

### 8.8 Sistema de Ficheiros(FS) | write file
**Localização**: `fs/writeFile.js`
- Cria ficheiros de forma simples utilizando writeFile do módulo fs.

#### Como usar: 
```node fs/writeFile.js```
*Deverá criar o ficheiro `fs/arquivo.txt`.*

