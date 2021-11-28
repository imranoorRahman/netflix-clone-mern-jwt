const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        // password: req.body.password
        password: CryptoJS.AES.encrypt(req.body.password, process.env.REACT_APP_SECRET_KEY).toString()
    })

    try{
        const user = await newUser.save();
        return res.status(201).json(user);
    }catch(err){
        return res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(401).json({message: "Incorrect Username or Password!"});

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.REACT_APP_SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if(originalPassword !== req.body.password) return res.status(401).json({message: "Incorrect Username or Password!"});

        const accessToken = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.REACT_APP_SECRET_KEY, {expiresIn: "5d"});

        const {password, ...userData} = user._doc;
        return res.status(201).json({...userData, accessToken});

    }catch(err){
        return res.status(500).json(err);
    }
});

module.exports = router;