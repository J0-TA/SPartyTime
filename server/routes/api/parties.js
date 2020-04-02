require('dotenv').config();

const express = require("express");
const router = express.Router();
const Party = require("../../models/Party");

router.post('/create', (req, res) => { 
    Party.create(req.body).then(createdParty => res.json(createdParty));
});

router.get("/all", (req, res, next) => {
    Party.find()
      .sort({createdAt: 1})
      .then(allParties => res.json(allParties));
  });
  
  router.get("/:id", (req, res, next) => {
    Party.findById(req.params.id)
      .then(allParties => res.json(allParties));
  });

  router.put("/:id", (req, res, next) => {
    Party.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(updatedParty =>
      res.json(updatedParty)
    );
  });

  router.delete("/:id", (req, res, next) => {
    Party.findByIdAndDelete(req.params.id).then(deletedParty =>
      res.json({ deleted: true, deletedParty })
    );
  });

module.exports = router;