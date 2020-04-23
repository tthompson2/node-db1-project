const express = require("express");
const db = require("../dbConfig");

const router = express.Router();

router.get("/:id", async (req, res, next) => {

    try {
        const customers = await db("customers").where("id", req.params.id).first();
        res.json(customers);
    } catch(error) {
        next(error)
    }

})

router.get("/",  async (req, res, next) => {

    try {
        const customers = await db.select("*").from("customers");
        res.json(customers);
    } catch(error) {
        next(error);
    }

})

router.post("/",  async (req, res, next) => {

    try {
        const payload = {
            // need to figure out how to push the payloads to this thing
        }
    } catch(error) {
        next(error)
    }

})

router.delete("/:id ", async (req, res, next) => {

    try {

        const payload = {
            
        }

    } catch(error) {
        next(error);
    }

})

router.put("/:id",  async (req, res, next) => {

})


module.exports = router;