import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controller/productController.js";
import multer from 'multer';
const upload = multer({dest: 'uploads/'})


const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.post('/', protect, admin, upload.single('image'), createProduct);
productRouter.get('/:id', getProductById);
productRouter.put('/:id', protect, admin,  upload.single('image'), updateProduct);
productRouter.delete('/:id', protect, admin, deleteProduct);

export default productRouter;
