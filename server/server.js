const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

//CONNECTING TO OUR DATABASE

const db = mysql.createConnection({
  host: "earthlink-1.ctjtolagqnxt.us-east-2.rds.amazonaws.com",
  user: "earthlink",
  password: "123123123",
});

db.connect((err) => {
  if (err){
    console.log('db connect fail', err);
  } else {
    console.log('db connected!');
  }
});

//ROUTES FOR OUR APP
const UserRouter = require("./routes/UserRouter");
app.use("/user", UserRouter);

//HANDLE PARSING REQUEST BODIES
app.use(express.json());

//JUST A TEST ROUTE
app.get("/test", (req, res, next) => {
  console.log("in backend");
  res.status(200).send("COMPLETE");
});

//GLOBAL ERROR HANDLING
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//STARTING THE BACKEND SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
