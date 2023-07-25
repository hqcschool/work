var express = require('express');
var router = express.Router();
var kunController = require("../controller/kunController")
/* GET users listing. */
router.get('/', kunController.getKunList);
router.post("/add", kunController.addKun);
router.delete("/delete/:id", kunController.deleteKun);
router.get("/add", function (req, res) {
    res.render("kun")
});

module.exports = router;
