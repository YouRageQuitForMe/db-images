require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const routes = require("./routes/routes");
app.use(routes);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`The server started on port: ${port}`)
})