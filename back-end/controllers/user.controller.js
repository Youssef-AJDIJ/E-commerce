import db from '../models/index.js';
const User = db.User;

// CREAR un usuario
export const createUser = async (req, res) => {
  try {
    const { username, email, passwordHash } = req.body;
    const user = await User.create({ username, email, passwordHash });
    res.status(201).json({ message: 'Usuario creado', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// LEER todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ACTUALIZAR un usuario
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.update(req.body, { where: { id } });
    res.json({ message: 'Usuario actualizado con éxito' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// BORRAR un usuario (Soft Delete)
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.json({ message: 'Usuario eliminado (Soft Delete)' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};