const db = require("../models");
const Reclamation = db.reclamation;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

    const reclamation = new Reclamation({
      route: req.body.route,
      name: req.body.name,
      surname: req.body.surname,
      subject: req.body.subject,
      claimText: req.body.claimText,
      date: req.body.date,
      status: req.body.status,
      responses: req.body.responses
  });

    reclamation
    .save(reclamation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Reclamation."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.name;
  var condition = title ? { title: { $regex: new RegExp(name), $options: "i" } } : {};

  Reclamation.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reclamation."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Reclamation.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Reclamation with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Reclamation with id=" + id });
    });
};

exports.findSubject = (req, res) => {
  const name = req.params.name;
  console.log(name);

  Reclamation.find({subject:  { $regex: new RegExp(name), $options: "i" }})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found  " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving " + name });
    });
};

exports.findRut = (req, res) => {
  const name = req.params.route;
  console.log(name);

  Reclamation.find({route:  { $regex: new RegExp(name), $options: "i" }})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found  " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving " + name });
    });
};
exports.findStatus = (req, res) => {
  const name = req.params.status;
  console.log(name);

  Reclamation.find({status:  { $regex: new RegExp(name), $options: "i" }})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found  " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving " + name });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Reclamation.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Reclamation with id=${id}. Maybe Reclamation was not found!`
        });
      } else res.send({ message: "Reclamation was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Reclamation with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Reclamation.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Reclamation  with id=${id}. Maybe Reclamation was not found!`
        });
      } else {
        res.send({
          message: "Reclamation  was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Reclamation with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Reclamation.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Reclamation were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Reclamation."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Reclamation.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Reclamation."
      });
    });
};
