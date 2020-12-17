const mysql = require('mysql');
const { db, User } = require("./models");
const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/deepakAuth');
const {sendWelcomeEmail,sendCancelationEmail,sendPasswordResetEmail} = require('../../emails/account');
const { sendsms } =require('../../completed_test_modules/sendSmsModule')

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
        let { customer_first_name, customer_last_name, customer_email, customer_password, customer_phone_number, customer_institute_name, customer_subdomain_name, customer_profile_picture,using_google=false } = req.body.values;
        
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

        if(!using_google) {
            const salt = bcrypt.genSaltSync(10);
            customer_password = await bcrypt.hashSync(customer_password,salt)
            
            req.body.values.customer_password = customer_password;
        }
        //Change it to customer email and customer name
        let name=customer_first_name;
        if (customer_last_name)
            name = `${customer_first_name} ${customer_last_name}`; 
        
        let temp = await sendWelcomeEmail(customer_email,name);
        console.log('🚀', temp);
        
        // sending sms 
        if (!using_google) {
            const result=await sendsms(customer_phone_number,'test')
            console.log(result);
        }
        const user = await User.create(req.body.values);

        //  res.status(200).json({
        //     success:1,
        //     message:"User Successfully Created"
        // });
        res.redirect(307, 'users/login');

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

// sigin in a user
router.post('/users/login', async (req, res) => {
    console.log(req.body.values);

    try {
        const {customer_email,customer_password='',using_google=false} = req.body.values;

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
        else {
            if(!using_google) {
                let storedPassword = sqlCheck.dataValues.customer_password;
                const matchPassword = bcrypt.compareSync(customer_password,storedPassword);

                if(!matchPassword){
                    return res.status(200).json({
                        success:0,
                        error:"Incorrect Email or Password",
                    });
                }
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

// Handle Forgot password
router.post('/users/forgotPassword',async (req, res) => {
    try {
        const { email } = req.body.values;
        sqlCheck = await User.findOne({
            where: {
              customer_email:email
            }
        });
        console.log('RAN SUCCESSFULLY')
        // console.log('❓',sqlCheck.dataValues)

        if (!sqlCheck) {
            console.log('email not found')
            return res.status(500).json({
                        success:0,
                        error:"Email not registered",
                    });
        } else {
            console.log('success', sqlCheck.dataValues)
            
            //Change it to customer email and customer name
            let temp = await sendPasswordResetEmail(email);
            console.log('🚀', temp);
            
            return res.status(200).json({
                success: 1,
                error: ''
            })
        }
    } catch (err) {
        console.log('final err',err)
        return res.status(500).json({
            success: 0,
            error: "Database Connection Error",
            errorReturned:err
        })
    }
})

// handle reset password
router.post('/users/reset-password',async (req, res) => {
    try {
        const { email, newPassword } = req.body.values;
        const salt = bcrypt.genSaltSync(10);
        new_hashed_password = await bcrypt.hashSync(newPassword, salt)
        
        const sqlCheck = await User.update(
            { customer_password: new_hashed_password },
            { where:{ customer_email:email }}
        )
          console.log('data values are',sqlCheck)  
        if (sqlCheck==0) 
            return res.status(400).json({
                success: 0,
                error:'Mail not registered'
            })
        
        return res.status(200).json({
                    success: 1,
                    error: ''
                })

    } catch (err) {
        console.log('final err',err)
        return res.status(500).json({
            success: 0,
            error: "Database Connection Error",
            errorReturned:err
        })
    }

})

// these 2 routes we don't need
// create a user registered via google auth
router.post('/users/google' , async (req,res) => {
    // req.body.values.customer_subdomain_name = "Remove it"
    // req.body.values.customer_institute_name = "Deepak"
    console.log('❓',req.body.values);
    
    try{
        let { customer_first_name, customer_last_name, customer_email, customer_institute_name, customer_subdomain_name, customer_profile_picture } = req.body.values;
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

        // Change it to customer email and customer name
        let temp = await sendWelcomeEmail("deepaksharma290700@gmail.com","vedant");
        console.log('🚀',temp);

        const user = await User.create(req.body.values);

        //  res.status(200).json({
        //     success:1,
        //     message:"User Successfully Created"
        // });
        res.redirect(307, '/users/login/google');

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

// login user via google auth
router.post('/users/login/google', async (req, res) => {
    // console.log(req.body.values);

    try {
        const {customer_name,customer_email} = req.body.values;

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