//entry ->output
//console.log(__dirname, 'public');

const path=require('path');

module.exports = {
    entry: './src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },

module: {
rules:[{
    loader:'babel-loader',
    test: /\.js$/,
    exclude: /node_modules/
},{
    test:/\.scss$/,
    use:[
        'style-loader',
        'css-loader',
        'sass-loader'
    ]
}]
},
devtool: 'cheap-module-eval-source-map',
devServer: {
    inline:true,
    port: 8080,
    contentBase: path.join(__dirname,'public'),
    historyApiFallback: true

}
};