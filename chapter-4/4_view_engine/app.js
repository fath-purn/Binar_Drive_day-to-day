require("dotenv").config();
const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;

app.use(express.urlencoded());
app.set("view engine", "ejs");

app.get("/", (res, req) => {
  req.render("welcome", { appName: "Binar App" });
});

app.get("/posts", async (req, res) => {
  let result = await pool.query("SELECT * FROM posts");

  res.render("getAllPost", { posts: result.rows });
});

app.listen(PORT, () => console.log("listening on port", PORT));
