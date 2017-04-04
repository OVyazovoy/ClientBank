const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    VERSION = process.env.npm_config_BUILD_VER?'build_'+process.env.npm_config_BUILD_VER+'_':'';

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'src/index.jsx')
    ],

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
        loaders: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['eslint-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff2|woff|ttf|eot)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
        extensions: ['.js','.jsx']
    },

    plugins:
        [
            new CopyWebpackPlugin([{
                from: 'src/static/',
                to: path.join(__dirname, `dist/static/`),
                toType:'dir'
            }]),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
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