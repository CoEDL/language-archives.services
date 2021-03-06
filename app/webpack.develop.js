"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
    target: "web",
    mode: "development",
    devtool: "eval-source-map",
    entry: ["./src/vendor.js", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        host: "0.0.0.0",
        port: 9000,
        historyApiFallback: true,
        watchContentBase: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            title: "language-archives.services",
            template: "./src/index.html"
        }),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            {
                from: "src/assets/images",
                to: "assets/images"
            }
        ]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: "95-100"
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: { compact: false }
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|jp(e*)g|gif)?$/,
                loader: "file-loader?name=res/[name].[ext]?[hash]"
            }
        ]
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.js",
            src: path.resolve(__dirname, "src"),
            assets: path.resolve(__dirname, "src/assets"),
            components: path.resolve(__dirname, "src/components"),
            configuration: path.resolve(__dirname, "src/configuration"),
            directives: path.resolve(__dirname, "src/directives"),
            routes: path.resolve(__dirname, "src/routes/"),
            services: path.resolve(__dirname, "src/services"),
            store: path.resolve(__dirname, "src/store")
        }
    }
};
