const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html'
        })
    ]
}