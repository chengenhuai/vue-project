'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const fs = require('fs')
const axios = require('axios')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')


const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            usePostCSS: true
        })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [{
                from: /.*/,
                to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
            }, ],
        },
        hot: true,
        contentBase: ".", // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? {
            warnings: false,
            errors: true
        } : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        },
        before(app) {
            app.get('/api', (req, res) => {
                if (req.url === '/favicon.ico') {
                    return;
                }
                let url = 'https://c.y.qq.com/yanchu/cgi-bin/yanchu/mb_api/jsondata.fcg'
                let cong = {
                    g_tk: 5381,
                    sCmd: "week_hot",
                    IDS: 221,
                    format: 2
                }
                axios.get(url, {
                    headers: {
                        referer: "https://p.y.qq.com",
                        host: "p.y.qq.com"
                    },
                    params: cong
                }).then(result => {
                    res.json(result.data.data)
                })
            })
            app.get('/banner', (req, res) => {
                if (req.url === '/favicon.ico') {
                    return;
                }
                let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
                let cong = {
                    g_tk: 5381,
                    uin: 0,
                    format: "json",
                    inCharset: "utf-8",
                    outCharset: "utf-8",
                    notice: 0,
                    platform: "h5",
                    needNewCode: 1,
                    _: 1531815570848
                }
                axios.get(url, {
                    headers: {
                        referer: "https://y.qq.com",
                        host: "y.qq.com"
                    },
                    params: cong
                }).then(result => {
                    res.json(result.data)
                })
            })
            app.get('/carlist', (req, res) => {
                if (req.url === 'favicon.ico') {
                    return;
                }
                let data = fs.readFileSync(path.join(__dirname, '../static/data/carlist.json'))
                res.end(data)
            })
            app.get('/greenTea', (req, res) => {
                if (req.url === 'favicon.ico') {
                    return;
                }
                let data = fs.readFileSync(path.join(__dirname, '../static/data/greenTea.json'))
                res.end(data)
            })
            app.get('/toplist', (req, res) => {
                if (req.url === 'favicon.ico') {
                    return;
                }
                let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
                let cong = {
                    g_tk: "2136343799",
                    uin: "2390116071",
                    format: "json",
                    inCharset: "utf-8",
                    outCharset: "utf-8",
                    notice: 0,
                    platform: "h5",
                    needNewCode: 1,
                    _: 1532004249072
                }
                axios.get(url, {
                    headers: {
                        referer: "https://y.qq.com",
                        host: "y.qq.com"
                    },
                    params: cong
                }).then(result => {
                    res.json(result.data)
                })
            })
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: config.dev.assetsSubDirectory,
            ignore: ['.*']
        }])
    ]
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
                // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors ?
                    utils.createNotifierCallback() : undefined
            }))

            resolve(devWebpackConfig)
        }
    })
})