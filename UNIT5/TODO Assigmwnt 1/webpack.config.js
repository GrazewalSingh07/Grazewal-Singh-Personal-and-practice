const path = require("path")

module.exports={
    entry:"./src/index.js",
    output:{
    path:path.resolve(".","build"),//folderlocation
    filename:"bundle.js"// filename
    },
    mode:"development", // mode: "production" we change developemnt to production if we want to deploy
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'url-loader?limit=10000',
                  'img-loader'
                ]
              }
        ]
    }
}