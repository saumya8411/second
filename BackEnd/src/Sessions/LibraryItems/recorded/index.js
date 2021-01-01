const Router = require('express').Router();
const auth = require('../../../middleware/deepakAuth');
const { db } = require('../connections');
const { LibraryItem } = require('../model');
const { ChapterTable } = require('./chapter_table_model');
const { LessonTable } = require('./lesson_table_model');


Router.get('/:id', auth, async (req, res) => {
    try {
        if (!req.params.id)
            return res.status(400).json({
                success: 0,
                error:'Session id not provided'
            })
        const result = await db.query(`SELECT DISTINCT chapter_number,chapter_name,chapter_learnings,lesson_number,lesson_name FROM
            chapter_tables as c INNER JOIN lesson_tables as l ON c.session_id=l.session_id AND c.session_id=${req.params.id}
        `, { type: db.QueryTypes.SELECT });
        
        if (!result)
            return res.status(400).json({
                success: 0,
                error:'could not fetch details'
            })
        return res.status(200).json({
            success: 1,
            result
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: 0,
            error: 'Unable to fetch details',
            errorReturned:err
        })
    }
})

Router.post('/',auth,async (req, res) => {
    // console.log(req.files);
    try {
        let flg = 0;
        const session_id = req.body.session_id;
        if (!session_id)
            return res.status(400).json({
                success: 0,
                error:'please provide session id'
            })

        const chapterData = JSON.parse(req.body.bodyPart);
        let lessonData = [];
        chapterData.forEach((chapter, index) => {
            // console.log(chapter, index);
             chapter.lessions.forEach((doc, lessionIndex) => {
                // console.log('doc is \n',JSON.parse(doc).name);
                lessonData.push({
                    chapter_id: index + 1,
                    lesson_number:lessionIndex+1,
                    lesson_name:JSON.parse(doc).name
                })
            })
        });
        
        // saves all files to library_items table
        if (req.files) {
            try{
                for (const [key, value] of Object.entries(req.files)) {
                    const savedLibItem = await LibraryItem.create({
                        session_id,
                        session_type: 'Recorded Session',
                        customer_id: req.user.customer_id,
                        item_name: value.name,
                        item_type: key.split(' ')[4],
                        item_url: 'https://www.google.com',
                        item_size:value.size
                    })
                    if (!savedLibItem){
                        flg = 1;
                        return res.status(400).json({
                            success: 0,
                            error:'failed to save library item'
                        })
                    }
                }
            } catch (err) {
                flg = 1;
                return res.status(400).json({
                    success: 0,
                    error:'unable to save files'
                })
            }
        }
        
        //save files
        if(req.files){
            const filesArray = Object.keys(req.files).map(key => req.files[key])
            // console.log(filesArray)
            filesArray.forEach(doc => {
                doc.mv(`${process.env.FILE_UPLOAD_PATH}${doc.name}`, err => {
                    if (err) {
                        flg = 1;
                    console.error(err);
                        return res.status(500).josn({
                            success: 0,
                            error: 'could not upload file',
                            errorReturned:JSON.stringify(err)
                    });
                    }
                });
            })
        }
        
        // // saves chapterdata to chapter_table 
        if(!flg)
            await chapterData.forEach(async(chapter, index) => {
                // console.log(chapter, index);
                try {
                    const savedChapter = await ChapterTable.create({
                        session_id,
                        customer_id: req.user.customer_id,
                        chapter_name: chapter.name,
                        chapter_number: index + 1,
                        chapter_learnings:chapter.learning
                    })
                    if (!savedChapter){
                        flg = 1;
                        return res.status(400).json({
                            success: 0,
                            error:'could not save chapter data'
                        })
                    }
                } catch (err) {
                    flg = 1;
                    return res.status(400).json({
                        success: 0,
                        error:'unable to save chapter data'
                    })
                }
                
            })
        
        // lesson part is remaining
        if(!flg)
            lessonData.forEach(async (doc) => {
                console.log(doc);
                try {
                    const savedLesson = await LessonTable.create({
                        session_id,
                        customer_id: req.user.customer_id,
                        chapter_id: doc.chapter_id,
                        lesson_name: doc.lesson_name,
                        lesson_number: doc.lesson_number,
                        lesson_video_id: 0,
                        lesson_assignment_id: 0,
                        lesson_quiz_id: 0,
                        lesson_handouts_id: 0
                    });
                    if (!savedLesson){
                        flg = 1;
                        return res.status(400).json({
                            success: 0,
                            error: 'error while saving lession'
                        });
                    }
                } catch (err) {
                    console.log('lesson err', err);
                    flg = 1;
                    return res.status(400).json({
                        success: 0,
                        error: 'unable to save lesson data',
                        errorReturned: JSON.stringify(err)
                    });
                }
            })
        if(!flg)
           return res.status(200).json({
            success:1
         })
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: 0,
            error: 'can not update data',
            errorReturned:JSON.stringify(err)
        })
    }
    
})

module.exports = Router;