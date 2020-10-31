const router = require('express').Router();
const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");
const mysql = require('mysql');
const connectDB = require('../db/connect');
const Library = require('../db/models/library_table');

//Connecting to database
connectDB();
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'oyesters'
  });
   
  connection.connect(err => {
      if(err){
          throw err;
      }
      console.log("MYSQL Connected")
  });

// To fetch all the data related to that customer
//i.e. all material 
router.get('/' , async (req,res) => {

    try{

        //Fetch User Specific Data 
        let libraryContent = await  Library.find({customer_id : req.user.customer_id});
            
        res.status(200).json({
            libraryContent
        })

    }
    catch(err){
        console.log(err)
        res.status(404).send(err);
    }

})

//To fetch all the data where type = video
router.get('/videos' , async (req,res) => {
    try{
        let videoContent = await  Library.find({customer_id : req.user.customer_id , library_item_type : "video"});
        res.status(200).json({
            videoContent
        });
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})


//To fetch all the data where type = recording
router.get('/recordings' , async (req,res) => {
    try{
        let recordingContent = await  Library.find({customer_id : req.user.customer_id , library_item_type : "recording"});
        res.status(200).json({
            recordingContent
        });
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})

//To fetch all the data where type = assignment
router.get('/assignments' , async (req,res) => {
    try{
        let assignmentContent = await  Library.find({customer_id : req.user.customer_id , library_item_type : "assignment"});
        res.status(200).json({
            assignmentContent
        });
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})

//To fetch all the data where type = quiz
router.get('/quizs' , async (req,res) => {
    try{
        let quizContent = await  Library.find({customer_id : req.user.customer_id , library_item_type : "quiz"});
        res.status(200).json({
            quizContent
        });
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})


//To fetch all the data where type = handout
router.get('/handouts' , async (req,res) => {
    try{
        let handoutsContent = await  Library.find({customer_id : req.user.customer_id , library_item_type : "handout"});
        res.status(200).json({
            handoutsContent
        });
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})


//To search Particular fileName
router.post('/search' , async (req,res) => {
    try{
        const {searchInput} = req.body;
        console.log(searchInput);
        let searchContent = await Library.find({ customer_id : req.user.customer_id , library_item_name : searchInput })

        res.status(200).json(searchContent);
    }
    catch(err){
        console.error(err)
        res.send(err);
    }
})


//To delete a particular item
router.delete('/:id' , async (req,res) => {
    try{
       
        await Library.remove({library_item_id : req.params.id , customer_id:req.user.customer_id })
        console.log('Deleted ')
        res.send('Successfuly deleted library content');

    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

//To download 
router.get('/download/:id' , async (req,res) => {
    try{

        let libraryContent = await  Library.find({ library_item_id:req.params.id });
        
        let sql = `SELECT * FROM LIBRARY_TABLE WHERE LIBRARY_ITEM_ID = ${req.params.id}`;
        let query = await connection.query(sql , (err, libraryContent) => {
            if(err) throw err;
            console.log('RAN successfully') 


            let absPath = libraryContent[0].library_item_location; // Absolute path to the server storage folder
            let fileName = libraryContent[0].library_item_name; // The default name the browser will use to store file
            
            // console.log(absPath);

            if(libraryContent[0].library_item_type == "quiz" || libraryContent[0].library_item_type == "handout" || libraryContent[0].library_item_type == "assignment"){
                absPath = `${absPath}\\${fileName}.pdf`;
                fileName = fileName + "-Report.pdf"; 
            }
            else if(libraryContent[0].library_item_type == "video" || libraryContent[0].library_item_type == "recording"){
                absPath = `${absPath}\\${fileName}.mp4`;
                console.log(absPath);
                fileName = fileName + "-Video.mp4";
            }
            else{
                fileName = fileName + "-ERROR.pdf";
            }

            res.download(absPath, fileName); 

        })

        

    }
    catch(err){
        console.error(err)
        res.send(err)
    }
})


module.exports = router 
