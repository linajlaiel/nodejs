const express = require("express");
const { Vehicule } = require("../db/models/index");

const router = express.Router();

router.get("/vehicules", function (req, res) {
  Vehicule.findAll({
    where: req.query,
  }).then((data) => {
    res.json(data);
  });
});

router.get("/vehicules/:id", function (req, res) {
  const id = req.params.id;

  Vehicule.findByPk(id).then((data) => {
    if (data) res.json(data);
    else res.sendStatus(404);
  });
});

router.delete("/vehicules/:id", function (req, res) {
  const id = req.params.id;

  Vehicule.destroy({
    where: {
      id,
    },
  }).then((data) => {
    if (data) res.sendStatus(204);
    else res.sendStatus(404);
  });
});

router.post("/vehicules", function (req, res) {
  Vehicule.create(req.body).then((data) => res.status(201).json(data));
});

router.put("/vehicules/:id", function (req, res) {
  const id = req.params.id;

  Vehicule.update(req.body, { where: { id } }).then(([nbUpdated]) => {
    if (nbUpdated === 0) res.sendStatus(404);
    else
      Vehicule.findByPk(id).then((data) => {
        res.json(data);
      });
  });
});

module.exports = router;
