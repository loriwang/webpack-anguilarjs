var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, './main.ts'),
        vendors: ['jquery', 'lodash']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[hash:8].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        hot: true,
        port: 4000,
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }, {
                loader: 'postcss-loader',
                options:{
                    plugins:(loader) =>[
                        require('autoprefixer')()
                    ]
                }
            }]
        }, {
            test: /\.(.jpe?g|png|gif)$i/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                }
            }]
        }, {
            test: /\.html/,
            loader: ['html-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }]
        }, {
            test: /\.tsx?$/,
            use: ['ts-loader'],
            exclude: /node_modules/
        },{
            // Hide import warnings
            test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
            parser: { system: true },
          },{
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: 'media/[name].[hash:8].[ext]'
                        }
                    }
                }
            }]
        }, {
            test: /\.(woff2|eot|ttf|otf)(\?.*)?$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[hash:8].[ext]'
                        }
                    }
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery',
            '_': 'lodash',
            'lodash': 'lodash'
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerPort:8888
        // }),
        new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)fesm5/, path.join(__dirname, './')),
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        splitChunks: {
            name: true,
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    filename: 'js/[name].bundle.js'
                }
            }
        }
    }
}