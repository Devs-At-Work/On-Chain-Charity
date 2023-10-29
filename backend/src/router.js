import { Router } from "express";
import { body } from "express-validator";

const router = Router();

router.use((err,req,res,next)=>{
    console.error(err);
})

export default router