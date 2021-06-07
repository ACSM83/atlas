import express from 'express';
import { createRegion, getRegions, getRegion, deleteRegion, updateRegion } from '../controllers/regions.js';

const router = express.Router();

//porque especificamos o /applications no index.js aqui não precisamos de escrever /applications pois neste ponto a rota já tem /router
router.get('/', getRegions);

router.post('/', createRegion);

router.get('/:id', getRegion);

router.delete('/:id', deleteRegion);

router.patch('/:id', updateRegion)

export default router;