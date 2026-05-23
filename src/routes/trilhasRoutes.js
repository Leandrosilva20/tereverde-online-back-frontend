const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { listarTrilhas, criarTrilha, atualizarTrilha, deletarTrilha } = require('../controllers/trilhasController');

router.get('/', listarTrilhas);
router.post('/', auth, criarTrilha);
router.put('/:id', auth, atualizarTrilha);
router.delete('/:id', auth, deletarTrilha);

module.exports = router;
