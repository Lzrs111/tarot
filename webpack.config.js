module.exports = [{
    entry: ["babel-polyfill",__dirname + '/front/index.js'],
    output: {
        filename: 'index.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            },
            {test: /\.css$/,
            exclude: /node_modules/,
            use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
},{
    entry: ["babel-polyfill",__dirname + '/back/index.js'],
    output: {
        filename: 'server.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            },
        ]
    },
    target:"node",
    node:{
        __dirname:false
        }
}]