const express = require('express');
const router = express.Router();
const { obtenerLaboratorios } = require('../controllers/laboratorioController');

router.get('/', obtenerLaboratorios);

module.exports = router;