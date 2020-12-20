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



router.post('/createLiveSession',auth,async (req,res)=>{
  console.log('❓', req.user.customer_id);
  // return res.status(200).json({success:1})

  try {
      let {       
            session_name,
            description,
            // session_duration,
            fees,
            occurance,
            duration,
            session_tags,
            session_start_date,
            session_end_date,
            session_start_time,
        session_associated_course_id,
        session_registration=false
    } = req.body.values;
    
    session_description = description;
    // session_course = course;
    session_duration = duration;
    session_occurance =occurance;
    session_associated_course_id = "10";
    session_fee = fees;

    console.log('❓',session_name);

    // finding associated courses
    session_associated_course_id= await Session.findAll({
                                                    where: {
                                                      session_name:session_associated_course_id
                                                    }
                                                  });

    console.log(session_associated_course_id);

  // creating zoom meet
  Zoom_body = {
    title: session_name,
    type: 2,
    start_time: session_start_time,
    duration: session_duration,
    timezone: 'IN'
  }
  
      
    // Zoom_res=await zoomApi(`https://api.zoom.us/v2/users/${req.user.customer_zoom_email}/meetings`,'POST',`${req.user.customer_zoom_jwt_token}`,{status: 'active'},Zoom_body);
    Zoom_res=await zoomApi(`https://api.zoom.us/v2/users/${process.env.EMAIL_ID}/meetings`,'POST',process.env.JWT_TOKEN_ZOOM_VEDANT,{status: 'active'},Zoom_body);
    // console.log('❓',Zoom_res)

    const session = await Session.create({
      customer_id:req.user.customer_id,
      // session_id:'2',
      // customer_id:'10',
      session_type:"Live Session",
      session_name,
      session_description,
      session_trainer_id:Zoom_res.host_id,
      session_duration,
      session_fee,
      session_tags,
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
    return res.status(200).json({
      success:1,
      session
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: 0,
      error: 'could not create session',
      errorMessage: JSON.stringify(err)
    }) 
  }

});

router.post('/createRecordedSession',auth,async (req,res)=>{
  console.log(req.user,req.body);
  try {
    let {
      session_name,
      session_description,
      session_duration,
      session_fee,
      session_tags,
      session_occurance,
      session_start_date,
      session_end_date,
      session_start_time,
      session_associated_course_id="10"
    } = req.body.values;

    if (!session_fee || !session_name || !session_description || !session_duration )
      return res.status(500).json({
        success: 0,
        error:'Data Incomplete'
      })

    // finding associated courses
    session_associated_course_id=Session.findAll({ where: { session_id:session_associated_course_id } });

    // creating zoom meet
    Zoom_body = {
      title: session_name,
      type: 2,
      // start_time: session_start_time,
      start_time: "10:00:00",
      duration: session_duration,
      timezone: 'IN'
    }
                  
    Zoom_res=await zoomApi(`https://api.zoom.us/v2/users/${process.env.EMAIL_ID}/meetings`,'POST',process.env.JWT_TOKEN_ZOOM_VEDANT,{status: 'active'},Zoom_body);
    console.log('❓',Zoom_res)
                      
    const session = await Session.create({
      customer_id:req.user.customer_id,
      session_type:"Recorded Session",
      session_name,
      session_description,
      session_trainer_id:Zoom_res.host_id,
      session_duration,
      session_tags,
      session_fee,
      session_link:Zoom_res.join_url,
      session_uploaded_on:Zoom_res.created_at,
      session_occurance,
      session_start_date,
      session_start_time,
      session_registration:false,
      session_associated_course_id,
      session_zoom_code:Zoom_res.id,
      session_zoom_password:Zoom_res.password
    });
    // console.log('new Session created', session)
    if (!session)
      return res.status(500).json({
        success: 0,
        error:'Could not create session'
      })
    return res.status(200).json({
      success: 1,
      session
    })
  
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: 0,
      error: 'Could not create session',
      errorReturned: JSON.stringify(err)
    })
  }

});


router.get('/FindAllSession',auth,async(req,res)=>{
  console.log(req.user);
  // res.json(Session.findAll());
  const sqlCheck = await Session.findAll({ 
    where: {
      customer_id: req.user.customer_id
    },
    attributes: ['session_id', 'session_description','session_type','session_name','session_start_date','session_tags','session_fee','session_registration'], 
  })

  console.log(sqlCheck.dataValues,sqlCheck);
  if (!sqlCheck)
    return res.status(400).json({ success: 0, error: 'could not found' });
  return res.status(200).json({ success:1,sessions:sqlCheck})
        
});

router.get('/FindSessionById/:id',async(req,res)=>{
      console.log(req.params);
      // res.send(Session.findAll({where:{session_id:req.params.id}}));
    const sqlCheck = await Session.findOne({
      where: {
          session_id:req.params.id
      }
    })
  
  console.log(sqlCheck, sqlCheck.dataValues);
  if (!sqlCheck)
    return res.status(400).json({
      success: 0,
      error:'Could not find session'
    })
  
  return res.status(200).json({
    success: 1,
    session:sqlCheck
  })

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