import { createNewUser } from "../user.js";

describe('user hanlder', () => {
    it('should create a new user', async () => {
        const req = {
            body: {
                username: 'test',
                password: 'test1234',
                email: 'test@abc.com',
            }
        }
        const res = {
            json({ token }) {
                console.log(token)
                expect(token).toBeTruthy()
            }
        }

        await createNewUser(req, res, () => { });
    });
});