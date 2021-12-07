const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const staticFiles = path.resolve(__dirname, "public/assets")
module.exports = {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "main.js"
        },
        resolve: {
            extensions: [".js"],
            alias: {
                "@component": path.resolve(__dirname, "src/component")
            }
        } ,
        module: {
            rules:[
                {
                    test:/\.m?js$/,
                    exclude: /node_modules/,
                    use:{
                        loader: "babel-loader"
                    }
                }
            ]
        },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: 'body',
                template: './public/index.html',
                filename: './index.html'
            }
        )
      
    ]
}