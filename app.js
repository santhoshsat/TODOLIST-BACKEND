const express = require('express');
const app=express()
const todo_items =require('./routes/todo_items')
app.get('/',(req,res)=>{
    res.send('working')
})
app.use('/api/v1/todo_items',todo_items)

app.listen(3000)