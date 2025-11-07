const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'  // CSS 文件输出到 css 目录
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // TerserPlugin 配置
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,  // 删除 console
                        drop_debugger: true,  // 删除 debugger
                    },
                    mangle: true,  // 变量名混淆
                    keep_fnames: false  // 不保留函数名
                }
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
});