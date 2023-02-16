const { db } = require("../db");
const bcrypt = require("bcryptjs");

const register = (req,res) => {
    
    //Check for existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

        //Hash password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q,[values], (err, data) => {
            if(err) return res.json(err);
            return res.status(200).json("User has been created successfully")
        })

    });
}

const login = (req,res) => {

}

const logout = (req,res) => {

}


module.exports = {register, login, logout};