require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const jwt = require("express-jwt")
const routes = require("./api/routes");
const authRoutes = require("./api/routes/auth.routes");
const db = require("./api/models");

const PORT = process.env.PORT || 3001;
const app = express();

// const jwt = require("express-jwt")
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});
app.use("/auth", authRoutes);
app.get("/api", auth, routes);



 // STATIC ASSETS WHEN PUSHED TO HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


// HTML REQUEST LOGGER
app.use(morgan("dev"))

// BODY PARSER FOR AJAX REQEUESTS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // STATIC ASSETS WHEN PUSHED TO HEROKU
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });
// // SEND EVERY REQUEST TO REACT APP
// app.use("/auth", authRoutes);
// app.use(auth);
// app.use("/api", routes);




// CHANGE TO FORCE:TRUE BEFORE DEPLOYING
db.Sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log(`Listening to ${PORT}`);
    });
});