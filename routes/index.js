var URL = require('../models/shortUrl')
var UrlShorter = require('../shorter')

module.exports = (app) => {
  app.get('/api', (req, res)=>{
    res.send("Hello World")
  })

  app.post('/api/create', (req, res) => {
      var shortedUrl = UrlShorter(req.body.url)
      var shortUrl = new URL()
      shortUrl.url = req.body.url,
      shortUrl.shortUrl = shortedUrl,
      shortUrl.completeShortUrl = req.headers.host +'/ref?url=' + shortedUrl,
      shortUrl.name = req.body.name,
      shortUrl.phone = req.body.phone,
      shortUrl.email = req.body.email,
      shortUrl.details = req.body.details

      shortUrl.save((error, result)=>{
        if(error) 
          res.send(error)
        else
          res.send(JSON.stringify(result))
      })
  })

  app.get('/api/d/:url', (req, res)=>{
    console.log(req.params.url)
      URL.findOne({ "shortUrl" : req.params.url }, (err, result) => {
        if(err)
          res.send(err)
        else
          res.send(result)
      })
  })

  app.get('/api/u/:url', (req, res) => {
      URL.findOne({ "shortUrl" : req.params.url }, (err, result) => {
        if(err)
          res.send(err)
        else
          res.send(result.url)
      })
  })
}
