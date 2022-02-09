import express from "express";
import { addUser, getUserById, getUsers, editUser, deleteUser } from '../controller/userController.js';

const Routes = express.Router();





Routes.get('/', getUsers);

Routes.post('/add', addUser);

Routes.get('/:id', getUserById);

Routes.put('/:id', editUser);

Routes.delete('/:id', deleteUser);

export default Routes;