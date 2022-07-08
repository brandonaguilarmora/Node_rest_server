const { response, request } = require('express')

const getUser = (req = request, res = response) =>{
    const {q, tin} = req.query;
    res.json({
        msg: 'peticion get',
        q,
        tin
    })
}
const getPost = (req, res = response) =>{
    const {nombre, edad} = req.body;
    res.json({
        msg: 'peticion post - controllers',
        nombre,
        edad
    })
}
const getPut = (req, res = response) =>{
    const id = req.params.id
    res.json({
        msg: 'peticion put - controllers',
        id
    })
}
const getPatch = (req, res = response) =>{
    res.json({
        msg: 'peticion patch - controllers',
    })
}
const getDelete = (req, res = response) =>{
    res.json({
        msg: 'peticion delete - controllers'
    })
}
module.exports = {
    getUser,
    getPost,
    getPut,
    getPatch,
    getDelete
}