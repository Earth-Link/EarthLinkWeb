//IMPORT DATABASE
const UserController = {};

//MIDDLEWARE TO CREATE USER AT SIGN UP
//QUERY DATABASE AND CHECK IF USERNAME EXISTS
//CREATES NEW USER IN DATABASE
UserController.createUser = (req, res, next) => {
    console.log('in signup middleware');
    return next();  
}

//MIDDLEWARE TO LOGIN A USER, WILL QUERY THE DATABASE AND CHECK IF THE USER HAS AN EXISTING ACCOUNT.
UserController.loginUser = (req, res, next) => {
    console.log('in login middleware');
    return next();
}

module.exports = UserController;