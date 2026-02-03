import {Router} from "express"
import {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProduct,
    getProductByID
} from "../controllers/product.controller"
import { authenticate } from "../middlewares/auth.middleware"
import { upload } from "../middlewares/upload.middleware"

const router = Router()

router.post('/', authenticate, upload.single('image'), createProduct)
router.put('/:id', authenticate, upload.single('image'), updateProduct)
router.delete('/:id', authenticate, deleteProduct)
router.get('/', getAllProduct)
router.get('/:id', getProductByID)

export default router