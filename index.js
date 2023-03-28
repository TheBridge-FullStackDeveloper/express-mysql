const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./config/database")

app.use(express.json()); //parsear el body (traducir)
app.use("/posts", require("./routes/posts"));

//crea base de datos
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createTablePosts", (req, res) => {
  let sql =
    "CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts table created...");
  });
});

// app.post("/", (req, res) => {
//   let sql = `INSERT INTO posts (title, body) values
//       ('${req.body.title}', '${req.body.body}');`;//poner las comillas para que reconozca como strings SI NO PETAAA!!!
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send("Post added...");
//   });
// });

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
