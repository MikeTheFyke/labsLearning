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

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))