const express = require('express')
const router = express.Router()
const {getData, postData, updateData} = require("../controllers/volunteerController")


router.get('/volunteer/:id', getData)

router.post('/volunteer/:id', postData)

router.patch("/volunteer/:id", updateData)

module.exports = router
