    const EventEmitter = require ('events')

    class Evento extends EventEmitter {}
    const meuEvento = new Evento()

    meuEvento.on('seguranca', (x,y)=>{
        console.log(`A Executar o evento seguranca: ${x} ${y}`)
    }) // On nós criamos o evento

    meuEvento.emit('seguranca', 'userAdmin', 'Alterou salátrio') //este dispara o evento