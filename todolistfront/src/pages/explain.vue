<template>
  <div class="container">
    <el-divider><i class="el-icon-star-on"></i></el-divider>

    <h2>使用说明</h2>
    <br />

    <li>
      <p>输入框输入任务后，按下回车会自动将任务添加到未完成列表里面</p>
    </li>
    <br />
    <li>
      <p>
        未完成列表里面的每一项任务都可以修改，任务完成后可以添加到已完成列表
      </p>
    </li>
    <br />

    <li>
      <p>已完成列表里面的任务可以删除</p>
    </li>
    <br />

    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <h2>项目配置</h2>
    <br />

    <li>
      <p>
        前端：<br />
        <br />
        axios": "^0.27.2"<br />
        <br />

        "core-js": "^3.24.1"<br />
        <br />

        "element-ui":"^2.15.9"<br />
        <br />

        "less": "^4.1.3"<br />
        <br />

        "less-loader": "^11.0.0"<br />
        <br />

        "qs":"^6.11.0"<br />
        <br />

        "vue": "^2.6.14"<br />
        <br />

        "vuex": "^3.6.2"<br />
        <br />

        "vue-router": "^3.5.2"<br />
        <br />
      </p>
    </li>
    <el-divider></el-divider>
    <li>
      <p>
        后端:<br />
        <br />

        "express": "^4.18.1"<br />
        <br />

        "body-parser": "^1.20.0"<br />
        <br />

        "cors": "^2.8.5"<br />
        <br />

        "moment": "^2.29.4"<br />
        <br />

        "mysql": "^2.18.1"<br />
        <br />
      </p>
    </li>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <h2>开发记录</h2>
    <br />

    <li>
      <p>
        前端:<br />
        <br />

        axios发送的请求体的Content-Type的设置要与后台相对应<br />
        <br />

        axios可以在请求拦截器里面用qs模块序列化请求参数，因为axios会将请求里面的data转换为json格式，与后台要求的格式不符<br />
        <br />

        axios可以在响应拦截器里面对后台传过来的数据进行预处理<br />
        <br />

        axios封装好的http请求模块，导入main.js注册到vue实例上全局使用<br />
        <br />

        父组件可以通过prop给子组件传递数据，父组件在子组件的实例上添加属性传入自身的属性或方法，子组件通过prop来接收父组件的属性或方法<br />
        <br />

        vuex可以存储全局数据，用于父子组件间通信，并在main.js注册到vue实例上全局使用<br />
        <br />

        vuex的state存储后台传来的数据<br />
        <br />

        vuex的mutations修改并设置state的数据<br />
        <br />

        vuex的action用commit委任mutations来设置state里面的数据<br />
        <br />

        在vuex的action里面使用Vue.prototype.$http里面封装好的http请求<br />
        <br />

        在组件里面使用this.$store.dispatch来调用store里面的action来设置数据<br />
        <br />

        .vue文件里面的this指向的vue实例对象，.js里面的this指向是js文件本身，.js文件里面使用全局注册的Vue.prototype来使用相关的方法<br />
        <br />

        在vue.config.js里面配置代理跨域，设置好后台接口的基本url<br />
        <br />

        在vue.config.js里面配置devServer可以作为开发环境下的请求代理路由<br />
        <br />

        在vue.config.js和package.json里面设置eslint的规则，关闭语法检查，未使用报错，命名报错<br />
        <br />

        element-ui也在main.js里面导入并挂载到vue实例上<br />
        <br />

        element-ui里面一些自定义的class类的样式可以通过 /deep/ 类名
        来修改组件的布局和样式。deep会影响子组件的样式 <br />
        <br />

        element-ui里面栅格布局是24列<br />
        <br />

        父组件设置为display:flex流式布局，子组件设置flex:1会占据一行的剩余空间<br />
        <br />

        前端的任务的添加，修改，删除都会触发http请求，并修改store里面的数据<br />
        <br />
      </p>
    </li>
    <el-divider></el-divider>
    <li>
      <p>
        后端:<br />
        <br />

        在mysql.js文件里面设置数据库连接的基本配置<br />
        <br />

        mysql的TIMESTAMP数据类型的default可以设置现在的时间和更新时触发时间的修改<br />
        <br />

        mysql的配置里面要设置时区，不然TIMESTAMP的数据格式不是常见格式，也可用通过momentjs格式化传过来的时间数据<br />
        <br />

        使用express的router来封装http响应，每一次修改，删除，添加都返回全部的未删除的数据<br />
        <br />

        删除的http响应，并没有真正删除mysql里面的数据，只是将delete_time字段的数据设置为当前时间，表示已经删除，为什么没有删除数据呢？以后拓展历史记录模块的时候可以使用此数据<br />
        <br />

        使用body-parser来解析http请求的body<br />
        <br />

        引入cors模块来解决跨域问题<br />
        <br />
      </p>
    </li>
    <el-divider></el-divider>

    <li>
      <p>
        服务器部署<br /><br />
        为了方便，快捷地部署网站前端和后端，我使用的是宝塔可视化界面来操作腾讯云<br />
        <br />
        在宝塔配置安装mysql,phpmyadmin,nginx,php,pm2管理器<br />
        <br />
        先配置数据，在本地将mysql的todolist表文件导出结构，得到.sql文件，然后在phpmyadmin里面创建数据库，执行sql语句创建todolist表<br />
        <br />
        在宝塔的软件商店，打开pm2管理器，用来创建node环境下的项目，将本地的后台项目上传到服务器中的文件夹中，修改Node的版本，添加express和express-generator模块等相关模块<br />
        <br />
        上传后台项目后要修改mysql连接的相关配置，打开pm2管理器，重新启动项目，监听端口为3333，表示成功启动<br /><br />
        然后在网站里面创建站点，将前端项目打包后上传到网站目录下，设置监听端口为8100，然后在配置文件里面设置nginx反向代理(proxy_pass)的路由为后端接口地址<br /><br />
        前后端都需要在腾讯云的防火墙里面开放对应的端口
      </p>
    </li>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
h2 {
  text-align: center;
}
.container {
  li {
    p {
      font-size: 14px;
      margin-left: 4em;
    }
  }
}
</style>