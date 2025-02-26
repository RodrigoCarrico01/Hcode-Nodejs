const crypto = require("crypto");
const start = Date.now();

function logHashTime(){
    crypto.pbkdf2("a","b",100000, 512,"sha512",()=>{
        console.log(`Hash: ${Date.now() - start}`);
    })
}

//4 Primeiros Threads que é o total de threads possiveis ao mesmo tempo nesta situação
logHashTime();
logHashTime();
logHashTime();
logHashTime(); 

//5º Threads ja é demais porque só há 4 threads em casos muito especificos.
logHashTime(); 



