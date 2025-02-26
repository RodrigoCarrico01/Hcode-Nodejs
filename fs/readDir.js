const fs = require('fs')

fs.readdir(__dirname, (err, data)=>{
    if(err) throw err

    data.forEach((files)=>{
        console.log(__dirname + '\\' + files)
    })
}) 



// readdir vai 1º ler o nosso diretório e vai chamar uma função callback.
// readdir sync é a versão bloqueante (blocking) ou seja ele executa sem deixar outras coisas acontecerem 