import connection from "./database.js";

export async function findByEmail(email){
    return connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );
}

export async function insertNewUser(name, email, password){
    return connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, password]
    );
}

export {
    findByEmail,
    insertNewUser
};