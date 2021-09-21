myArray = [{"topping":"cherry", "quantity":2}, {"topping":"plain", "quantity":6}, {"topping":"chocolate", "quantity":3}]
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.json(myArray);
});

module.exports = router;
