const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: 'development',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    entry: {
        'index': './src/index.js'
    },
    output: {
        path: __dirname,
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }
}