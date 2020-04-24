const express = require("express");
const db = require("../dbConfig");

const router = express.Router();

router.get("/:id", async (req, res, next) => {

    try {
        const accounts = await db("accounts").where("id", req.params.id).first();
        res.json(accounts);
    } catch (error) {
        next(error)
    }

})

router.get("/", async (req, res, next) => {

    try {
        const accounts = await db.select("*").from("accounts");
        res.json(accounts);
    } catch (error) {
        next(error);
    }

})

router.post("/", async (req, res, next) => {

    try {
        const payload = {

            name: req.body.name,
            budget: req.body.budget
            // need to figure out how to push the payloads to this thing
        }

        const [id] = await db("accounts").insert(payload);
        const account = await db("accounts").where("id", id).first();

        res.json(account);

    } catch (error) {
        next(error)
    }

})

router.delete("/:id", async (req, res, next) => {

    try {

        await db("accounts").where("id", req.params.id).del()
        res.status(204).end();

    } catch (error) {
        next(error);
    }

})

router.put("/:id", async (req, res, next) => {

    try {
        const payload = {

            name: req.body.name,
            budget: req.body.budget
            // need to figure out how to push the payloads to this thing
        }

        await db("accounts").where("id", req.params.id).update(payload);
        const accountMessage = await db("accounts").where(id, req.params.id);

        res.json(accountMessage);

    } catch (error) {
        next(error);
    }

})

module.exports = router;