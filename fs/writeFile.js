const {writeFile} = require('fs'); //Destruturação, ele vai buscar o writeFile ao FS E vai guardar na constante.

writeFile("fs/arquivo.txt", 'A criar um arquivo de texto com writeFile', err=>{
    if(err) throw err;
    console.log('Arquivo criado com sucesso!');
})