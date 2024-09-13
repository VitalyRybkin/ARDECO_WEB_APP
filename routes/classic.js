const data = require("../midwares/readMaterialData");

const express = require("express");
const router = express.Router();

router.get("/hard-grained", (req, res) => {
    res.render("classic/hard-grained", {
                                                        material: data.getMaterialData(),
                                                        currentYear: data.date,
                                                        title: "ARDECO КЛАССИКА КРУПНОЗЕРНИСТАЯ"});
})

router.get("/fine-grained", (req, res) => {
    res.render("classic/fine-grained", {
                                                        material: data.getMaterialData(),
                                                        currentYear: data.date,
                                                        title: "ARDECO КЛАССИКА МЕЛКОЗЕРНИСТАЯ"});
})

router.get("/classic-base", (req, res) => {
    res.render("classic/classic-base", {
                                                        material: data.getMaterialData(),
                                                        currentYear: data.date,
                                                        title: "ARDECO КЛАССИКА БАЗОВАЯ"});
})

router.get("/classic-finishing", (req, res) => {
    res.render("classic/classic-finishing", {
                                                        material: data.getMaterialData(),
                                                        currentYear: data.date,
                                                        title: "ARDECO КЛАССИКА ФИНИШНАЯ"});
})

router.get("/profile", (req, res) => {
    res.render("classic/profile", {
                                                        material: data.getMaterialData(),
                                                        currentYear: data.date,
                                                        title: "ARDECO КЛАССИКА ПРОФИЛЬНАЯ"});
})

module.exports = router;