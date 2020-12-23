const mysql = require('mysql');
const { route } = require('../Sessions');
const { db, ShortUrl } = require('./model');
const router = require('express').Router();
const shortId = require('shortid');

router.post('/genShort', async (req, res) => {
    // await ShortUrl.create({ full: req.body.fullUrl })
    const full = req.body.values.full;
    if (!full)
        return res.status(500).json({
            success: 0,
            error:'Provide full url'
        })
    
    const id = shortId.generate();
    const isPresent = await ShortUrl.findOne({ where: { short: id } });
    if (isPresent)
        return res.status(500).json({
            success: 0,
            error:'error while generating shortid..please try again'
        })
    const savedRecord = await ShortUrl.create({ full, short:id });
    if (!savedRecord)
        return res.status(500).json({
            success: 0,
            error:'error while saving record to database...please try again'
        })
    return res.status(200).json({
        success: 1,
        shortUrl: id,
        fullUrl:full
    })
  })
  
router.get('/:short', async (req, res) => {
    console.log(req.params.short)
    const short = await ShortUrl.findOne({ where: { short: req.params.short } })
    console.log(short)
    if (!short) return res.sendStatus(404)

    res.send('success');
    // res.redirect(short.full)
})

module.exports = router;