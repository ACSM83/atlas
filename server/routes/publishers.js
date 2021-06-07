import express from 'express';
import { createPublisher, getPublishers, getPublisher, deletePublisher, updatePublisher } from '../controllers/publishers.js';

const router = express.Router();

//porque especificamos o /publishers no index.js aqui não precisamos de escrever /publishers pois neste ponto a rota já tem /router
router.get('/', getPublishers);

router.post('/', createPublisher);

router.get('/:id', getPublisher);

router.delete('/:id', deletePublisher);

router.patch('/:id', updatePublisher)

export default router;