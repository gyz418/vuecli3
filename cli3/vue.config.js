const path = require('path')
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')); // 别名
  },
  productionSourceMap: false,  // 不生成map文件
  devServer: { // 跨域： 只有同域名才不会产生跨域，如 www.qq.com
    // proxy: 'http://localhost:1234',  // 这里要填后端的Ip和端口
    /*
    * 设置跨域后，所有的请求都会指向  http://localhost:3000/xxx
    * axios.get('/getuser') =>  代理后  http://localhost:3000/getuser
    *
    * 取消代理
    * axios.get('http://localhost:3000/getuser') 产生跨域。
    * */
    proxy:{
      '/api':{   // 代理的标志     // node api.js 开后端服务
        target:'http://localhost:3000/',   //  /api/b  => http://localhost:3000/b
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
};
