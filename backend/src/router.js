import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware.js";
import { getAllUserCampaigns, getAllCampaigns, getCampaign, createCampaign, updateCampaign, deleteCampaign } from "./handlers/campaigns.js";

const router = Router();

// Routes for projects

router.get('/campaign', getAllUserCampaigns)

router.get('/campaign/list', getAllCampaigns)

router.get('/campaign/:id', getCampaign)

router.post('/campaign', body('name').isString(), handleInputErrors, createCampaign)

router.put('/campaign/:id', body('name').isString(), handleInputErrors, updateCampaign)

router.delete('/campaign/:id', deleteCampaign)

router.use((err, req, res, next) => {
    console.error(err);
})

export default router