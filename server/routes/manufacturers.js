import express from 'express';
import { createManufacturer, getManufacturers, getManufacturer, deleteManufacturer, updateManufacturer } from '../controllers/manufacturers.js';

const router = express.Router();

//porque especificamos o /manufacturers no index.js aqui não precisamos de escrever /manufacturers pois neste ponto a rota já tem /router
router.get('/', getManufacturers);

router.post('/', createManufacturer);

router.get('/:id', getManufacturer);

router.delete('/:id', deleteManufacturer);

router.patch('/:id', updateManufacturer)

export default router;