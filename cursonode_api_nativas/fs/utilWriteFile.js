const {promisify} = require('util')

const writeFile = promisify(require('fs').writeFile); //módulo writefile que já vem como promise
const conteudo = `A criar um arquivo utilizando o promisify do módulo nativo útil`

writeFile('fs/utilArquivo.txt', conteudo).then(()=>{
    console.log('Arquivo utilArquivo criado com sucesso')
}).catch((err)=>{
    console.log(`Deu erro: ${err}`)
})


//aqui utizamos a promise ou seja não precisamos de tratar o erro com o callback, ou seja, o erro ficou com o then
//e com o catch