const express = require("express");
const fs = require('fs')
const url = require('url')
const path  = require('path')
const PORT = 3005

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose","Cake","Biff"]

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});
app.get("/about", (req,res) => {
  res.render("about")
})

app.listen(PORT)
