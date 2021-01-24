const express = require("express");
const { Owner } = require("../db/models/index");

const router = express.Router();

router.get("/owner", function (req, res) {
  Owner.findAll({
    where: req.query,
  }).then((data) => {
    res.json(data);
  });
});

router.get("/owner/:id", function (req, res) {
  const id = req.params.id;

  Owner.findByPk(id).then((data) => {
    if (data) res.json(data);
    else res.sendStatus(404);
  });
});

router.delete("/owner/:id", function (req, res) {
  const id = req.params.id;

  Owner.destroy({
    where: {
      id,
    },
  }).then((data) => {
    if (data) res.sendStatus(204);
    else res.sendStatus(404);
  });
});

router.post("/owner", function (req, res) {
  Owner.create(req.body).then((data) => res.status(201).json(data));
});

router.put("/owner/:id", function (req, res) {
  const id = req.params.id;

  Owner.update(req.body, { where: { id } }).then(([nbUpdated]) => {
    if (nbUpdated === 0) res.sendStatus(404);
    else
      Owner.findByPk(id).then((data) => {
        res.json(data);
      });
  });
});

module.exports = router;
