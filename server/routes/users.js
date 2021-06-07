import express from 'express';
import { getUsers, getUser, deleteUser, loginUser } from '../controllers/users.js';

const router = express.Router();

//porque especificamos o /users no index.js aqui não precisamos de escrever /users pois neste ponto a rota já tem /router
router.get('/', getUsers);

/*router.post('/', createUser);*/

router.post('/', loginUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

/*router.patch('/:id', updateUser)*/

export default router;