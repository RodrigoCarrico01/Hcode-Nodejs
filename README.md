# ENGLISH

## NodeJS Course | Blocking vs Non-Blocking

### What should you do?

*You should create a .txt file with a large amount of text to test the reading speed and determine which approach is faster.*

### How to use it?

*Use the command "node fs-sync.js" to test blocking and the command "node fs-async.js" to test non-blocking.*

### NOTE

*JavaScript is single-threaded.*
*The Blocking method performs an action and, until that action is completed, no other tasks can be executed. It works like a queue within a single thread.*
*The Non-Blocking method allows multiple tasks to be executed on the same thread simultaneously.*
*Avoid mixing Blocking and Non-Blocking methods in the same codebase; choose one to maintain consistency and avoid issues.*
*The Non-Blocking method is generally more advantageous due to its higher throughput and efficiency.**

# PORTUGUÊS

## Curso NodeJS | Blocking vs Non Blocking

### O que devo fazer?

*O utilizador deverá criar um ficheiro .txt com muito texto para testar a leitura e verificar qual será a mais rápida.*

### Como utilizar?

*Utilize o comando ``node fs-sync.js`` para testar o blocking e o comando ``node fs-wsync.js`` para testar o non-blocking.*

### NOTA

*O JavaScript é single-threaded.*
*O método Blocking realiza uma ação e, enquanto essa ação não é concluída, não é possível realizar outras tarefas. Funciona como uma fila dentro de uma única thread.*
*O método Non-Blocking permite a execução de várias tarefas na mesma thread ao mesmo tempo.*
*Evite misturar métodos Blocking e Non-Blocking no mesmo código; escolha apenas um para manter a consistência e evitar problemas.*
*O método Non-Blocking é geralmente mais vantajoso devido à sua maior taxa de transferência e eficiência.*