//IMPORT DATABASE
const db = require('../../database/database');

const UserController = {};

//MIDDLEWARE TO CREATE USER AT SIGN UP
//QUERY DATABASE AND CHECK IF USERNAME EXISTS
//CREATES NEW USER IN DATABASE
UserController.createUser = (req, res, next) => {
    //const {prop1, prop2, prop3} = req.body;
    //const sqlQuery = "INSERT INTO users (email, password, firstname, lastname) VALUES (prop1, prop2, prop3, etc)"
    //db.query(sqlQuery, ()=>{ })
    console.log('in signup middleware');
    return next();  
}

//MIDDLEWARE TO LOGIN A USER, WILL QUERY THE DATABASE AND CHECK IF THE USER HAS AN EXISTING ACCOUNT.
UserController.loginUser = (req, res, next) => {
    const query = 
    console.log(db.query);
    console.log('in login middleware');
    return next();
}

module.exports = UserController;