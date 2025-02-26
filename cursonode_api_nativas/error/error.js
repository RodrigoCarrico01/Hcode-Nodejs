//throw new Error('Oh não, deu erro! Não é possivi, na minha máquina isto funciona!')

// tentar executar alguma coisa, se der erro executar o catch automaticamente
function execute(){
    executeTo() 
}
function executeTo(){
    throw new Error('Oh não, deu erro! Não é possivi, na minha máquina isto funciona!')
}

function init(){
    try {
        execute()
    
    } catch (error) {
        console.log(`Temos um problema! ${error.message}`)

    }
}

init()
console.log('Depois do Erro')