# antDesign === vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### IE兼容设置
安装 babel babel-loader babel-polyfill @babel/plugin-transform-runtime

main.js import ‘babel-polyfill’
babel.config.js
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
    
####   IE兼容2
babel.config.js
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
     ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }],
  ]
}


