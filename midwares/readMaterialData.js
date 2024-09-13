const fs = require("fs");


const date = new Date().getFullYear();

exports.getMaterialData = () => {
    try {
        return JSON.parse(fs.readFileSync('./model/material.json', 'utf8'));
    } catch (e) {
        console.log(e);
    }
}
exports.getGroupData = (groupName) => {
    try {
        let materialData = JSON.parse(fs.readFileSync('./model/material.json', 'utf8'));
        return materialData[groupName].materials;
    } catch (e) {
        console.log(e);
    }
}

exports.materialSearch = (query) => {
    const parameter = query.parameter;
    const value = query.value;

    const materialData = this.getMaterialData();
    let materialsFound = {};

    for (let group in materialData) {
        for (let material in materialData[group].materials) {
            if (materialData[group].materials[material][parameter] === value)
                materialsFound[material] = materialData[group].materials[material];
        }
    }
    return materialsFound;
}

exports.date = date;
