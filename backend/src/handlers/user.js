import prisma from '../configs/db.js';
import { comparePassword, hashPassword, createJWT } from '../modules/auth.js';

export const createNewUser = async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                username: req.body.username,
                email: req.body.email,
                password: await hashPassword(req.body.password)
            }
        })

        const token = createJWT(user);
        res.json({
            token: token,
        })

    } catch (error) {
        console.error(error);
        error.type = 'input';
        next(error);
    }
}

export const sigin = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })

    const isValid = await comparePassword(req.body.password, user.password);

    if (!isValid) {
        res.status(401).json({
            message: 'not authorized'
        })
        return
    }

    const token = createJWT(user);
    res.json({
        token: token,
    })
}