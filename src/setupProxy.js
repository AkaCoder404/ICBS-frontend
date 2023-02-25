/* istanbul ignore file */
const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/devApi", {
        target: "http://iccm.tsinghua.edu.cn/backend/api", //配置后端服务器地址
        changeOrigin:true, 
        pathRewrite: {
            "^/devApi": "",
        }  
    }))
};