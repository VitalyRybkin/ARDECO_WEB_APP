const data = require("../midwares/readMaterialData");

const express = require("express");
const router = express.Router();

router.get("/mortar", (req,res) => {
    res.render("masonry/mortar", {
                                                material: data.getMaterialData(),
                                                currentYear: data.date,
                                                title: "ARDECO БЛОК" });
})

module.exports = router;