const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const routes = require("./api/routes");
const db = require("./api/models");

const PORT = process.env.PORT || 3001;
const app = express();


// HTML REQUEST LOGGER
app.use(morgan("dev"))

// BODY PARSER FOR AJAX REQEUESTS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC ASSETS WHEN PUSHED TO HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ROUTING TO API FOLDER 
app.use("/api", routes);

// SEND EVERY REQUEST TO REACT APP
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// CHANGE TO FORCE:TRUE BEFORE DEPLOYING
db.Sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log(`Listening to ${PORT}`);
    });
});