//IMPORT DATABASE
const db = require("../../database/database");

const UserController = {};

//MIDDLEWARE TO CREATE USER AT SIGN UP
//QUERY DATABASE AND CHECK IF USERNAME EXISTS
//CREATES NEW USER IN DATABASE
UserController.createUser = (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  console.log("in signup middleware");
  const queryStr =
    "INSERT INTO user (email, password, firstname, lastname) VALUES (?,?,?,?)";
  try {
    console.log('here 1')
    db.query(
      queryStr,
      [email, password, firstName, lastName],
      (err, results) => {
        //IF DOESNT CONNECT TO DATABASE
        if (err) {
          return next({
            log: "Express error handler caught signup middleware error",
            status: 400,
            message: { err: err },
          });
          //IF CONNECTS TO DATA BASE
        } else {
          console.log('here 2')
          const queryStr =
            "SELECT * FROM user WHERE email = (?) AND password = (?)";
          db.query(queryStr, [email, password], (err, results) => {
            if (err) {
              return next({
                log: "Express error handler caught signup db middleware error",
                status: 400,
                message: { err: err },
              });
            }
            if (results[0]) {
              console.log('here 3')
              const { email, password, firstname, lastname, profile_picture } =
                results[0];
              res.locals.user = {
                email,
                password,
                firstname,
                lastname,
                profile_picture,
              };
              return next();
            } else {
              return next({
                log: "Express error handler caught signup db middleware error",
                status: 400,
                message: { err: err },
              });
            }
          });
        }
      }
    );
    //IF QUERY FAILS
  } catch (e) {
    return next({
      log: "Express error handler caught signup middleware error",
      status: 400,
      message: { err: e },
    });
  }
};

//MIDDLEWARE TO LOGIN A USER, WILL QUERY THE DATABASE AND CHECK IF THE USER HAS AN EXISTING ACCOUNT.
UserController.loginUser = (req, res, next) => {
  const { email, password } = req.body;
  console.log("in login middleware", req.body);
  const queryStr = "SELECT * FROM user WHERE email = (?) AND password = (?) ";
  try {
    db.query(queryStr, [email, password], (err, results) => {
      //IF DOESNT CONNECT TO DATEBASE
      if (err) {
        return next({
          log: "Express error handler caught login db middleware error",
          status: 400,
          message: { err: err },
        });
        //IF QUERY CONNECTS TO DATABASE
      } else {
        // IF FOUND LOG IN
        if (results[0]) {
          console.log("match found");
          const { email, password, firstname, lastname, profile_picture } =
            results[0];
          res.locals.user = {
            email,
            password,
            firstname,
            lastname,
            profile_picture
          };
          return next();
        }
      }
      //IF NO RESULTS FOUND aka NO USER MATCH
      return next({
        log: "Express error handler caught userNotFound middleware error",
        status: 400,
        message: { err: "an error occured" },
      });
    });
    //IF QUERY FAILS
  } catch (e) {
    return next({
      log: "Express error handler caught login middleware error",
      status: 400,
      message: { err: e },
    });
  }
};

UserController.getScore = (req, res, next) => {
  console.log("REQ PARAMS: ", req.params);
  const { email } = req.params;
  const queryStr = "SELECT points FROM user WHERE email = ?";
  try {
    db.query(queryStr, [email], (err, results) => {
      //IF DOESNT CONNECT TO DATABASE
      if (err) {
        return next({
          log: "Express error handler caught getScore db middleware error",
          status: 400,
          message: { err: err },
        });
        //IF CONNECTS TO DATABASE AND QUERY SUCCEEDS
      } else {
        console.log('received getScore request')
        if (results[0]) {
          //do we need email back?
          const { email, points } = results[0];
          res.locals.score = { points };
          return next();
        }
      }
      //IF NO RESULT FOUND FROM QUERY
      return next({
        log: "Express error handler caught getScore middleware error",
        status: 400,
        message: { err: "an error occured" },
      });
    });
    //IF QUERY FAILS
  } catch (e) {
    return next({
      log: "Express error handler caught signup middleware error",
      status: 400,
      message: { err: e },
    });
  }
};

//UPDATE SCORE
UserController.updateScore = (req, res, next) => {
  const { email, score } = req.body.data;
  console.log("UPDATING SCORE - REQ BODY", req.body.data);
  const queryStr = "UPDATE user SET points = points + ? WHERE email = ? ";
  try {
    db.query(queryStr, [score, email], (err, results) => {
      //IF DOESNT CONNECT TO DATEBASE
      console.log('in here')
      if (err) {
        return next({
          log: "Express error handler caught 1st updateScore db middleware error",
          status: 400,
          message: { err: err },
        });
        //IF QUERY CONNECTS TO DATABASE
      } else {
        // IF FOUND USER
        console.log(results)
        //SELECT AND FIND UPDATED DATA
      //IF NO RESULTS FOUND aka NO USER MATCH
      return next();
    }});
    //IF QUERY FAILS
  } catch (e) {
    return next({
      log: "Express error handler caught updateScore middleware error",
      status: 400,
      message: { err: e },
    });
  }
};

module.exports = UserController;
