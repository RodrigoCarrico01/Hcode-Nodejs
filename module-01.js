console.log('A executar module-01.js')

const oculta = ()=>{
    console.log('A executar a função oculta')
}

const executa = ()=>{
    console.log('A executar a função executa')
}

const welcome = `Bem vindo ao módulo module-02.js`


module.exports = {executa, welcome, oculta}

//REPL 
//para limparmos o a cache temos podemos usar o .exit nesse módulo REPL

