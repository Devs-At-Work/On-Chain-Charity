import { validationResult } from "express-validator";

export const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
        const error = new Error('Bad request');
        error.type = 'input';
        next(error);
        return
    } else {
        next();
    }
}
