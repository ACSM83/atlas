import express from 'express';
import { createSubRegion, getSubRegions, getSubRegion, deleteSubRegion, updateSubRegion } from '../controllers/subregions.js';

const router = express.Router();

//porque especificamos o /subregions no index.js aqui não precisamos de escrever /subregions pois neste ponto a rota já tem /router
router.get('/', getSubRegions);

router.post('/', createSubRegion);

router.get('/:id', getSubRegion);

router.delete('/:id', deleteSubRegion);

router.patch('/:id', updateSubRegion)

export default router;