import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware.js";
import { getProjects, getProject, createProject, updateProject, deleteProject } from "./modules/project.js";

const router = Router();

// Routes for projects

router.get('/project', getProjects)

router.get('/project/:id', getProject)

router.post('/project', body('name').isString(), handleInputErrors, createProject)

router.put('/project/:id', body('name').isString(), handleInputErrors, updateProject)

router.delete('/project/:id', deleteProject)

router.use((err, req, res, next) => {
    console.error(err);
})

export default router