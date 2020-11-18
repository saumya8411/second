const mysql = require('mysql');
const { db, Session } = require("./models");
const {zoomApi} =require("./zoomAPi")
const rp = require('request-promise')
const router = require('express').Router()
const auth = require('../middleware/deepakAuth');


//Connecting to database
// let connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'oyesters'
//   });
   
//   connection.connect(err => {
//       if(err){
//           throw err;
//       }
//       console.log("MYSQL Connected")
//   });


  
  router.post('/createLiveSession',async (req,res)=>{
        console.log('❓',req.body);
        // console.log(req.user);
        let {       
                    // session_name,
                    session_description,
                    // session_duration,
                    session_fee,
                    // session_occurance,
                    session_start_date,
                    session_end_date,
                    session_start_time,
                    session_associated_course_id
                  }=req.body.values;
                  session_duration = req.body.values.session_duration.value;
                  session_occurance = req.body.values.session_occurance.value;
                  session_name = req.body.values.session_name
                  session_associated_course_id = "10";

                  console.log('❓',session_name);

                     // finding associated courses
                    session_associated_course_id= await Session.findAll({
                                                                    where: {
                                                                      session_name:session_associated_course_id
                                                                    }
                                                                  });


                    // creating zoom meet
                     Zoom_body={title:session_name,type:2,start_time:session_start_time,duration:session_duration,timezone:'IN'}
                
                    
                    // Zoom_res=await zoomApi(`https://api.zoom.us/v2/users/${req.user.customer_zoom_email}/meetings`,'POST',`${req.user.customer_zoom_jwt_token}`,{status: 'active'},Zoom_body);
                    Zoom_res=await zoomApi(`https://api.zoom.us/v2/users/vedant19khandokar@gmail.com/meetings`,'POST',`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InpPV05laFBJU2hlVUdnNkMwN3o1MFEiLCJleHAiOjE2MDUwNzkwMjAsImlhdCI6MTYwNDQ3NDIyMH0.HOWimePVsiVRepC_GZ-Xr0aYt-ILbAdRwCxVnuqZ7dc`,{status: 'active'},Zoom_body);
                    console.log('❓',Zoom_res)

                  const session = await Session.create({
                    // customer_id:req.user.customer_id,
                    // session_id:'2',
                    customer_id:'10',
                    session_type:"Live Session",
                    session_name,
                    session_description,
                    session_trainer_id:Zoom_res.host_id,
                    session_duration,
                    session_fee,
                    session_link:Zoom_res.join_url,
                    session_uploaded_on:Zoom_res.created_at,
                    session_occurance,
                    session_start_date,
                    session_start_time,
                    // session_registration,
                    session_associated_course_id,
                    session_zoom_code:Zoom_res.id,
                  session_zoom_password:Zoom_res.password

  								});
  			console.log('new Session created', session)

  });

router.post('/createReecordedSession',async (req,res)=>{
        console.log(req.body);
        let {       session_name,
                    session_description,
                    session_duration,
                    session_fee,
                    session_occurance,
                    session_start_date,
                    session_end_date,
                    session_start_time,
                    session_associated_course_id}=req.body;
                    // finding associated courses
                    session_associated_course_id=Session.findAll({
                                                                    where: {
                                                                      session_id:session_associated_course_id
                                                                    }
                                                                  });


                    // creating zoom meet
                     Zoom_body={title:session_name,type:2,start_time:session_start_time,duration:session_duration,timezone:'IN'}
                
 var Zoom_res=await zoomApi(`https://api.zoom.us/v2/users/${req.body.Zoom_email}/meetings`,'POST',`${req.user.zoomApiToken}`,{status: 'active'},Zoom_body);
          console.log('❓',Zoom_res)
                    
                  const session = await Session.create({
                  customer_id:req.user.customer_id,
                  session_type:"Live Session",
                    session_name,
                    session_description,
                    session_trainer_id:Zoom_res.host_id,
                    session_duration,
                    session_fee,
                    session_link:Zoom_res.join_url,
                    session_uploaded_on:Zoom_res.created_at,
                    session_occurance,
                    session_start_date,
                    session_start_time,
                    session_registration,
                    session_associated_course_id,
                    session_zoom_code:Zoom_res.id,
                  session_zoom_password:Zoom_res.password

                  });
        console.log('new Session created', session)

  });


  router.get('/FindAllSession',async(req,res)=>{
        console.log(req.body);
        res.json(Session.findAll());
          
  });
  router.get('/FindSessionById/:id',async(req,res)=>{
        console.log(req.body);
        res.send(Session.findAll({where:{session_id:req.params.id}}));
          
  });
  router.post('/updateSession',async (req,res)=>{
  			console.log(req.body);
  			const session = await Session.update({ lastName: "Doe" }, {
							  where: {
							    lastName: null
							  }
				});
  			console.log('new Session created', session)

  });
  
router.post('/deleteSession',async (req,res)=>{
  			console.log(req.body);
  			const session = await Session.destroy({
          where: {
            firstName: "Jane"
          }
        });
  			console.log('new Session created', session)

});

module.exports = router