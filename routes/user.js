const express = require('express')
const router = express.Router()


function logReq(req, res, next){
    console.log('A executar a função middleware para a rota users')
    return next()
}

router.get('/', logReq, (req, res,)=>{ //o middleware interfere e depois deixa o a requesição e a response aparecerem
    res.send('A listar os utilizadores')
})

router.get('/:id',(req, res)=>{ 
    res.send('A listar o utilizador:'+req.params.id)
})

module.exports = router