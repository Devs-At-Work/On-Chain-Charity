import prisma from "../configs/db.js";

// GET all campaigns
export const getAllUserCampaigns = async (req, res) => {
    try {
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
    } catch (err) {
        console.log('Error getting user campaigns: ', err);
        return res.status(500).json({
            error: 'Internal server error.'
        });
    }
}

export const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await prisma.campaign.findMany({
            include: {
                belongsTo: true
            }
        })

        res.json({
            data: campaigns
        })
    } catch (err) {
        console.log('Error getting campaigns: ', err);
        return res.status(500).json({
            error: 'Internal server error.'
        });
    }
}

// GET campaign by id
export const getCampaign = async (req, res) => {
    try {
        const campaign = await prisma.campaign.findFirst({
            where: {
                id: req.params.id,
                belongsToID: req.user.id
            }
        })

        res.json({
            data: campaign
        })
    } catch (err) {
        console.log('Error getting campaign: ', err);
        return res.status(500).json({
            error: 'Internal server error.'
        });
    }
}

// POST a new campaign
export const createCampaign = async (req, res) => {
    try {
        const campaign = await prisma.campaign.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                belongsToID: req.user.id,
                deadline: req.body.deadline,
                domain: req.body.domain,
                location: req.body.location,
                donationRequired: req.body.donationRequired,
                peopleInvolved: req.body.peopleInvolved,
            }
        })

        res.json({
            data: campaign
        })
    } catch (err) {
        console.log('Error creating campaign: ', err);
        return res.status(500).json({
            error: 'Internal server error.'
        });
    }
}

// PUT updated data in a existing campaign
export const updateCampaign = async (req, res) => {

    try {
        const isCreator = await prisma.campaign.count({
            where: {
                id: req.params.id,
                belongsToID: req.user.id
            },
        });

        if (isCreator == 0) {
            return res.status(403).json({
                error: 'Permission denied. User not the cretor of the campaign.'
            });
        }

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
                belongsToID: req.user.id,
                deadline: req.body.deadline,
                domain: req.body.domain,
                location: req.body.location,
                donationRequired: req.body.donationRequired,
                peopleInvolved: req.body.peopleInvolved,
            }
        })

        res.json({
            data: updated
        })
    }
    catch (err) {
        console.log('Error updating campaign: ', err);
        return res.status(500).json({
            error: 'Internal server error.'
        });
    }
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