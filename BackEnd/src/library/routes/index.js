const router = require('express').Router();
const connectDB = require('../db/connect');
const Library = require('../db/models/library_table');

//Connecting to database
connectDB();

router.get('/' , async (req,res) => {


    //Just using it To insert some data into DB
    // const newContent = new Library({
    //     library_item_id : "2",
    //     customer_id : "2",
    //     library_item_name : "demo",
    //     library_item_type : "quiz",
    //     library_item_size : 1.5,
    //     library_item_location : "india"

    // });

    try{
        // await Library.create(newContent);

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


module.exports = router 
