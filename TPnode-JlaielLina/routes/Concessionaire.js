const express = require("express");
const { Concessionaire } = require("../db/models/index");

const router = express.Router();

router.get("/concessionaire", function (req, res) {
  Concessionaire.findAll({
    where: req.query,
  }).then((data) => {
    res.json(data);
  });
});

router.get("/concessionaire/:id", function (req, res) {
  const id = req.params.id;

  Concessionaire.findByPk(id).then((data) => {
    if (data) res.json(data);
    else res.sendStatus(404);
  });
});

router.delete("/concessionaire/:id", function (req, res) {
  const id = req.params.id;

  Concessionaire.destroy({
    where: {
      id,
    },
  }).then((data) => {
    if (data) res.sendStatus(204);
    else res.sendStatus(404);
  });
});

router.post("/concessionaire", function (req, res) {
  Concessionaire.create(req.body).then((data) => res.status(201).json(data));
});

router.put("/concessionaire/:id", function (req, res) {
  const id = req.params.id;

  Concessionaire.update(req.body, { where: { id } }).then(([nbUpdated]) => {
    if (nbUpdated === 0) res.sendStatus(404);
    else
    Concessionaire.findByPk(id).then((data) => {
        res.json(data);
      });
  });
});

module.exports = router;
