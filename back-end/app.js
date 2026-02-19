

import db from './models/index.js';
import express from 'express';
import "dotenv/config.js";


const app = express();


const PORT = process.env.PORT || 3000;

// .sync() verifica si las tablas existen, si no, las crea
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT} y DB sincronizada`);
  });
});
