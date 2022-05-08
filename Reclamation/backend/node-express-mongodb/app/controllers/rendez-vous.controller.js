const db = require("../models");
const RendezVous = db.rendezvous;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

    const rendezvous = new RendezVous({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

    rendezvous
    .save(rendezvous)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Rendez Vous."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  RendezVous.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Rendez Vous."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  RendezVous.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Rendez Vous with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Rendez Vous with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  RendezVous.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Rendez Vous with id=${id}. Maybe Rendez Vous was not found!`
        });
      } else res.send({ message: "Rendez Vous was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Rendez Vous with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  RendezVous.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Rendez Vous  with id=${id}. Maybe Rendez Vous was not found!`
        });
      } else {
        res.send({
          message: "Rendez Vous  was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Rendez Vous with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  RendezVous.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Rendez Vous were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Rendez Vous."
      });
    });
};

exports.findAllPublished = (req, res) => {
  RendezVous.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Rendez Vous."
      });
    });
};
