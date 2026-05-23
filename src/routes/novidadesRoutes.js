const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { listarNovidades, criarNovidade, atualizarNovidade, deletarNovidade } = require('../controllers/novidadesController');

router.get('/', listarNovidades);
router.post('/', auth, criarNovidade);
router.put('/:id', auth, atualizarNovidade);
router.delete('/:id', auth, deletarNovidade);

module.exports = router;
