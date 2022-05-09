const reclamation = require("../controllers/reclamation.controller.js");
module.exports = app => {
  const reclamation = require("../controllers/reclamation.controller.js");

  var router = require("express").Router();

  router.post("/", reclamation.create);

  router.get("/find/:name", reclamation.findSubject);

  router.get("/find2/:route", reclamation.findRut);

  router.get("/find3/:status", reclamation.findStatus);

  router.get("/", reclamation.findAll);


  router.get("/published", reclamation.findAllPublished);

  router.get("/:id", reclamation.findOne);

  router.put("/:id", reclamation.update);

  router.delete("/:id", reclamation.delete);

  router.delete("/", reclamation.deleteAll);

  app.use("/api/reclamation", router);
};
