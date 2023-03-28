const db = require("../config/database.js");

const PostController = {
  create(req, res) {
    let post = { title: req.body.title, body: req.body.body };
    let sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Post added...");
    });
  },
  getAll (req, res) {
    let sql = "SELECT * FROM posts";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  getById (req, res) {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  updateById(req, res) {
    let newTitle = req.body.title;
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Post updated...");
    });
  },
  deleteById(req, res) {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send({ msg: "Post deleted", result });
    });
  }
};

module.exports = PostController;
