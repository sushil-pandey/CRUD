const express = require('express');
const router = express.Router();

var employeeController = require('../controllers/employeeController');

//router.post('/employee', employeeController.employee);
//router.get('/employee', employeeController.employeeget);
//router.get('/employee/:id', employeeController.employeegetid);
router.put('/employee/:id', employeeController.employeeUpdate);
//router.delete('/employee/:id', employeeController.employeeDelete);





module.exports = router;