const data = require("../midwares/readMaterialData");

const express = require("express");
const router = express.Router();

router.get("/profi-finishing", (req,res) => {
    res.render("profi/profi-finishing", {
                                                        material: data.getMaterialData(),
                                                        currentYear: data.date,
                                                        title: "ARDECO ПРОФИ ФИНИШНАЯ" });
})

router.get("/profi-base", (req,res) => {
    res.render("profi/profi-base", {
                                                        material: data.getMaterialData(),
                                                        currentYear: data.date,
                                                        title: "ARDECO ПРОФИ БАЗОВАЯ" });
})

router.get("/profi", (req,res) => {
    res.render("profi/profi", {
                                                        material: data.getMaterialData(),
                                                        currentYear: data.date,
                                                        title: "ARDECO ПРОФИ" });
})

module.exports = router;