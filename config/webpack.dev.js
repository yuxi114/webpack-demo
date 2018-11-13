const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');  // js压缩插件
const htmlPlugin = require('html-webpack-plugin');  // HTML打包插件
const extractTextPlugin = require('extract-text-webpack-plugin');   // css分离插件
const website = { publicPath: "http://localhost:8888/" };
const glob = require('glob');
const PurifyCSSPlugin = require("purifycss-webpack");

module.exports = {
    mode: 'development',
    // 入口文件的配置项
    entry: {
        // main可以随便写
        main: './src/main.js',
        main2: './src/main2.js'
    },
    // 出口文件配置项
    output: {
        // 打包的路径
        path: path.resolve(__dirname, '../dist'),
        // 打包的文件名称
        filename: '[name].js',
        publicPath: website.publicPath  //publicPath：主要作用就是处理静态文件路径
    },
    // 模块，例如解读CSS，图片如何转换、压缩
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                // css分离
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader" },
                        { loader: "postcss-loader" }
                    ]
                })
            },
            //less loader
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    fallback: "style-loader"    // use style-loader in development
                })
            },
            //scss loader
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"    // use style-loader in development
                })
            },
            //image loader
            {
                test: /\.(png|jpg|gif|jpeg)/,  // 是匹配图片文件后缀名称
                use: [{
                    loader: 'url-loader', // 是指定使用的loader和loader的配置参数
                    options: {
                        limit: 500,  // 是把小于500B的文件打成Base64的格式，写入JS
                        outputPath: 'images/', //打包后的图片放到images文件夹下面
                    }
                }]
            },
            // 处理HTML中的图片
            {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            },
            //babel 配置
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    // 插件，用于生产模板和各项功能
    plugins: [
        new uglify(),   // js压缩插件
        // html压缩插件
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true // removeAttrubuteQuotes是却掉属性的双引号
            },
            hash: true, // 为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS
            template: './src/index.html'    // 是要打包的html模版路径和文件名称

        }),
        new extractTextPlugin("css/index.css"), // 这里的css/index.css是分离后的路径
        new PurifyCSSPlugin({
            //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        })
    ],
    // 配置webpack开发服务功能
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, '../dist'),
        // 服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        // 服务端压测是否开启
        compress: true,
        // 配置服务端口号
        port: 8888
    }
}