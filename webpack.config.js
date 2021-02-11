var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode !== 'production'
    let config = {
        entry: [
            './src/index.jsx'
        ],
        module: {
            rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                        plugins: [
                            require.resolve('@babel/plugin-proposal-export-default-from'),
                            require.resolve('@babel/plugin-proposal-class-properties'),
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean),
                    }
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
        mode: argv.mode,
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
            isDevelopment && new webpack.HotModuleReplacementPlugin(),
            isDevelopment && new ReactRefreshWebpackPlugin()
        ].filter(Boolean)
    };

    if (isDevelopment) {
        config.devtool = 'inline-source-map';
    }

    return config;
};
