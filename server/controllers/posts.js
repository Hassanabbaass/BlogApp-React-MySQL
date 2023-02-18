const { db } = require("../db");

const getPosts = (req,res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err,data) => {
        if(err) return res.send(err);

        return res.status(200).json(data);
    });
}

const getPost = (req,res) => {
    res.json("hi")
}

const addPost = (req,res) => {
    res.json("hi")
}

const deletePost = (req,res) => {
    res.json("hi")
}

const updatePost = (req,res) => {
    res.json("hi")
}



module.exports = {getPosts, getPost, addPost, deletePost, updatePost}