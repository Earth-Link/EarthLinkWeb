const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

//HANDLE PARSING REQUEST BODIES
app.use(express.json());

app.use(cors());

//ROUTES FOR OUR APP
const UserRouter = require("./routes/UserRouter");
app.use("/user", UserRouter);

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
