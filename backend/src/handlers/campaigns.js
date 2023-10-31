import prisma from "../configs/db.js";

// GET all campaigns
export const getAllUserCampaigns = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            campaigns: true
        }
    })

    res.json({
        data: user.campaigns
    })
}

export const getAllCampaigns = async (req, res) => {
    const campaigns = await prisma.campaign.findMany({
        include: {
            belongsTo: true
        }
    })

    res.json({
        data: campaigns
    })
}

// GET campaign by id
export const getCampaign = async (req, res) => {
    const campaign = await prisma.campaign.findFirst({
        where: {
            id: req.params.id,
            belongsToID: req.user.id
        }
    })

    res.json({
        data: campaign
    })
}

// POST a new campaign
export const createCampaign = async (req, res) => {
    const campaign = await prisma.campaign.create({
        data: {
            name: req.body.name,
            description: req.body.description,
            belongsToID: req.user.id,
            deadline: req.body.deadline
        }
    })

    res.json({
        data: campaign
    })
}

// PUT updated data in a existing campaign
export const updateCampaign = async (req, res) => {
    const updated = await prisma.campaign.update({
        where: {
            id_belongsToID: {
                id: req.params.id,
                belongsToID: req.user.id
            }
        },
        data: {
            name: req.body.name,
            description: req.body.description,
            deadline: req.body.deadline
        }
    })

    res.json({
        data: updated
    })
}

// DELETE an existing campaign
export const deleteCampaign = async (req, res) => {
    const deleted = await prisma.campaign.delete({
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