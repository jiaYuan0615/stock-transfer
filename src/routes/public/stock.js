import { Router } from 'express';
import StockController from '../../controllers/stock';

const router = Router();

router.get('/', StockController.getStock);

export default router;
