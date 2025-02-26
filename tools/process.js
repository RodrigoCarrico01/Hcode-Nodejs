require('./subdirectory/sub')
console.log('----------------------------')
console.log(`Nome do arquivo:`, __filename)
console.log(`Diretório do arquivo:`, __dirname)
console.log(`Diretório em que foi invocado:`, process.cwd())
console.log(`Sistema operacional:`, process.env.OS)
console.log(`Utilizador no SO:`, process.env.USERNAME)
console.log(`Idioma:`, process.env.LANG)
console.log(`Nome do server:`, process.env.COMPUTERNAME)

switch(process.argv[2]){
    
    case '-a':
        console.log('Execute rotina principal');
        break;
    case '-i':
        console.log('Execute instalação');
        break;
    case '-q':
        console.log('A encerrar Aplicação');
        process.exit(); //interrompe de imediato o código 
        break;
    default:
        console.log('Parâmetro inválido');
}

console.log(`Ambiente do servidor:`, process.platform)
