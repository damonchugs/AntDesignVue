module.exports = {
    presets: [
        ['@vue/app', {
            "targets": {
                "browsers": "ie 11"
            }
        }]
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "useESModules": false
            }
        ]
    ]
}