module.exports = {
    pages: {
        index: {
            //入口
            entry: "src/main.js"
        }
    },
    // 关闭语法检查
    lintOnSave: false,
    // 开启代理服务器(第一种方式)
    // devServer: {
    //     //这种配代理的方式只能配置一台服务器，而且不能控制请求转发给后端服务器，public目录下已经有的数据将不在向后端服务器转发
    //     proxy: "http://127.0.0.1:5000"
    // },
    // 开启代理服务器(第一种方式)
    devServer: {
        host: "localhost",
        port: 8080,
        proxy: {
            // 这里可以写多个前缀接口
            "/api": {
                target: "http://127.0.0.1:5000",
                // 将开头为 /api 置为空，配合App.vue里的配置使用
                pathRewrite: { "^/api": "" }
            },
            // "/demo": {
            //     target: "http://127.0.0.1:5001",
            //     pathRewrite: { "^/api": "" }
            // }
        }
    }
}