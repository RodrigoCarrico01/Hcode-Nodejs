const { error } = require('console')
const { EventEmitter } = require('events')
const emitter = new EventEmitter()

const validaObjeto = (a) => {
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('Tipo informado inválido'))
    }else{
        console.log('Objeto válido!')
    }
}

emitter.addListener('error',(err)=>{
    console.log('Evento:'+ err.message)
})

let dados = {name:'mrrod', course:'NodeJS'}

// validaObjeto('123') colocar este caso queira tipo informado inválido
validaObjeto(dados) //este é objeto válido