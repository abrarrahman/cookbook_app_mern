const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "get all recipes",
  });
});

router.get("/:id", (req, res) => {
  res.json({
    message: "get single recipe",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "post a new recipe",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "delete a new recipe",
  });
});

router.patch("/:id", (req, res) => {
  res.json({
    message: "update a new recipe",
  });
});

module.exports = router;
