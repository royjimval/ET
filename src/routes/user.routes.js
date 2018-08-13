const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')
const passport = require('passport')

//load Input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

//@route    GEt recuest api/user/test
//@desc     Tests posts rout
//@access   Public
router.get('/test',(req,res)=> res.json({msg: 'users works'}));


//@route    GEt recuest api/user/current
//@desc     return current user
//@access   private
router.get('/current',passport.authenticate('jwt',{session:false}), (req,res)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        lastname: req.user.lastname,
        email:req.user.email,
        role:req.user.role,
        permissions:req.user.permissions
    })
});



//@route    GEt recuest api/user/allUser
//@desc     Get all users form database
//@access   public
router.get('/allUser', async (req, res) => {
    const user = await User.find();
    res.json(user);
});

//@route    GEt recuest api/user/login
//@desc     Login user/ returning JWT login
//@access   public
router.post('/login',(req,res)=>{
    const {errors, isValid} = validateLoginInput(req.body);
    //check validation
    if(!isValid){
        return (res.status(400).json(errors))
    }

    const email = req.body.email;
    const password = req.body.password;

    //find user by email
    User.findOne({email})
        .then(user=>{
            //check user
            if(!user){
                errors.email='User not found';
                return(res.status(404).json(errors));
            }
            //check password
            bcrypt.compare(password, user.password)
                .then(isMatch=>{
                    if(isMatch){
                        //user match
                        const payload={id:user.id,name:user.name,lastname:user.lastname,email:user.email,password:user.password,role:user.role,permissions:user.permissions} //create JWT Payload
                        //sign Token
                        jwt.sign(
                            payload, 
                            keys.secretOrKey, 
                            {expiresIn:86400},
                            (err, token)=>{
                                res.json({
                                    success:true,
                                    token: 'Bearer '+ token
                                })
                            }
                        );
                    }else{
                        errors.password='Password incorrect';
                        return(res.status(400).json(errors));
                    }
                })
        })
})



//@route    GEt recuest api/user/register
//@desc     Register user
//@access   Privated
router.post('/register',(req,res)=>{
    const {errors, isValid} = validateRegisterInput(req.body);
    //check validation
    if(!isValid){
        return (res.status(400).json(errors))
    }

    User.findOne({email: req.body.email})
    .then(
        user=>{
            if(user){
                errors.email="Email alredy exists"
                return(res.status(400).json(errors))
            }else{
                const newUser = new User({
                    name: req.body.name,
                    lastname: req.body.lastname,
                    password: req.body.password,
                    email: req.body.email,
                    role: req.body.role,
                    permissions: req.body.permissions
                });
                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user=>res.json(user))
                            .catch(err=>console.log(err));
                    })
                })
            }
        }
    )
});


module.exports = router;