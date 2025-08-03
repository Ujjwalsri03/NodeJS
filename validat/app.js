const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.cookie("name", "Ujjwal");
    res.send("done")
})

app.listen(3000);