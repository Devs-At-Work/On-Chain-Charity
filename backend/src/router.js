import { Router } from "express";
import { body } from "express-validator";

const router = Router();

// Routes for projects

router.get('/project', )

router.get('/project/:id',)

router.post('/project', )

router.put('/project/:id', )

router.delete('/project/:id', )

router.use((err,req,res,next)=>{
    console.error(err);
})

export default router