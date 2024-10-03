const express = require("express");
const { Router } = require("express")

const app = express();
const router = new Router();
const controller = require('../controllers/UserController')

router.get("/", (req, res) => res.send('User created'));

module.exports = router
