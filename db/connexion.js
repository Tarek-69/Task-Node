const mongoose = require("mongoose");

const PSEUDO = process.env.MONGODB_PSEUDO;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLUSTER_NAME = process.env.MONGODB_CLUSTER_NAME;
const COLLECTION_NAME= process.env.MONGODB_COLLECTION_NAME
mongoose.set("strictQuery", true);
mongoose
  .connect(
    `mongodb+srv://${PSEUDO}:${PASSWORD}@${CLUSTER_NAME}.eameuf5.mongodb.net/${COLLECTION_NAME}`
  )
  .then(() =>
    console
      .log("Connexion à la DB réussie")
  ).catch((error) => console.log(error));
