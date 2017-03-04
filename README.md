# gallery-by-react
photo project by react <br/>
在线预览地址：<a href="https://xl87-git.github.io/gallery-by-react/dist/">demo</a><br/>
在慕课网上跟着视频教程一步步完成的。<br/>
因为和老师录制视频的时间相隔比较久，所以工具的版本都不一样了，导致项目生成的文件相差还是比较大的。<br/>
就像课程中其他同学所说，有不少坑。一个一个踩，一个一个填。遇到的问题在视频下面提问，或者网google多搜搜总能解决的。<br/>
这个项目是使用ReactJs架构来开发的，是个单页面的应用。不涉及路由，不涉及数据流。<br/>
项目使用了Yeoman工具，在立项阶段使用Yeoman生成项目文件、代码结构，方便后续开发。Yeoman基于Nodejs,本地需要安装Nodejs环境。<br/>
我想git , Nodejs 这些一般大家都应该已经配置过了。<br/>

安装Yeoman:   npm install -g yo<br/>

查看版本：yo --version<br/>
进入官网yeoman.io   搜索查看项目生成器，搜索react,会出现很多结果，使用其中的react-webpack；<br/>
安装generator  :   npm install -g generator -react-webpack<br/>
安装之后，查看generator 版本：   npm ls -g --depth=1 2>/dev/null | grep generator-<br/>
其中npm ls -g 列出全局npm包；--depth=1 表示限制树状结构展示最多往下一层；<br/>
尖括号表示重定向， bash中1表示标准输出，2表示标准错误，/dev/null表示空设备文件；<br/>
所以2>/dev/null表示如果执行npm ls -g的过程中有错误消息，就把错误消息重定向到空设备文件中，也就是说在输出中过滤掉错误消息；<br/>
|  通道，将上一个消息的输出作为下一个消息的输入；<br/>
grep generator-  在前一个输出中检索generator开头的内容。<br/>

然后是创建项目，我们现在github中创建，选择MIT license。创建完成后，将项目拉到本地。git clone 项目地址<br/>
进入项目目录，然后执行：   yo react-webpack 项目名    来生成项目。<br/>
回车以后，会有几个选择要选Y/N,是否使用react-router，因为这个项目是单页面程序不需要路由，所以N。<br/>

flux,reflux，alt 这些框架选什么，这些框架主要用来处理react程序中的数据流，多个视图的状态共享、更新、数据维护等，这个程序也不需要，所以N。<br/>
老师在项目中使用的是ES5,我现在使用的是ES6,语法会稍有不同，下面的链接详细讲解了ES5和ES6的对照表：<br/>
http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8<br/>
<p style="color:#ccc">
#运行项目<br/>
npm start<br/>

#打包输出到dist目录<br/>
npm run dist<br/><br/>

#添加所有更改的文件到本地缓存区<br/>
git add -A     <br/><br/>


#将暂存区文件提交到本地仓库<br/>
git commit -m "something you have done"<br/> <br/> 


#将本地仓库内容上传到远程仓库<br/>
git push   
</p>

将项目发布到github.io上时，遇到图片加载不到的问题，因为路径不对，在本地是绝对路径，上传到github中应该使用相对路径。<br/>

按照老师在视频讲解的，把cdf目录下default.js里的publicPath: '/assets/',去掉/，改成publicPath: 'assets/'<br/>
但是我改了，图片还是加载不成功。<br/>
后来看视频下面同学的问答，解决方法是把publicPath: '/assets/'加个.  改成publicPath: './assets/'<br/>

同时把src里面index.html中script中src="/assets/app.js"加个.  改成src="./assets/app.js<br/>

然后就成功了。<br/><br/>

后来我又发现，其中把这两处./同时去掉，改成publicPath: 'assets/'%nbsp;%nbsp;%nbsp;%nbsp;src="assets/app.js<br/>


也是成功的。<br/><br/>

最后我把Main.js中不同的组件拆分出来，放在不同js文件里了。感觉这样清晰一些，要不然Main.js里内容太多<br/>







.
├── /cfg/                       # webpack配置文件存放目录
│   ├── base.js                 # 基础配置
│   ├── default.js              # 默认配置
│   ├── dev.js                  # 开发环境配置
|   ├── dist.js                 # 生成环境配置
│   └── test.js                 # 测试环境配置
├── /dist/                      # 存放最终打包输出的用于生产环境的项目文件
├── /node_modules/              # node模块存放的目录
├── /src/                       # 存放开发环境项目源码
│   ├── /actions/               # flux actions目录（没用到）
│   ├── /components/            # 组件目录
│   ├── /config/                # 配置目录（没用到）
│   ├── /sources/               # flux datasources目录（没用到）
│   ├── /stores/                # flux stores(没用到)
│   ├── /styles/                # 样式文件目录，内有一个App.css基础css文件
│   ├── index.html              # 项目入口文件
│   └── index.js                # js入口文件
├── /test/                      # 单元测试和集成测试目录
│── .babelrc                    # Babel 配置文件
│── .eslintrc                   # ESLint代码风格检测配置文件
│── .gitignore                  # 配置不需要加入Git版本管理的文件
│── .yo-rc.json                 # yeoman的配置文件
│── karma.conf.js               # karma测试框架的配置
│── LICENSE                     # 软件使用许可
│── package.json                # npm的依赖配置项
│── README.md                   # 项目说明文件
│── server.js                   # 项目运行的js文件，命令可查看package.json中的script
└── webpack.config.js           # webpack配置文件，不同环境的配置项在cfg目录下
