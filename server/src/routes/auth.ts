import { Router } from "express";
import { controllerHandler } from "../common/middlewares/controllerHandler";
import { signInSchema } from "../common/validations";
import { signUp } from "../controllers/users/userSignIn";



const router = Router();


router.post("/signUp", controllerHandler(signUp, signInSchema));
