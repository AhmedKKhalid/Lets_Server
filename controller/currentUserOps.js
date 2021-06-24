const { Router } = require('express')
const router = Router()
const kUser = require('../models/User')


router.get('/currentUserData', async (req, res) => {
    const id = req.body.uid;
    const myInfo = await User.findOne({ uid: id });
    return res.status(200).json({ myInfo })
})

module.exports=router;