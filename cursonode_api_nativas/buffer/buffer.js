const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso completo de NodeJS')

console.log(buf.toString())
console.log(buf.toString('utf16le')) //caracteres asiáticos

const buf_string = Buffer.from('A carregar uma string','utf-8')

console.log(Buffer.isBuffer(buf_string)) 
console.log(buf_string.toString('utf-8', 0, 10)) 




