const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const trilhasRoutes = require('./routes/trilhasRoutes');
const eventosRoutes = require('./routes/eventosRoutes');
const novidadesRoutes = require('./routes/novidadesRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/trilhas', trilhasRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/novidades', novidadesRoutes);

module.exports = app;
