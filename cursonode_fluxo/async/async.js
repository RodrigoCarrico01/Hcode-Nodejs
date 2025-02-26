function sum(x){
    return new Promise((resolve, reject)=>{

        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Tás a brincar ò filho?');
        }

        setTimeout(()=>{
            resolve(x + 5000);
      },3000);
    })
}


async function main(){
    try{
        const resultado = await sum(230);
        console.log(`Resultado com async await: ${resultado}`);
    }catch(error){
        console.log(`Temos problemas: ${error}`);
    }
}

main();