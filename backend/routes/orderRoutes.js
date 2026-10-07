import {Router} from 'express'
import {admin} from '../middleware/adminMiddleware.js'
import {protect } from '../middleware/authMiddleware.js'
import {addOrderItems, getMyOrders, getOrders, updateOrderStatus } from '../controller/orderController.js'

const productRouter = Router();

productRouter.post('/', protect, addOrderItems);
productRouter.get('/', protect, admin, getOrders);
productRouter.get('/myorders', protect, getMyOrders);
productRouter.put('/:id/status', protect, admin, updateOrderStatus);

export default productRouter;