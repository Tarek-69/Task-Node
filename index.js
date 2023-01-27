require("colors");
require("dotenv").config();
require("./db/connexion");

const interfaceRoutes = require("./routes/interface.routes");
const taskAPIRoutes = require("./routes/taskAPI.routes");
const morgan = require("morgan");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
const path = require("path");
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", interfaceRoutes);
app.use("/api", taskAPIRoutes);

// Mises en écoute du serveur
app.listen(PORT, () =>
  console.log(`Le serveur à démarrer à cette adresse http://localhost:${PORT}`)
);
