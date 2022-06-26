const path = require('path')

module.exports = {
    entry : "./JV/index.js",
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "bundle.js"
    }
}