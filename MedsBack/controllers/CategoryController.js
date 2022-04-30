const Categorys = require('../models/category')

const index=(req, res, next) => 
{
    Categorys.find()
    .then(response =>{
        res.json(response)
    })
 .catch(error=>{
     res.json({error})
 })   
}

const show = (req, res, next) => {
    let CategorysID = req.body.CategorysID
     Categorys.findById(CategorysID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}


const store = (req, res, next) => {
    const name_category = req.body.name_category;
    const description = req.body.description;
    let post = new Categorys({
        name_category,
        description
    })
    post.save()
        .then(response => {
            res.json({
                message: 'Category Added Sucessfull!',
                response
            })
        })
        .catch(err => {
            res.status(400).json({
                message: 'an error Occured!',
                err
            })
        })
}


//update an Categorys
const update =(req, res, next)=>
{
    let CategorysID=req.body.CategorysID
    let updateData={
        name_category:req.body.name_category,
        description:req.body.description,
    }
    Categorys.findByIdAndUpdate(CategorysID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Categorys updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an Categorys

const destory=(req,res,next) =>{
    let CategorysID= req.body.CategorysID
    Categorys.findByIdAndRemove(CategorysID)
    .then(()=>{
        req.json({
            message: 'an error Occured!'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

module.exports={
    index, show, store, update, destory

}