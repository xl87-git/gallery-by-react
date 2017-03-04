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
<div style="background:#ccc">
#添加所有更改的文件到本地缓存区
git add -A     


#将暂存区文件提交到本地仓库
git commit -m "something you have done"  


#将本地仓库内容上传到远程仓库
git push   
</div>
