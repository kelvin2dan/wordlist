const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'main.jsx'),
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.s?css/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'postcss-loader',
                    options: {
                        plugins: [autoprefixer, cssnano]
                    }
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            ['@babel/preset-env', {useBuiltIns: 'usage'}]
                        ],
                        plugins: [
                            '@babel/plugin-transform-classes',
                            '@babel/plugin-transform-arrow-functions',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192 
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Word List',
          minify: {
            removeComments: true, 
            collapseWhitespace: true,
            minifyCSS: true
          },
          hash: true,
          cache: true,
          template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: '9000',
        open: true,
        hot: true,
        compress: true,
        inline: true
    }
}