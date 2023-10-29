import prisma from "../configs/db.js";

// GET all projects
export const getAllProjects = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            projects: true
        }
    })

    res.json({
        data: user.projects
    })
}

// GET project by id
export const getProject = async (req, res) => {
    const project = await prisma.project.findFirst({
        where: {
            id: req.params.id,
            belongsToID: req.user.id
        }
    })

    res.json({
        data: project
    })
}

// POST a new project
export const createProject = async (req, res) => {
    const project = await prisma.project.create({
        data: {
            name: req.body.name,
            description: req.body.description,
            belongsToID: req.user.id
        }
    })

    res.json({
        data: project
    })
}

// PUT updated data in a existing project
export const updateProject = async (req, res) => {
    const updated = await prisma.project.update({
        where: {
            id_belongsToID: {
                id: req.params.id,
                belongsToID: req.user.id
            }
        },
        data: {
            name: req.body.name,
            description: req.body.description
        }
    })

    res.json({
        data: updated
    })
}

// DELETE an existing project
export const deleteProject = async (req, res) => {
    const deleted = await prisma.project.delete({
        where: {
            id_belongsToID: {
                id: req.params.id,
                belongsToID: req.user.id
            }
        }
    })

    res.json({
        data: deleted
    })
}