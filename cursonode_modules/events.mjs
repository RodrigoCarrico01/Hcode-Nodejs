import {EventEmitter} from 'events'

class Evento extends EventEmitter  {}
const meuEvento = new Evento()

// subscriber - assinante
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'seguranca': ${x} ${y}`)
})

// publisher - emissor
meuEvento.emit('seguranca','userAdmin','Alterou Salário')

meuEvento.on('encerrar',(dados)=>{
    console.log('Assinante:'+ dados)
})

meuEvento.emit('encerrar','A encerrar a execução da importação de dados!')

//este é um recurso do node 12 :) 