var path = require('path')
var webpack = require('webpack');
var CopyPlugin = require('copy-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV
console.log('process',process)

module.exports = {
    entry: NODE_ENV === 'development' ? './src/runner/main.js' : './src/components/index.js',
    // entry: NODE_ENV === 'development' ?'./src/main.js': './index.js',
    // entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    externals: NODE_ENV === 'development' ? {} : {
        vue: 'vue',
        echarts: 'echarts'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // 添加ttf等文件
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    // 配置静态资源的引用路径。publicPath是打包后的 css 引用打包后的 图片的路径。意思是说css引用的的图片需要先回到上级，然后在 images 下寻找图片
                    // publicPath: "/dist/images/",
                    // // 配置打包后的图片 dist 下的 images 文件夹下面。
                    // outputPath: "images/"
                }
            },
            // {
            //   test: /\.(png|jpg|gif|svg)$/,
            //   loader: 'url-loader',
            //   options: {
            //     limit: 99999,
            //   }
            // },
            {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.json$/,
                loaders: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        // publicPath: '/asset/',
        contentBase: path.join(__dirname, 'src', 'runner')
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new CopyPlugin([
            './src/components/meta.json'
        ])
    ])
}
