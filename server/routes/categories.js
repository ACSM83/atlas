import express from 'express';
import { createCategory, getCategories, getCategory, deleteCategory, updateCategory } from '../controllers/categories.js';

const router = express.Router();

//porque especificamos o /categories no index.js aqui não precisamos de escrever /categories pois neste ponto a rota já tem /router
router.get('/', getCategories);

router.post('/', createCategory);

router.get('/:id', getCategory);

router.delete('/:id', deleteCategory);

router.patch('/:id', updateCategory)

export default router;