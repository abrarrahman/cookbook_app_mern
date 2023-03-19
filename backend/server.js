require("dotenv").config();
const express = require("express");
const app = express();
const recipesRoutes = require("./routes/recipes");
const mongoose = require("mongoose");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/recipes", recipesRoutes);

app.get("/", (req, res) => {
  res.send("Cookbook app api");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Cookbook app connected to db and listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
