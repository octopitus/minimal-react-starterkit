var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var app = express();
var compiler = webpack(config);

var host = process.env.HOST || 'localhost';
var port = parseInt(config.port, 10) || 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates', 'dev.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://' + host + ':' + port);
});
