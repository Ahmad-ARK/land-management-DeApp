const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index", { title: "LandChain Dashboard" }));
router.get("/register", (req, res) => res.render("register", { title: "Register Land" }));
router.get("/transfer", (req, res) => res.render("transfer", { title: "Transfer Land" }));
router.get("/view", (req, res) => res.render("view", { title: "View Land" }));
router.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "LandChain Dashboard" });
});

module.exports = router;
