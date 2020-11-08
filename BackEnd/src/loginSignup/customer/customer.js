const mysql = require('mysql');
const { db, User } = require("./models");
const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/deepakAuth');
const {sendWelcomeEmail,sendCancelationEmail} = require('../../emails/account');


//Connecting to Database
const connection = require('../../db/sql');

//Just for testing if token is working or not
router.get('/users',auth,(req,res)=>{
    res.send("dvsd");
})

//Create a new User
router.post('/users' , async (req,res) => {
    // req.body.values.customer_subdomain_name = "Remove it"
    // req.body.values.customer_institute_name = "Deepak"
    console.log('❓',req.body.values);
    
    try{
        let {customer_first_name,customer_last_name,customer_email,customer_password,customer_phone_number,customer_institute_name,customer_subdomain_name,customer_profile_picture} = req.body.values;
        
        //Don't change it to let otherwise DB is will not connect
        sqlCheck = await User.findOne({
            where: {
              customer_email:customer_email
            }
        });
        console.log('RAN SUCCESSFULLY')
        // console.log('❓',sqlCheck)

        if(sqlCheck){
            return res.json({
                success:0,
                error:'Email Aready Registered'
            })
        }

        const salt = bcrypt.genSaltSync(10);
        customer_password = await bcrypt.hashSync(customer_password,salt)
        
        req.body.values.customer_password = customer_password;

        //Change it to customer email and customer name
        let temp = await sendWelcomeEmail("deepaksharma290700@gmail.com","vedant");
        console.log('🚀',temp);

        const user = await User.create(req.body.values);

        return res.status(200).json({
            success:1,
            message:"User Successfully Created"
        });


    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:0,
            error:"Database connection error",
            errorReturned:err
        });
    }
})

router.post('/users/login', async (req, res) => {
    // console.log(req.body.values);

    try {
        const {customer_email,customer_password} = req.body.values;

        sqlCheck = await User.findOne({
            where: {
              customer_email:customer_email
            }
        });
        console.log('RAN SUCCESSFULLY')
        // console.log('❓',sqlCheck.dataValues)

        if(!sqlCheck){
            return res.status(200).json({
                        success:0,
                        error:"Email not registered",
                    });
        }
        else{
            let storedPassword = sqlCheck.dataValues.customer_password;
            const matchPassword = bcrypt.compareSync(customer_password,storedPassword);

            if(!matchPassword){
                return res.status(200).json({
                    success:0,
                    error:"Incorrect Email or Password",
                });
            }

            const jwtToken = jwt.sign({temporaryResult : sqlCheck.dataValues},process.env.JWT_KEY,{
                expiresIn:"1h"
            });


            return res.status(200).json({
                success:1,
                message:"Login Successful",
                user:sqlCheck.dataValues,
                token:jwtToken
            });


        }
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                success:0,
                error:"Database connection error",
                errorReturned:err
            });
        }
})


module.exports = router