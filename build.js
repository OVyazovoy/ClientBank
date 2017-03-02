/**
 * сборка продакшина
 */
process.env.BUILD = 'prod'; // признак PROD сборки
var webpack = require('webpack'),
    config = require('./webpack.config.js');
webpack(config).run(function (err, stats) {
    console.log(stats.toJson());
});