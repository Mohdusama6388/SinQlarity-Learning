const express = require("express");
const calculatorController=require('../controllers/calculator');
const router =express.Router();
router.post('/add',calculatorController.add);
router.post('/substract',calculatorController.substract);
router.post('/Multiply',calculatorController.Multiply);
router.post('/divide',calculatorController.divide);
module.exports=router;