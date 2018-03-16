module.exports = {
    entry: __dirname + '/src/source/js/index.js', // js入口文件
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js' // 将js，css都打包到dist目录下的bundle.js文件中，[name]变量可以指代entry的同名文件
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader', // 使用babel和babel-presets-2015将es6语法转换成es5
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style-loader!css-loader!sass-loader?name=[path][name].[ext]' // 使用sass-loader将scss文件转换成css文件
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024&name=[path][name].[ext]'
            }
        ]
    },
    mode: 'development'
}