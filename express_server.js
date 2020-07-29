const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use('/public', express.static('public'));

// app.get('/', (req, res) => res.send('Hello World!'))

/// Index (Home) Route
app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/week1", (req, res) => {
    res.render("week1");
});

app.get("/week2", (req, res) => {
    res.render("week2");
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))