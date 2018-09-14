const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

// BODY PARSER FOR AJAX REQEUESTS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC ASSETS WHEN PUSHED TO HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// SEND EVERY REQUEST TO REACT APP
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ROUTING FOR API
app.use(routes);

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log(`Listening to ${PORT}`);
    });
});