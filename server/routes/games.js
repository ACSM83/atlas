import express from 'express';
import { createGame, getGames, getGame, deleteGame, updateGame } from '../controllers/games.js';

const router = express.Router();

//porque especificamos o /games no index.js aqui não precisamos de escrever /games pois neste ponto a rota já tem /router
router.get('/', getGames);

router.post('/', createGame);

router.get('/:id', getGame);

router.delete('/:id', deleteGame);

router.patch('/:id', updateGame)

export default router;