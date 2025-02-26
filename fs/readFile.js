const fs  = require ('fs')

//Non-Blocking Method
fs.readFile('fs/texto.txt',(err, data)=>{
    if(err) throw err
  //  console.log(data.toString())
})

//Blocking method
const texto = fs.readFileSync("fs/texto.txt") // blocking method, só depois de ler o arquivo todo é que continua a fazer outra coisa

console.log(`Texto: ${texto}`)

