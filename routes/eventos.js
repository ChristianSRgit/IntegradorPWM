var express = require('express');
var router = express.Router();
var eventosModel = require('../models/eventosModel');
/* GET home page. */
router.get('/', async function (req, res, next) {

  var eventos = await eventosModel.getEventos();

  res.render('eventos', {
    isEventos: true,
    eventos
  });
});

module.exports = router;