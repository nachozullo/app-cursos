var express = require('express');
var router = express.Router();

const Curso = require('../models/Cursos');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* GET /api/clientes */
router.get('/', function(req, res, next) {
    console.log(req)
   Curso.distinct("alumnos", null, function(err, clientes){
     if(err){
       console.error(err);
       res.status(500).send();
     } else {
       res.json(clientes);
     }
   })
});

module.exports = router;
