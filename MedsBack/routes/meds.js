const express = require('express')
const router  = express.Router()

const MedsController = require('../controllers/MedsController')

router.get('/', MedsController.index)
router.post('/show', MedsController.show)
router.post('/store', MedsController.store)
router.post('/update', MedsController.update)
router.post('/delete', MedsController.destory)

module.exports=router