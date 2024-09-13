const express = require("express");
const fs = require("fs");
const router = express.Router();
const data = require("../midwares/readMaterialData.js");

const date = new Date().getFullYear();
let materialData;

try {
    materialData = JSON.parse(fs.readFileSync('model/material.json', 'utf8'));
} catch (e) {
    console.log(e);
}

router.get("/lime-plaster-specification", (req, res) => {
    res.render("documentation/lime-plaster-specification", {
                                                                        material: data.getMaterialData(),
                                                                        currentYear: data.date,
                                                                        title: "ИЗВЕСТКОВАЯ ШТУКАТУРНАЯ ПРОГРАММА"});
})

router.get("/lime-gypsum-specification", (req, res) => {
    res.render("documentation/lime-gypsum-specification", {
                                                                        material: data.getMaterialData(),
                                                                        currentYear: data.date,
                                                                        title: "ИЗВЕСТКОВО-ГИПСОВАЯ ПРОГРАММА"});
})

router.get("/lime-hydraulic-specification", (req, res) => {
    res.render("documentation/lime-hydraulic-specification", {
                                                                        material: data.getMaterialData(),
                                                                        currentYear: data.date,
                                                                        title: "ИЗВЕСТКОВАЯ ПРОГРАММА С ГИДРАВЛИЧЕСКОЙ ДОБАВКОЙ"});
})

router.get("/sanitizing-plastering-specification", (req, res) => {
    res.render("documentation/sanitizing-plastering-specification", {
                                                                        material: data.getMaterialData(),
                                                                        currentYear: data.date,
                                                                        title: "САНИРУЮЩАЯ ПРОГРАММА"});
})

module.exports = router;