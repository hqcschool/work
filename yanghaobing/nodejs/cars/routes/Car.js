var express = require('express');
var router = express.Router();
var Car = require('../controerll/car')

/* GET users listing. */
router.get('/', Car.getcars);
//添加汽车
router.post('/addcar', Car.getaddcar)
//删除
router.delete("/delcar", Car.getdelete)
//更新
router.put("/upcars",Car.getupdatacar)
module.exports = router;
