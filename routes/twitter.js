'use strict'

const express = require('express');
let router = express.Router();
const OAuth = require('oauth');
require('dotenv').config()

let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.APP_CONS_KEY,
  process.env.APP_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

router.get('/',function(req, res, next) {
  let query;
  // console.log(req.query);
  if(JSON.stringify(req.query) == JSON.stringify({})){
    query = 'hacktiv8';
  } else {
    query = req.query['q'];
  }
  // console.log(query);


    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${query}`,
      process.env.ACCESS_TOKEN, //test user token
      process.env.ACCESS_TOKEN_SECRET, //test user secret
      function (e, data){
        if (e) res.send(e);
        res.send(data);
      });
    });

    router.get('/timeline',function(req, res, next) {
      let query;
      if(JSON.stringify(req.query) == JSON.stringify({})){
        query = 'hacktiv8';
      } else {
        query = req.query['q'];
      }
      // console.log(query);


        oauth.get(
          'https://api.twitter.com/1.1/statuses/user_timeline.json',
          process.env.ACCESS_TOKEN, //test user token
          process.env.ACCESS_TOKEN_SECRET, //test user secret
          function (e, data){
            if (e) res.send(e);
            res.send(data);
          });
        });

module.exports = router;
