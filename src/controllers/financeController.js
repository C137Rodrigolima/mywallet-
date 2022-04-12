import * as financeServices from "../services/financeServices.js"

export async function postFinancialEventasync (req, res) {
    const { user } = res.local;
    const { value, type } = req.body;

    if (!value || !type) {
        return res.sendStatus(422);
    }

    try{
    const result = await financeServices.insertFinancialEvent({user, value, type});
    if(!result) {
        return res.sendStatus(422);
    }

    res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export async function getAllFinancialEvents(req, res) {
    const { user } = res.locals;
    try {
        const result = await financeServices.seachAllFinancialEvents(user);

        res.send(result);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};
export async function getFinanceMontante(req, res) {
    const { user } = res.local;
    try {
        const result = await financeServices.seachFinanceMontante(user);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};