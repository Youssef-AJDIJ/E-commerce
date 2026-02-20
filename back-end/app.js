
import "dotenv/config.js";
import express from 'express';
import cors from "cors"
import userRoutes from './routes/user.js';
import authRoutes from "./routes/auth.js"
import db from './models/index.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(express.json()); // NECESARIO para que req.body funcione

// Usar las rutas
app.get("/", (req, res) =>{
    res.json({
      data: "hello from backend"
    })
  })
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


// Sincronizar y arrancar
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Servidor CRUD listo en http://localhost:${PORT}`);
  });
})