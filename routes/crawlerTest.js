    const request = require("request");
    const cheerio = require("cheerio");
    const express = require('express');
    const router = express.Router();
  
  /* GET users listing. */
  router.get('/', function(req, res, next) {
      request({
        url: "http://blog.infographics.tw",
        method: "GET"
      }, function(e,r,b) {
        if(e || !b) { return; }
        var $ = cheerio.load(b);
        var result = [];
        var titles = $("li.item h2");
        for(var i=0;i<titles.length;i++) {
          result.push($(titles[i]).text());
        }
        // console.log(result);
         
        res.send(JSON.stringify(result));
      });
  });
  
  module.exports = router;


