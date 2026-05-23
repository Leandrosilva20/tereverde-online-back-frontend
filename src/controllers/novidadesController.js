const pool = require('../models/db');

const listarNovidades = async (req, res) => {
  const result = await pool.query('SELECT * FROM novidades ORDER BY created_at DESC');
  res.json(result.rows);
};

const criarNovidade = async (req, res) => {
  const { titulo, conteudo } = req.body;
  const result = await pool.query(
    'INSERT INTO novidades (titulo, conteudo) VALUES ($1, $2) RETURNING *',
    [titulo, conteudo]
  );
  res.status(201).json(result.rows[0]);
};

const atualizarNovidade = async (req, res) => {
  const { id } = req.params;
  const { titulo, conteudo } = req.body;
  const result = await pool.query(
    'UPDATE novidades SET titulo=$1, conteudo=$2 WHERE id=$3 RETURNING *',
    [titulo, conteudo, id]
  );
  res.json(result.rows[0]);
};

const deletarNovidade = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM novidades WHERE id = $1', [id]);
  res.json({ mensagem: 'Novidade removida com sucesso.' });
};

module.exports = { listarNovidades, criarNovidade, atualizarNovidade, deletarNovidade };
