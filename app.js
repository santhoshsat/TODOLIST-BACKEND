const express = require('express');
const app=express()
const PORTS=3500;
const todo_items =require('./routes/todo_items')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('working')
})
app.use('/api/v1/todo_items',todo_items)

app.listen(PORTS,()=>{
    console.log("server starts at ports")
})