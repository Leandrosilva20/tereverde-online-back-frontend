const pool = require('../models/db');

const listarEventos = async (req, res) => {
  const result = await pool.query('SELECT * FROM eventos ORDER BY data_inicio ASC');
  res.json(result.rows);
};

const criarEvento = async (req, res) => {
  const { titulo, descricao, data_inicio, data_fim, horario, disponivel } = req.body;
  const result = await pool.query(
    'INSERT INTO eventos (titulo, descricao, data_inicio, data_fim, horario, disponivel) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [titulo, descricao, data_inicio, data_fim, horario, disponivel]
  );
  res.status(201).json(result.rows[0]);
};

const atualizarEvento = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, data_inicio, data_fim, horario, disponivel } = req.body;
  const result = await pool.query(
    'UPDATE eventos SET titulo=$1, descricao=$2, data_inicio=$3, data_fim=$4, horario=$5, disponivel=$6 WHERE id=$7 RETURNING *',
    [titulo, descricao, data_inicio, data_fim, horario, disponivel, id]
  );
  res.json(result.rows[0]);
};

const deletarEvento = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM eventos WHERE id = $1', [id]);
  res.json({ mensagem: 'Evento removido com sucesso.' });
};

module.exports = { listarEventos, criarEvento, atualizarEvento, deletarEvento };
