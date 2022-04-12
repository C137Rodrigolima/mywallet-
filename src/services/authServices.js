import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepositories from "../repositories/authRepositories.js";

export async function findByEmail({email}){
    const existingUsers = authRepositories.findByEmail({email});

    if (existingUsers.rowCount > 0) {
        return null;
    }
    return existingUsers.rowCount;
}

export async function createUser({name, email, password}){
    const hashedPassword = bcrypt.hashSync(password, 12);
    return authRepositories.insertNewUser({
        name, 
        email, 
        password: hashedPassword
    });
}

export async function loginUser({email, password}){
    const { rows } = authRepositories.findByEmail({email});
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.sendStatus(401);
    }

    return jwt.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET
    );
}

export {
    findByEmail,
    createUser
}