const express = require('express');
const Model = require('../model/model');
const router = express.Router()

//Post Method
router.post('/post', async(req, res)=>{
   const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

//Get all Method
router.get('/getAll', async(req, res)=>{
   try {
        const data = await Model.find();
        res.send(data)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

//Get by ID method
router.get('/getOne/:id', async(req, res)=>{
    console.log('req.params', req.params);
    try {
        const data = await Model.findById(req.params.id);
        res.send(data)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

//Update by ID method
router.patch('/update/:id', async(req, res)=>{
    try{
       const result = await Model.findByIdAndUpdate(req.params.id, req.body, {new:true})
       res.send(result)

    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

//Delet by ID method
router.delete('/delete/:id', async(req, res)=>{
    try {
        const data = await Model.findByIdAndDelete(req.params.id)
    res.send(`${data.name} has been deleted...`)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }  
})

module.exports = router;