const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const db = require("./app/models");
const Role = db.role; /*
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
*/
db.sequelize.sync();

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}

var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Pharmax." });
});
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
// require("./app/routes/categorie.routes")(app);
require("./app/routes/certif.routes")(app);
require("./app/routes/docteur.routes")(app);
require("./app/routes/medicament.routes")(app);
// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
