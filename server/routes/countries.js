import express from 'express';
import { createCountry, getCountries, getCountry, deleteCountry, updateCountry } from '../controllers/countries.js';

const router = express.Router();

//porque especificamos o /countries no index.js aqui não precisamos de escrever /countries pois neste ponto a rota já tem /router
router.get('/', getCountries);

router.post('/', createCountry);

router.get('/:id', getCountry);

router.delete('/:id', deleteCountry);

router.patch('/:id', updateCountry)

export default router;