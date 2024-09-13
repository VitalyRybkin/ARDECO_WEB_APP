const data = require("../midwares/readMaterialData");

const express = require("express");
const router = express.Router();

router.get("/original-finishing", (req,res) => {
    res.render("original/original-finishing", {
                                                            material: data.getMaterialData(),
                                                            currentYear: data.date,
                                                            title: "ARDECO ОРИГИНАЛЬНАЯ ФИНИШНАЯ" });
})

router.get("/original-base", (req,res) => {
    res.render("original/original-base", {
                                                            material: data.getMaterialData(),
                                                            currentYear: data.date,
                                                            title: "ARDECO ОРИГИНАЛЬНАЯ БАЗОВАЯ" });
})

module.exports = router;