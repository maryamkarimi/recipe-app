const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const lessToJs = require("less-vars-to-js");
require("babel-polyfill");

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, "./src/styles/ant-theme-vars.less"), "utf-8"))

module.exports = {
    entry: {
        main: ["babel-polyfill", "./src/index.jsx"]
    },
    mode: "development",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    plugins: [
                        ['import', { libraryName: 'antd', style: true }]
                    ]
                }
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: themeVariables,
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            cacheGroups: {
                vendors: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: '[name].js',
                    enforce: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    filename: '[name].js'
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: false
        })
    ],
    devServer: {
        host: 'localhost',
        port: 9001,
        historyApiFallback: true,
        open: true,
        hot: true
    }
};
