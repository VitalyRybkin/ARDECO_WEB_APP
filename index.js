const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use('/static', express.static(__dirname + '/static'));
app.use(express.json());

const root = require("./routes/root");
app.use("/", root);

const docs = require("./routes/documentation");
app.use("/documentation/", docs);

const classic = require("./routes/classic");
app.use("/classic/", classic);

const profi = require("./routes/profi");
app.use("/profi/", profi);

const original = require("./routes/original");
app.use("/original/", original);

const sanitize = require("./routes/sanitize");
app.use("/sanitize/", sanitize);

const masonry = require("./routes/masonry");
app.use("/masonry/", masonry);

const repair = require("./routes/repair");
app.use("/repair/", repair);

app.get("*", (req, res) => {
    res.render("notfoundland")
})

const PORT = 3000
const HOST = 'localhost'

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу: ${HOST}:${PORT}`);
})
