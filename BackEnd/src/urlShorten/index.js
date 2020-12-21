const mysql = require('mysql');
const { route } = require('../Sessions');
const { db, ShortUrl } = require('./model');
const router = require('express').Router();
const  shortUrlGenerator = require('node-url-shortener');

router.post('/genShort', async (req, res) => {
    // await ShortUrl.create({ full: req.body.fullUrl })
    const full = req.body.values.full;
    if (!full)
        return res.status(500).json({
            success: 0,
            error:'Provide full url'
        })
    shortUrlGenerator.short(full, async(err, url) => {
        if (err)
            return res.status(500).json({
                success: 0,
                error: 'Could not create short url...please try again',
                errorReturned:err
            })
        console.log(url);

        const isPresent = await ShortUrl.findOne({ where: { short: url } })
        if (isPresent)
            return res.status(500).json({
                success: 0,
                error:'url already exists..can not create url'
            })
        const record = await ShortUrl.create({
            full,
            short:url
        })
        console.log(record);
        if (!record)
            return res.status(500).json({
                success: 0,
                error: 'Could not create short url'
            })
        return res.status(200).json({
            success: 1,
            shortUrl:url
        })
    });
    // res.redirect('/')
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