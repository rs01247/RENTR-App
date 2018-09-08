const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes");
// const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

// BODY PARSER FOR AJAX REQEUESTS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC ASSETS
app.use(express.static("client/build"));

// ROUTING FOR API
// app.use(routes);


// db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log(`Listening to ${PORT}`);
    });
// });