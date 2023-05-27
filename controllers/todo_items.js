
const getAllToDoItems =(req,res)=>{
    res.send("list of all items")
}
const createNewToDoItems =(req,res)=>{
    res.send("create of all items")
    res.json(req.body)
}
const getAToDoItems =(req,res)=>{
    res.send(`displaying items with id ${req.params.id}`)
}
const updateAToDoItems =(req,res)=>{
    res.send(`updating items with id ${req.params.id}`)
}
const deleteAToDoItems =(req,res)=>{
    res.send(`deleting  items with id ${req.params.id}`)
}
module.exports = {getAllToDoItems,createNewToDoItems,getAToDoItems,updateAToDoItems,deleteAToDoItems}