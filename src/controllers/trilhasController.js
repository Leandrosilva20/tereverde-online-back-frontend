const pool = require('../models/db');

const listarTrilhas = async (req, res) => {
  const result = await pool.query('SELECT * FROM trilhas ORDER BY created_at DESC');
  res.json(result.rows);
};

const criarTrilha = async (req, res) => {
  const { nome, descricao, dificuldade, disponivel } = req.body;
  const result = await pool.query(
    'INSERT INTO trilhas (nome, descricao, dificuldade, disponivel) VALUES ($1, $2, $3, $4) RETURNING *',
    [nome, descricao, dificuldade, disponivel]
  );
  res.status(201).json(result.rows[0]);
};

const atualizarTrilha = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, dificuldade, disponivel } = req.body;
  const result = await pool.query(
    'UPDATE trilhas SET nome=$1, descricao=$2, dificuldade=$3, disponivel=$4 WHERE id=$5 RETURNING *',
    [nome, descricao, dificuldade, disponivel, id]
  );
  res.json(result.rows[0]);
};

const deletarTrilha = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM trilhas WHERE id = $1', [id]);
  res.json({ mensagem: 'Trilha removida com sucesso.' });
};

module.exports = { listarTrilhas, criarTrilha, atualizarTrilha, deletarTrilha };
