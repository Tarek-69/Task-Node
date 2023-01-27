const router = require("express").Router();
const myController = require("../controllers/Api");

router.route("/").get(myController.getHome);

module.exports = router;
