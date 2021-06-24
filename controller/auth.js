const { Router } = require('express')
const router = Router()
const kUser = require('../models/User')



router.post('/signUp', async (req, res) => {
    console.log('a')

    const { userName, email, password, location, nOfGroups, likes, photoUrl, isDisabled, bio, uid } = req.body;
    const userInfo = new kUser({
        userName, email, password, location, nOfGroups, likes, photoUrl, isDisabled, bio, uid
    });
    userInfo.isDisabled = false;
    userInfo.likes = 0;
    userInfo.photoUrl = "";
    userInfo.bio = '';
    userInfo.nOfGroups = 0;
    userInfo.location = "";
    try {
        kUser.findOne({ "email": email }, async function (err, kEmail) {
            if (kEmail)
                return res.status(404).json('Email is already exist !')
            else
                kUser.findOne({ "userName": userName }, async function (err, kUserName) {
                    if (kUserName) {
                        return res.status(404).json('UserName is already exist !')
                    } else {
                        await userInfo.save()
                        return res.status(200).json('Sign Up Successfull !')
                    }
                })

        })
    } catch (e) {
        return res.status(404).json('Try again later !')

    }

})




router.post('/signUp', async (req, res) => {

    const { email, password, } = req.body;
  
    try {
        const kUser = await User.findOne({ email: req.body.email });
        if(!kUser && kUser.password!=password){
            return res.status(404).json('Please check email or password again !')
        }
        return res.status(200).json({kUser})
        
    } catch (e) {
        return res.status(404).json('Try again later !')

    }

})


module.exports = router;
