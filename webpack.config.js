const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    VERSION = process.env.npm_config_BUILD_VER?'build_'+process.env.npm_config_BUILD_VER+'_':'';
module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),

    output: {
        filename: `${VERSION}bundle.js`,
        path:  path.join(__dirname, 'dist')
    },

    devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['eslint']
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel-loader'
            },
            {
                test: /\.scss$/,
                // loader: 'style!css!sass'
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', "css!sass")
            },
            {
                test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: [
                    `url-loader?name=dist/fonts/[name]_[hash].[ext]`
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader?name=dist/img/[name]_[hash].[ext]&limit=10000'
                ]
            }
        ]
    },

    devtool: 'eval-source-map',

    resolve: {
        extensions: ['','.js','.jsx']
    },

    plugins:
        [
            // new CopyWebpackPlugin([{
            //     from: 'src/assets/index.html',
            //     to: path.join(__dirname, `dist/${VERSION}_index.html`)
            // }]),
            new ExtractTextPlugin(`${VERSION}style.css`, {
                allChunks: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false }
            }),
            new HtmlWebpackPlugin({  // Also generate a test.html
                version: VERSION,
                filename: path.join(__dirname, `dist/index.html`),
                template: 'src/assets/index.html'
            })
        ]
};