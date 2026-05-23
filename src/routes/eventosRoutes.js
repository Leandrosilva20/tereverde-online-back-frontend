const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { listarEventos, criarEvento, atualizarEvento, deletarEvento } = require('../controllers/eventosController');

router.get('/', listarEventos);
router.post('/', auth, criarEvento);
router.put('/:id', auth, atualizarEvento);
router.delete('/:id', auth, deletarEvento);

module.exports = router;
