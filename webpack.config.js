

const path = require('path');
const webpack = require('webpack'); // Include webpack to access its plugins

module.exports = {
    entry: {
        frontendQuiz: './index.js',
        jquery: './node_modules/jquery/dist/jquery.min.js',
        bootstrap: "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-webpack.bundle.js',
    },
    plugins: [
        // Automatically load jQuery when $ or jQuery is used
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000,
        hot: true
    }
};