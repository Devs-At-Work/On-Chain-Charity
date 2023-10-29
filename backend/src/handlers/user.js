import prisma from '../configs/db.js';
import { comparePassword, hashPassword, createJWT } from '../modules/auth.js';
import { validationResult } from 'express-validator';



export const createNewUser = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        try {
            const isUserExist = await prisma.user.findUnique({
                where: {
                    username: req.body.username,
                }
            })

            if (isUserExist) {
                return res.status(400).json({
                    message: 'User already exist'
                })
            }
        } catch (error) {
            console.error(error);
            error.type = 'input';
            next(error);
        }
        try {
            const isUserExist = await prisma.user.findUnique({
                where: {
                    username: req.body.username,
                }
            })

            if (isUserExist) {
                return res.status(400).json({
                    message: 'Try another username'
                })
            }
        } catch (error) {
            console.error(error);
            error.type = 'input';
            next(error);
        }


        try {
            const isUserExist = await prisma.user.findUnique({
                where: {
                    email: req.body.email,
                }
            })

            if (isUserExist) {
                return res.status(400).json({
                    message: 'Email already exist'
                })
            }
        } catch (error) {
            console.error(error);
            error.type = 'input';
            next(error);
        }

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
            message: 'Authenticated!'
        })

    } catch (error) {
        console.error(error);
        error.type = 'input';
        next(error);
    }
}

export const sigin = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: req.body.username
            }
        })

        if (!user) {
            return res.status(401).json({
                message: 'Authentication failed. User not found.',
            });
        }

        const isValid = await comparePassword(req.body.password, user.password);

        if (!isValid) {
            res.status(401).json({
                message: 'Authentication failed. Wrong password.'
            })
            return
        }

        const token = createJWT(user);
        res.json({
            token: token,
            message: 'user logged in'
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error',
        });
    }
}