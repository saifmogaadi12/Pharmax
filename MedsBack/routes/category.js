const express = require('express')
const router  = express.Router()

const CategoryController = require('../controllers/CategoryController')

router.get('/', CategoryController.index)
router.post('/show', CategoryController.show)
router.post('/store', CategoryController.store)
router.post('/update', CategoryController.update)
router.post('/delete', CategoryController.destory)

module.exports=router