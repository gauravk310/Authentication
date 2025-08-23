import { Router } from "express";
import signup from "../Controllers/signupController.js";
import login from "../Controllers/loginController.js";
import signupValidater from '../Validators/signupValidation.js'
import loginValidation from '../Validators/loginValidation.js'

const router = Router();

router.post('/login',loginValidation,login)
router.post('/signup',signupValidater,signup);

export default router;