
const data = require("../midwares/readMaterialData");

const express = require("express");
const router = express.Router();

router.get("/stonesubst", (req, res) => {
    res.render("repair/stonesubst", {
                                                    material: data.getMaterialData(),
                                                    currentYear: data.date,
                                                    title: "ARDECO РЕМСОСТАВ КАМНЕЗАМЕНИТЕЛЬ"});
});

router.get("/seam", (req, res) => {
    res.render("repair/seam", {
                                                    material: data.getMaterialData(),
                                                    currentYear: data.date,
                                                    title: "ARDECO РЕМОСОТАВ ШОВНЫЙ"});
});

module.exports = router;