const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();

//app - router POSTS ES UNA TABLA!!! NO EL MÉTODO POST
router.post("/", PostController.create);
router.get("/",PostController.getAll);
router.get("/id/:id",PostController.getById);
router.put("/id/:id", PostController.updateById);
router.delete("/:id",PostController.deleteById );

module.exports = router;
