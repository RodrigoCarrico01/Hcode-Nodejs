const {writeFile} = require('fs')

function criaArquivo(name, content){
    return new Promise((resolve, reject)=>{
        writeFile(name, content, err=>{
            if(err) return reject(err)
            resolve()
        })
    })
} //função que retorna a promise

criaArquivo('fs/promiseArquivo.txt', 'A Criar um arquivo utilizando as promises')
     .then(() => console.log('Arquivo promiseArquivo.txt criado com sucesso!'))
     .catch(err => console.log(err))