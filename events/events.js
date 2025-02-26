const {EventEmitter} = require('events')

class Evento extends EventEmitter {}
const meuEvento = new Evento()

// subscriber - assinante
meuEvento.on('seguranca',(x,y)=>{
    console.log(`A executar o evento 'seguranca': ${x} ${y}`)
})

//publisher - emissor
meuEvento.emit('seguranca','userAdmin','Alterou salário')

meuEvento.on('encerrar',(dados)=>{
    console.log('Assinante' + dados)
})

meuEvento.emit('encerrar','A encerrar a execução da importação de dados')



