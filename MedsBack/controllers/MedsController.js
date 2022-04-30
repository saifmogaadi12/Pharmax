const Meds = require('../models/med')

const index=(req, res, next) => 
{
    Meds.find()
    .then(response =>{
        res.json(response)
    })
 .catch(error=>{
     res.json({error})
 })   
}

const show = (req, res, next) => {
    let MedsID = req.body.MedsID
     Meds.findById(MedsID)
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

    let Med= new Meds({
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        quantity:req.body.quantity,
        expiration_date:req.body.expiration_date,
        manufacturer:req.body.manufacturer,
    })
    Med.save()
    .then(response => {
        res.json({
            message:'Message Added Sucessfull!'
        })
    })
.catch(error => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an Meds
const update =(req, res, next)=>
{
    let MedsID=req.body.MedsID
    let updateData={
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        quantity:req.body.quantity,
        expiration_date:req.body.expiration_date,
        manufacturer:req.body.manufacturer,
    }
    Meds.findByIdAndUpdate(MedsID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Meds updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an Meds

const destory=(req,res,next) =>{
    let MedsID= req.body.MedsID
    Meds.findByIdAndRemove(MedsID)
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