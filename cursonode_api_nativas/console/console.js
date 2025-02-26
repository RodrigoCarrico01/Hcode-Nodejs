console.log('A Exibir uma mensagem no console!')

// erro

console.error(new Error('A exibir uma mensagem de erro, temos problemas!'))

// tabela

const carros = ['GM','FIAT','FORD','VW','RENAULT','HONDA','Hyundai '] //array

console.table(carros) //exibir array

const dados = {name: 'Rodrigo Martins', empresa: 'EmpresaTeste'} //  objeto

console.table(dados) //exibir objeto

// Contar

console.count('processo')
console.count('processo')
console.count('processo')
console.count('processo')

console.log('A resetar o processo!')

console.countReset('processo')

console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++){
   // console.log('-') Ao tirar esta nota conseguimos ver quanto tempo demora o contador com um for no meio
}
console.timeEnd('contador')

console.assert(true, 'Faz alguma coisa!');

console.assert(false, 'Eish, %s, que pena!', 'Não funcionou')

// limpa os dados
// console.clear() 
