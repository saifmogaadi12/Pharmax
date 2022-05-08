const rendezvous = require("../controllers/rendez-vous.controller.js");
module.exports = app => {
  const rendezvous = require("../controllers/rendez-vous.controller.js");

  var router = require("express").Router();

  router.post("/", rendezvous.create);

  router.get("/find/:name", rendezvous.findSubject);

  router.get("/find2/:route", rendezvous.findRut);

  router.get("/find3/:status", rendezvous.findStatus);

  router.get("/", rendezvous.findAll);


  router.get("/published", rendezvous.findAllPublished);

  router.get("/:id", rendezvous.findOne);

  router.put("/:id", rendezvous.update);

  router.delete("/:id", rendezvous.delete);

  router.delete("/", rendezvous.deleteAll);

  app.use("/api/rendezvous", router);
};
