require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const routes = require("./routes/routes");
app.use(routes);

const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSW}@images.eu8jo.mongodb.net/images?retryWrites=true&w=majority`)
    .then(() => {console.log("connected to db")})
    .catch((err) => console.log(err))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`The server started on port: ${port}`)
})