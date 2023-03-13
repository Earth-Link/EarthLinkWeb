const express = require("express");
const UserController = require("../controllers/UserController");

const UserRouter = express.Router();

//SIGNING UP
UserRouter.post("/signup", UserController.createUser, (req, res, next) => {
  console.log("in signup router");
  res.status(200).send(res.locals.user);
});

//LOGGING IN
UserRouter.post("/login", UserController.loginUser, (req, res, next) => {
  console.log("in login router");
  res.status(200).send(res.locals.user);
});

//LOGGING OUT?

//GET SCORE
UserRouter.get(
  "/getscore/:email",
  UserController.getScore,
  (req, res, next) => {
    console.log("in getScore router");
    res.status(200).json({totalScore : res.locals.score});
  }
);

// UPDATE SCORE
UserRouter.post(
  "/updatescore/",
  UserController.updateScore,
  (req, res, next) => {
    console.log("in updateScore router");
    res.status(200).json({totalScore : res.locals.score});
  }
);

module.exports = UserRouter;
