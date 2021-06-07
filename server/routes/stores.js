import express from 'express';
import { createStore, getStores, getStore, deleteStore, updateStore } from '../controllers/stores.js';

const router = express.Router();

//porque especificamos o /applications no index.js aqui não precisamos de escrever /applications pois neste ponto a rota já tem /router
router.get('/', getStores);

router.post('/', createStore);

router.get('/:id', getStore);

router.delete('/:id', deleteStore);

router.patch('/:id', updateStore)

export default router;