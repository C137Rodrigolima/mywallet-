import * as authServices from "../services/authServices.js"

export async function registerUser (req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.sendStatus(422);
        }

        const existingUsers = await authServices.findByEmail({email});

        // if (existingUsers.rowCount > 0) {
        //     return res.sendStatus(409);
        // }
        if (existingUsers.rowCount === null) {
            return res.sendStatus(409);
        }

        const userCreated = 
        await authServices.createUser({name, email, password});

        if (userCreated === null) {
            return res.sendStatus(422);
        }

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

app.post("/sign-in", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.sendStatus(422);
        }

        const token = authServices.loginUser({email, password});

        res.send({
            token
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});