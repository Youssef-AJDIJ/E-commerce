'use strict';

import "dotenv/config.js";
import express from 'express';
import userRoutes from './routes/user.js';
import db from './models/index.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // NECESARIO para que req.body funcione

// Usar las rutas
app.use('/api/users', userRoutes);


// Sincronizar y arrancar
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Servidor CRUD listo en http://localhost:${PORT}`);
  });
})