const express = require('express');
const router = express.Router(); 
const {getAllToDoItems,createNewToDoItems,getAToDoItems,updateAToDoItems,deleteAToDoItems} =require('../controllers/todo_items')        
router.route('/').get(getAllToDoItems).post(createNewToDoItems)
router.route('/:id').get(getAToDoItems).patch(updateAToDoItems).delete(deleteAToDoItems)
module.exports = router;