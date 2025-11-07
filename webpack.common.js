const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.[contenthash].js',
        // publicPath: './', // 重要：GitHub Pages 静态路径
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.png', '.html', '.vue', ''],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },
    // resolve: {
    //     extensions: ['.js', '.vue'],
    //     alias: {
    //         // '@': path.resolve(__dirname, 'src'),
    //         'vue': 'vue/dist/vue.esm-bundler.js'
    //     },
    // },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpe?g|gif|svg|webp)$/i, type: 'asset/resource' },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: '我的简历',
            filename: "index.html"
        }),
    ],
};