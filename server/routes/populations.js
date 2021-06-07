import express from 'express';
import { createPopulation, getPopulations, getPopulation, deletePopulation, updatePopulation } from '../controllers/populations.js';

const router = express.Router();

//porque especificamos o /applications no index.js aqui não precisamos de escrever /applications pois neste ponto a rota já tem /router
router.get('/', getPopulations);

router.post('/', createPopulation);

router.get('/:id', getPopulation);

router.delete('/:id', deletePopulation);

router.patch('/:id', updatePopulation)

export default router;