const { getPosts, getPost, addPost, deletePost, updatePost } = require("../controllers/posts");

const router = require("express").Router();

router.get("/" , getPosts)
router.get("/:id" , getPost)
router.post("/" , addPost)
router.delete("/:id" , deletePost)
router.put("/:id" , updatePost)

module.exports = router;