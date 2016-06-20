/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const Twitter = require('twitter');
require('dotenv').config();

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8080 : process.env.PORT;
const app = express();

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('/', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'src/index.html')));
    res.end();
  });

  app.get('/api/user', function(req, res, next) {
    twitterClient.get('users/show', {screen_name: 'joshrezende'}, function(error, dataObj, response){
      if (!error) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(dataObj));
      }
    });
  });

  app.get('/api/stream', function(req, res, next) {
    twitterClient.get('statuses/user_timeline', {screen_name: 'joshrezende'}, function(error, dataObj, response){
      if (!error) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(dataObj));
      }
    });
  });

  app.get('/api/who-follow', function(req, res, next) {
    twitterClient.get('users/suggestions/entretenimento/members', {}, function(error, dataObj, response){
      if (!error) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(dataObj));
      }
    });
  });

  app.get('/api/trends', function(req, res, next) {
    twitterClient.get('trends/place', {id: 455825}, function(error, dataObj, response){
      if (!error) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(dataObj));
      }
    });
  });

} else {
  app.use(express.static(__dirname + '/src'));
  app.get('/', function response(req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
