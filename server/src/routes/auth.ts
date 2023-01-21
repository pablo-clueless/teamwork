import { Router } from "express";
import { controllerHandler } from "../common/middlewares/controllerHandler";
import { signInSchema } from "../common/validations";



const router = Router();


router.post("/signIn", controllerHandler(signIn, signInSchema));