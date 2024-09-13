const express = require('express');
const router = express.Router();

const data = require("../midwares/readMaterialData");
require('dotenv').config();

const groupName = {
    "classic": "КЛАССИКА",
    "profi": "ПРОФИ",
    "original": "ОРИГИНАЛЬНЫЕ",
    "sanitizing": "САНИРУЮЩИЕ",
    "masonry": "КЛАДОЧНЫЕ",
    "repair": "РЕМСОСТАВЫ",
}

const searchParameter = {"fraction": "фракция - ", "hardness": "прочность на сжатие - ", "filler": "вяжущее - ", "adding": "добавка -"}


router.get("/", (req, res) => {
    res.render("index", {
        material: data.getMaterialData(),
        currentYear: data.date});
})

router.get("/group/:group", (req, res) => {
    res.render("group", {
        material: data.getMaterialData(),
        groupItems: data.getGroupData(groupName[req.params.group]),
        currentYear: data.date,
        title: `ARDECO ${groupName[req.params.group]}`});
})

router.get("/search", (req, res) => {

    res.render("search", {
        material: data.getMaterialData(),
        group: data.materialSearch(req.query),
        currentYear: data.date,
        title: `${searchParameter[req.query.parameter]} ${req.query.value.replace("_", " ")}`});
})

router.get("/contact", (req, res) => {
    res.render("contact", {
        material: data.getMaterialData(),
        currentYear: data.date,
        title: "КОНТАКТЫ"});
})

router.get("/trademark", (req, res) => {
    res.render("trademark", {
        material: data.getMaterialData(),
        currentYear: data.date,
        title: "ТОРГОВЫЙ ЗНАК"});
})


module.exports = router;