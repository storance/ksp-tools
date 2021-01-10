var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.jsx'
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: require.resolve('babel-loader'),
            options: {

                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                plugins: [
                    'react-hot-loader/babel'
                ]
            }
        },
        { 
            test: /\.css$/, 
            use: [
                "style-loader",
                "css-loader"
            ]
        },
        { 
            test: /\.png$/, 
            loader: "url-loader",
            options: {
                limit: 100000
            }
        },
        { 
            test: /\.jpg$/, 
            loader: "file-loader" 
        },
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader',
            options: {
                limit: 10000,
                mimetype: "application/font-woff"
            }
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader',
            options: {
                limit: 10000,
                mimetype: "application/octet-stream"
            }
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'file-loader'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader',
            options: {
                limit: 10000,
                mimetype: "image/svg+xml"
            }
        }]
    },
    mode: "development",
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        compress: true
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
    ]
};
