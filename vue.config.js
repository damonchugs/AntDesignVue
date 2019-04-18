module.exports = {
    publicPath: process.env.NODE_ENV == 'production' ? '/docAnt/dist' : '/',
    devServer: {
        port: 8070,
        https: false,
        hotOnly: true
    }
}