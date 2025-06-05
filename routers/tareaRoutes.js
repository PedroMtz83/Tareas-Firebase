const express = require('express');
const router = express.Router();
const tareaController = require('../controller/tareaController');

// rutas para las tareas
router.get('/', tareaController.getAllTasks);        
router.get('/:id', tareaController.getTaskById);    
router.post('/', tareaController.createTask);      
router.put('/:id', tareaController.updateTask);     

module.exports = router;