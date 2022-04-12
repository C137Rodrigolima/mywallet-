import connection from "../database";


export async function insertFinancialEvent(user, value, type){
    return connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [user.id, value, type]
    );
}

export async function selectAllFinancialEvents(user){
    return connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [user.id]
    );
}

export async function selectFinancialMontante(user){
    return connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [user.id]
    );
}

export {
    insertFinancialEvent,
    selectAllFinancialEvents,
    selectFinancialMontante
};