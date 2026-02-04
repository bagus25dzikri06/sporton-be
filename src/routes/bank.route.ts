import {Router} from "express"
import {
    createBank,
    getAllBank,
    updateBank,
    deleteBank
} from "../controllers/bank.controller"
import { authenticate } from "../middlewares/auth.middleware"

const router = Router()

router.post('/', authenticate, createBank)
router.put('/:id', authenticate, updateBank)
router.delete('/:id', authenticate, deleteBank)
router.get('/', getAllBank)

export default router