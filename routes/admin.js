const express = require('express')
const router = express.Router() //esta é a função de rotas

router.get('/',(req, res)=>{ 
    res.send('A aceder a administração..')
})

router.get('/:id',(req, res)=>{ 
    res.send('A aceder a administração com o id:'+req.params.id)
})
router.post('/',(req, res)=>{ 
    const corpo = `Login: ${req.body.login}\n Senha: ${req.body.senha}`
    res.send('A aceder a administração via post \n'+ corpo)
})

router.patch('/:id', (req,res)=>{
    res.send('A aceder a administração via PATCH')
})
router.put('/:id', (req,res)=>{
    res.send('A aceder a administração via PUT')
})
router.delete('/:id', (req,res)=>{
    res.send('A aceder a administração via DELETE')
})

module.exports = router