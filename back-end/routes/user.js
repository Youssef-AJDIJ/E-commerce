import express from 'express';
import { getUsers, updateUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

// router.post('/', createUser);      // POST /api/users
router.get('/', getUsers);        // GET /api/users
router.put('/:id', updateUser);   // PUT /api/users/1
router.delete('/:id', deleteUser); // DELETE /api/users/1

export default router;