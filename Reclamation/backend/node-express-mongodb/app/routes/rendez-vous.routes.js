module.exports = app => {
  const rendezvous = require("../controllers/rendez-vous.controller.js");

  var router = require("express").Router();

  router.post("/", rendezvous.create);

  router.get("/", rendezvous.findAll);

  router.get("/published", rendezvous.findAllPublished);

  router.get("/:id", rendezvous.findOne);

  router.put("/:id", rendezvous.update);

  router.delete("/:id", rendezvous.delete);

  router.delete("/", rendezvous.deleteAll);

  app.use("/api/rendezvous", router);
};
