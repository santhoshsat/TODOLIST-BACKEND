
const getAllToDoItems =(req,res)=>{
    res.send("list of all items")
}
const createNewToDoItems =(req,res)=>{
    res.send("create of all items")
    res.json(req.body)
}


module.exports = {getAllToDoItems,createNewToDoItems}