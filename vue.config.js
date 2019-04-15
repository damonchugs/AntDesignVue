module.exports = {
    publicPath: process.env.NODE_ENV == 'production' ? '/docAnt' : '/',
    devServer: {
        port: 8070,
        https: false,
        hotOnly: false
    }
}