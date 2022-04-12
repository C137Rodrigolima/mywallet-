import * as financeRepositories from "../repositories/financeRepositories.js";

export async function insertFinancialEvent({user, value, type}){
    const financialTypes = ["INCOME", "OUTCOME"];
    // if (!financialTypes.includes(type)) {
    //     return res.sendStatus(422);
    // }
    // if (value < 0) {
    //     return res.sendStatus(422);
    // }
    if (!financialTypes.includes(type)) {
        return null;
    }
    if (value < 0) {
        return null;
    }

    return financeRepositories.insertFinancialEvent(user, value, type);
}

export async function seachAllFinancialEvents(user){
    const events = financeRepositories.selectAllFinancialEvents(user);
    return events.rows;
}

export async function seachFinanceMontante(user){
    const events = financeRepositories.selectFinancialMontante(user);

    const sum = events.rows.reduce(
    (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
    0
    );
    return { sum };
}

export {
    insertFinancialEvent,
    seachAllFinancialEvents,
    seachFinanceMontante
}