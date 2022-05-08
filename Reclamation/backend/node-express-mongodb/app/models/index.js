const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.reclamation = require("./reclamation.model.js")(mongoose);
db.rendezvous = require("./rendez-vous.model.js")(mongoose);
module.exports = db;
