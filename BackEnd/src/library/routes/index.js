const router = require('express').Router();
const mysql = require('mysql');

//Connecting to database
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
        let sql = `SELECT * FROM LIBRARY_TABLE WHERE  CUSTOMER_ID =${req.user.customer_id} `;

        let query = await connection.query(sql , (err, result) => {
            if(err) throw err;
            console.log('RAN successfully') 
            res.status(200).json({
                result
            });
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
        let sql = `SELECT * FROM LIBRARY_TABLE WHERE LIBRARY_ITEM_TYPE='video' AND CUSTOMER_ID = ${req.user.customer_id} `;

        let query = await connection.query(sql , (err, result) => {
            if(err) throw err;
            console.log('RAN successfully') 
            res.status(200).json({
                result
            });
        })
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})


//To fetch all the data where type = recording
router.get('/recordings' , async (req,res) => {
    try{
        let sql = `SELECT * FROM LIBRARY_TABLE WHERE LIBRARY_ITEM_TYPE='recording' AND CUSTOMER_ID = ${req.user.customer_id} `;

        let query = await connection.query(sql , (err, result) => {
            if(err) throw err;
            console.log('RAN successfully') 
            res.status(200).json({
                result
            });
        })
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})

//To fetch all the data where type = assignment
router.get('/assignments' , async (req,res) => {
    try{
        let sql = `SELECT * FROM LIBRARY_TABLE WHERE LIBRARY_ITEM_TYPE='assignment' AND CUSTOMER_ID = ${req.user.customer_id} `;

        let query = await connection.query(sql , (err, result) => {
            if(err) throw err;
            console.log('RAN successfully') 
            res.status(200).json({
                result
            });
        })
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})

//To fetch all the data where type = quiz
router.get('/quizs' , async (req,res) => {
    try{
        let sql = `SELECT * FROM LIBRARY_TABLE WHERE LIBRARY_ITEM_TYPE='quiz' AND CUSTOMER_ID = ${req.user.customer_id} `;

        let query = await connection.query(sql , (err, result) => {
            if(err) throw err;
            console.log('RAN successfully') 
            res.status(200).json({
                result
            });
        })
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})


//To fetch all the data where type = handout
router.get('/handouts' , async (req,res) => {
    try{
        let sql = `SELECT * FROM LIBRARY_TABLE WHERE LIBRARY_ITEM_TYPE='handout' AND CUSTOMER_ID = ${req.user.customer_id} `;

        let query = await connection.query(sql , (err, result) => {
            if(err) throw err;
            console.log('RAN successfully') 
            res.status(200).json({
                result
            });
        })

        
    }
    catch(err){
        console.error(err);
        res.send(err);
    }
})


//To search Particular fileName
router.post('/search' , async (req,res) => {
    try{
        const searchInput = req.body.searchInput;
        console.log(searchInput);
        
        let sql = `SELECT * FROM LIBRARY_TABLE WHERE LIBRARY_ITEM_NAME LIKE '%${searchInput}%'  `;

        let query = await connection.query(sql , (err, result) => {
            if(err) throw err;
            console.log('RAN successfully') 
            res.status(200).json(result);
        })

    }
    catch(err){
        console.error(err)
        res.send(err);
    }
})


//To delete a particular item
router.delete('/:id' , async (req,res) => {
    try{
       
        let sql = `DELETE FROM LIBRARY_TABLE WHERE LIBRARY_ITEM_ID = ${req.params.id} AND CUSTOMER_ID = ${req.user.customer_id} `;

        let query = await connection.query(sql , (err, result) => {
            if(err) throw err;
            console.log('RAN successfully') 
        })

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

        // let libraryContent = await  Library.find({ library_item_id:req.params.id });
        
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
