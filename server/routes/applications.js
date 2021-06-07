import express from 'express';
import { createApplication, getApplications, getApplication, deleteApplication, updateApplication } from '../controllers/applications.js';

const router = express.Router();

//porque especificamos o /applications no index.js aqui não precisamos de escrever /applications pois neste ponto a rota já tem /router
router.get('/', getApplications);

router.post('/', createApplication);

router.get('/:id', getApplication);

router.delete('/:id', deleteApplication);

router.patch('/:id', updateApplication)

export default router;