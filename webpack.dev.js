const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: './docs',
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        open: false,
        historyApiFallback: true,
        liveReload: true,
        watchFiles: ['src/**/*'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
});