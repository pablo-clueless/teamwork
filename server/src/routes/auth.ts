import { Router } from "express";
import { controllerHandler } from "../common/middlewares/controllerHandler";
import { signInSchema } from "../common/validations";
import { signIn } from "../controllers/users/userSignIn";



const router = Router();


router.post("/signIn", controllerHandler(signIn, signInSchema));