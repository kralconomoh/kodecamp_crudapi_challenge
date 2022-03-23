const User = require("../models/User");

const router = require("express").Router();

router.post("/register", (req, res, next) => {
  const { name, age } = req.body;
  const user = new User({
    name,
    age,
  });

  user
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/addmessage", (req, res, next) => {
  const { name,message } = req.body;


  User.findOneAndUpdate({ name }, { message }, { new: true })
    .then((data) => {
      if (data) {
        res.status(201).json(data);
      }
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;
