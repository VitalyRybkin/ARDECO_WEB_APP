const data = require("../midwares/readMaterialData");

const express = require("express");
const router = express.Router();

router.get("/sanitizing", (req,res) => {
    res.render("sanitize/sanitizing", {
                                                    material: data.getMaterialData(),
                                                    currentYear: data.date,
                                                    title: "ARDECO САНИРУЮЩАЯ" });
})

router.get("/covering", (req,res) => {
    res.render("sanitize/covering", {
                                                    material: data.getMaterialData(),
                                                    currentYear: data.date,
                                                    title: "ARDECO САНИРУЮЩАЯ НАКРЫВОЧНАЯ" });
})

module.exports = router;