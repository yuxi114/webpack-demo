<h1>webpack4.x入门配置</h1>
<strong>注：此文档针对Mac系统，Windows系统未亲自尝试，请谅解！</strong>
<br></br>

1. 首先运行命令 <code>npm install webpack webpack-cli webpack-dev-server -g</code>。
![2018-11-09.10.57.14-1.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.10.57.14-1.png)


2. 安装成功如下:
![2018-11-09.10.56.57-2.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.10.56.57-2.png)


3. 输入命令<code>mkdir config dist src</code>创建三个文件夹，项目根目录下面会看到多出3个文件夹。
![2018-11-09.11.05.22-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.05.22-image.png)


4. 输入命令<code>npm init -y</code>初始化webpack项目，细心的你应该发现编辑器里面多了package.json这个文件。
![2018-11-09.11.04.04-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.04.04-image.png)


5. package.json文件里面的内容是最初的样子
![2018-11-09.11.06.25-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.06.25-image.png)


6. 输入命令touch dist/index.html src/index.js分别dist和src文件夹下面创建一个index.html文件和index.js文件
![2018-11-09.11.08.01-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.08.01-image.png)


7. webpack4.x中打包默认找src/index.js作为默认入口，可以直接在终端中输入命令<cde>webpack</cde>将当前的内容进行一个简单的打包。
![2018-11-09.11.32.46-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.32.46-image.png)


8. 细心的小伙伴应该看到打包的时候终端中会出现黄色的警告提示，原因是：mode是webpack中独有的。有两种打包环境，一个是开发环境：development，另外一个是生产环境：production，打包的时候输入<code>webpack --mode=development</code>或者<code>webpack --mode=production</code>就不会出现警告提示了。
![2018-11-09.11.39.53-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.39.53-image.png)


9. 下面是<code>webapck --mode=production</code>命令打包，这个是代码压缩过的，细心的朋友应该也发现打包后小了很多。
![2018-11-09.11.40.53-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.40.53-image.png)


10. 同时项目文件夹下面多了一个node_modules文件夹。
![2018-11-09.11.41.50-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.41.50-image.png)


11. 输入命令<code>touch config/webpack.dev.js</code>创建文件。
![2018-11-09.11.43.07-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.43.07-image.png)


12. 输入命令<code>rm dist/main.js src/index.js</code>移除掉这两个文件我们自己来配置，且在src文件夹下面创建main.js文件。
![2018-11-09.11.45.53-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.45.53-image.png)


13. 进入到webpack.dev.js文件中进行配置，具体在代码中注释。
![2018-11-09.11.52.09-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.52.09-image.png)


14. 现在不能执行之前的<code>webpack --mode="development"</code>命令了会报下面的错误，这里是因为webpack4打包默认找的src下面的index.js入口，我们前面已经删除了，这里src下面是main.js文件，所以找不到文件就报错。
![2018-11-09.11.56.30-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.11.56.30-image.png)


15. 这里我们到packsge.json里面配置下命令，让打包的时候执行我们在config/webpack.dev.js下面配置的入口。
![2018-11-09.14.34.50-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.14.34.50-image.png)


16. 这个时候我们在终端执行输入命令<code>npm run build</code>重新打包就可以。
![2018-11-09.14.36.25-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.14.36.25-image.png)


17. 现在配置打包时候的入口文件以及出口文件，很多朋友应该也看到webpack.dev.js中的注释的，这里的入口是'./src/main.js'。
![2018-11-09.14.38.24-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.14.38.24-image.png)


18. 这个时候我们有两个文件入口这么办呢？现在我们再src文件夹下面创建main2.js。
![2018-11-09.14.39.37-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.14.39.37-image.png)
![2018-11-09.14.41.00-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.14.41.00-image.png)


19. 现在我们将原来写死的bundle.js给改成了[name].js，这个时候我们再使用之前配置的命令<code>npm run build</code>进行打包，打包完成后，这个时候看下出口文件dist下面也打包生成了两个相同入口名字的文件。
![2018-11-09.15.08.26-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.08.26-image.png)
注：[name]的意思是根据入口文件的名称，打包成相同的名称，有几个入口文件，就可以打包出几个文件。


20. 设置webpack-dev-server，刚开始的时候我们就全局下载这里就不需要下载了，现在需要配置一下devServer，在config.dev.js文件里进行最简单的devServer配置。
![2018-11-09.15.11.24-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.11.24-image.png)


21. 这个时候我们再到packsge.json里面配置下。
![2018-11-09.15.23.09-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.23.09-image.png)


22. 这个时候我们终端输入命令<code>npm run server</code>就可以运行。
![2018-11-09.15.25.18-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.25.18-image.png)


23. 我们再到项目dist文件夹下面的index.html文件中引入打包的两个js。
![2018-11-09.15.27.37-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.27.37-image.png)


24. 保存后再到src文件下面分别给main.js和main2.js文件里面写点简单代码。
![2018-11-09.15.36.37-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.36.37-image.png)
![2018-11-09.15.36.54-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.36.54-image.png)


25. 这个时候再再终端中输入命令<code>npm run server</code>然后再打开浏览器再地址栏输入locahost:8888就可以看到效果了。

<h2>CSS文件打包</h2>
下面学习一下怎么样将我们的CSS文件打包，在学习CSS打包之前，需要先对webpack.dev.config.js里的Loaders配置项进行了解。
<br></br>
1. loaders可以把SASS文件的写法转换成CSS,也可以把我们项目中写的ES6、ES7等给编译成浏览器能解析的css，下面我们先在src文件夹下面创建index.css文件，并且写一些css在里面。

![2018-11-09.15.42.58-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.42.58-image.png)


2. 这个时候需要在入口文件中引入才可以进行打包
![2018-11-09.15.49.38-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.49.38-image.png)


3. 这个时候我们在终端中输入命令进行打包，会看到这样的报错。
![2018-11-09.15.51.27-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.51.27-image.png)


4. 这是因为我们要想用打包css需要下载配置css的loader：style-loader和css-loader在终端输入命令<code>npm install style-loader css-loader --save-dev</code>下载依赖。
![2018-11-09.15.57.40-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.15.57.40-image.png)


5. 现在到webpack.dev.config.js中对module属性中的代码进行配置。
![2018-11-09.16.01.53-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.01.53-image.png)


6. 这个时候我们的css-loader就配置好了，可以在命令终端中试着输入<code>npm run server</code>看下。
![2018-11-09.16.01.39-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.01.39-image.png)


7. 打包成功了，然后再进入到浏览器发现已经有效果了。
![2018-11-09.16.05.19-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.05.19-image.png)


<h2>下面我们来配置JS压缩</h2>
1. 项目上线之前都会对代码进行压缩，很多都是通过插件的方式实现的，这里我们就先来引入一个uglifyjs-webpack-plugin(JS压缩插件，简称uglify)。这里大家需要注意的：虽然uglifyjs是插件，但是webpack版本里默认已经集成，不需要再次安装。我们需要在webpack.dev.config.js中引入uglifyjs-webpack-glugin插件。

![2018-11-09.16.11.21-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.11.21-image.png)


2. 这个时候我们再终端运行命令<code>npm run bulid</code>进行打包。
![2018-11-09.16.16.14-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.16.14-image.png)


3. 如果打包报错，就运行<code>npm install -D webpack-cli webpack</code>重新安装下依赖。
![2018-11-09.16.15.24-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.15.24-image.png)


4. 去看下dist下面的出口main.js文件里面的js都被压缩。
![2018-11-09.16.20.45-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.20.45-image.png)


<h2>打包HTML文件</h2>
1. 现在我们来对html进行打包，这个时候我们需要将之前手动再dist文件夹下面写的index.html文件移到src文件夹下面，并去掉我们的JS引入代码并去掉我们的JS引入代码（webpack会自动为我们引入JS），然后让打包的时候自动再dist文件夹下面生成。

![2018-11-09.16.22.23-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.22.23-image.png)


2. 然后我们对webpack.dev.config.js文件进行配置，先引入html-webpack-plugin插件，然后在终端下载，运行<code>npm install --save-dev html-webpack-plugin</code>命令。
![2018-11-09.16.23.51-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.23.51-image.png)


3. 这个时候再到webpack.dev.config.js的plugins里面进行配置。
![2018-11-09.16.26.09-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.26.09-image.png)


4. 此时我们在终端输入<code>npm run build</code>看见dist文件下面自动为我们生成了一个index.html文件里面自动为我们引入了js如下：
![2018-11-09.16.27.42-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.27.42-image.png)

<h2>CSS中的图片处理</h2>
1. 首先找一张图片，然后在src文件下面的index.html文件中创建一个div然后给一个clss名，然后在css中添加背景图，项目目录：

![2018-11-09.16.33.00-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.33.00-image.png)


2. ./src/index.html文件里面：
![2018-11-09.16.35.27-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.35.27-image.png)


3. ./src/css/index.css文件里面：
![2018-11-09.16.39.17-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.39.17-image.png)


4. 打包会报错。
![2018-11-09.16.40.12-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.40.12-image.png)
这里是因为我们缺少loader的解析,现在需要下载两个解析图片的loader：file-loader和url-loader，运行命令<code>npm install --save-dev file-loader url-loader</code>。

![2018-11-09.16.41.26-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.41.26-image.png)
<strong>解释下：</strong>

file-loader：解决引用路径的问题，拿background样式用url引入背景图来说，我们都知道，webpack最终会将各个模块打包成一个文件，因此我们样式中的url路径是相对入口html页面的，而不是相对于原始css文件所在的路径的。这就会导致图片引入失败。这个问题是用file-loader解决的，file-loader可以解析项目中的url引入（不仅限于css），根据我们的配置，将图片拷贝到相应的路径，再根据我们的配置，修改打包后文件引用路径，使之指向正确的文件。

url-loader：如果图片较多，会发很多http请求，会降低页面性能。这个问题可以通过url-loader解决。url-loader会将引入的图片编码，生成dataURl。相当于把图片数据翻译成一串字符。再把这串字符打包到文件中，最终只需要引入这个文件就能访问图片了。当然，如果图片较大，编码会消耗性能。因此url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。

5. 现在需要我们去webpack.dev.config.js文件配置下
![2018-11-09.16.44.18-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.44.18-image.png)


6. 此刻我们在终端中输入<code>npm run build</code>打包的时候就不会报错了，也可以看到我们的图片被打包了。
![2018-11-09.16.45.30-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.45.30-image.png)

<strong>注意：</strong>为什么只使用了url-loader
有的小伙伴会发现我们并没有在webpack.dev.config.js中使用file-loader，但是依然打包成功了。我们需要了解file-loader和url-loader的关系。url-loader和file-loader是什么关系呢？简答地说，url-loader封装了file-loader。url-loader不依赖于file-loader，即使用url-loader时，只需要安装url-loader即可，不需要安装file-loader，因为url-loader内置了file-loader。通过上面的介绍，我们可以看到，url-loader工作分两种情况：

1.文件大小小于limit参数，url-loader将会把文件转为DataURL（Base64格式）；

2.文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader。

也就是说，其实我们只安装一个url-loader就可以了。但是为了以后的操作方便，我们这里就顺便安装上file-loader。

<h2>css分离和图片路径处理</h2>
1. 这里我们主要学习把CSS从JavasScript代码中分离出来，还有一个是如何处理分离出来后CSS中的图片路径不对问题。现在我们要下载一个css分离的插件：extract-text-webpack-plugin，我们在输入命令<code>npm install extract-text-webpack-plugin --save-dev</code>。

![2018-11-09.16.49.15-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.49.15-image.png)


2. 下载完插件后，需要我们配置一下。
![2018-11-09.16.52.51-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.52.51-image.png)


3. 现在还需要修改一下配置里面css的loader的配置。
![2018-11-09.16.55.03-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.55.03-image.png)


4. 这个时候打包会报错。
![2018-11-09.16.57.40-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.57.40-image.png)


注意： 是因为我们用的是webpack4.0.0以上版本，现在看下package.json文件。
![2018-11-09.16.56.21-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.56.21-image.png)


5. 解决办法，运行<code>npm install --save-dev extract-text-webpack-plugin@next</code>，将插件升级到4.0.0-beta.0。
![2018-11-09.16.59.05-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.16.59.05-image.png)


6. 然后在打包就正常了。
![2018-11-09.17.00.47-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.00.47-image.png)


7. 现在配置下我们的路径问题。

publicPath：是在webpack.dev.config.js文件的output选项中，主要作用就是处理静态文件路径的。在处理前，我们在webpack.dev.config.js 上方声明一个对象，叫website。

![2018-11-09.17.03.21-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.03.21-image.png)

配置完成后，你再使用webpack命令进行打包，你会发现原来的相对路径改为了绝对路径，这样来讲速度更快。
![2018-11-09.17.14.32-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.14.32-image.png)

<h2>处理HTML中的图片</h2>
1. 在webpack中是不喜欢你使用标签<img>来引入图片的，但是我们作前端的人特别热衷于这种写法，国人也为此开发了一个：html-withimg-loader。他可以很好的处理我们在html 中引入图片的问题，如何把图片放到指定的文件夹下，现在下载html-withimg-loader解决的问题就是在hmtl文件中引入<img>标签的问题，运行<code>npm install html-withimg-loader --save-dev</code>安装依赖。

![2018-11-09.17.18.04-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.18.04-image.png)


2. 到webpack.dev.config.js中配置loader。
![2018-11-09.17.20.04-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.20.04-image.png)


3. 这个时候打包会发现已经生成了images文件夹和图片的文件。
![2018-11-09.17.20.58-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.20.58-image.png)

<h2>Less文件的打包和分离</h2>
1. 下面主要说下Less文件如何打包和分离。Less是一门CSS预处理语言，它扩展了CSS语言，增加了变量、Mixin、函数等特性，使CSS更易维护和扩展。首先要安装Less的服务，运行<code>npm install --save-dev less</code>，再运行<code>npm install --save-dev less-loader</code>，安装依赖。

![2018-11-09.17.24.35-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.24.35-image.png)

2. 现在再去webpack-dev.config配置less-loader。
![2018-11-09.17.25.52-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.25.52-image.png)


3. 编写一个less文件，src/css/indexless.less。
![2018-11-09.17.27.12-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.27.12-image.png)


4. 引入到mian.js文件中。
![2018-11-09.17.28.41-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.28.41-image.png)


5. 把Lees文件分离。这里和上面css文件分离基本一样。
![2018-11-09.17.29.55-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.29.55-image.png)


6. 配置好，打包运行后，你会发现less被分离到了index.css文件里。
![2018-11-09.17.32.00-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.32.00-image.png)

<h2>SASS文件的打包和分离</h2>
1. 其实sass跟less 的配置很像，这里sass首先要安装两个包，node-sass和sass-loader,因为sass-loader依赖于node-sass。

先安装node-sass，运行命令<code>npm install node-sass --save-dev</code>，再安装sass-loader，运行命令<code>npm install sass-loader --save-dev</code>。

2. 配置loader配置
![2018-11-09.17.41.09-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.41.09-image.png)


3. 把SASS文件分离。上面已经下载过了插件，这里直接用就可以了。
![2018-11-09.17.43.27-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.43.27-image.png)


4. 自动处理CSS3属性前缀


1. 首先需要安装两个包postcss-loader和autoprefixer（自动添加前缀的插件）。运行命令<code>npm install --save-dev postcss-loader autoprefixer</code>，安装依赖。
![2018-11-09.17.45.37-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.45.37-image.png)


2. postCSS推荐在项目根目录，建立一个postcss.config.js文件。【注意⚠️：一定要建在根目录下，不然会报错】。
![2018-11-09.17.46.22-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.46.22-image.png)


3. 在webpack.dev.cnfig.js中配置
![2018-11-09.17.47.21-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.47.21-image.png)


4. 现在在index.css中写一些代码不带前缀的，命令打包后在看下，这个时候已经自动为我们加上了前缀。
![2018-11-09.17.52.38-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.52.38-image.png)

<h2>消除未使用的CSS</h2>
使用PurifyCSS可以大大减少CSS冗余，比如我们经常使用的BootStrap(140KB)就可以减少到只有35KB大小。这在实际开发当中是非常有用的。

1. 安装PurifyCSS-webpack，PurifyCSS-webpack要依赖于purify-css这个包，所以两个都要下载，运行命令<code>npm install purifycss-webpack purify-css --save-dev</code>。
![2018-11-09.17.54.22-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.54.22-image.png)


2. 因为我们需要同步检查html模板，所以我们需要引入node的glob对象使用。在webpack.dev.config.js文件头部引入glob和purifycss-webpack。
![2018-11-09.17.55.59-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.55.59-image.png)


3. 然后在webpack.dev.config.js中配置 plugins。
![2018-11-09.17.56.38-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.17.56.38-image.png)
注意： 使用这个插件必须配合extract-text-webpack-plugin这个插件。

<h2>给webpack增加babel支持</h2>
1. 运行命令<code>npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react</code>，安装插件。

![2018-11-09.18.00.55-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.18.00.55-image.png)


2. 在webpack.dev.config.js中配置Babel的方法如下：
![2018-11-09.18.00.38-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.18.00.38-image.png)


3. 然后在main.js中用es6语法写一些代码。
![2018-11-09.18.05.36-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.18.05.36-image.png)


4. 发现报错，因为babel-loader版本低。
![2018-11-09.18.04.50-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.18.04.50-image.png)


5. 解决错误，将babel-loader升级到7.x，运行命令<code>npm install babel-loader@7</code>。
![2018-11-09.18.11.51-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.18.11.51-image.png)

6. 打包成功。
![2018-11-09.18.12.36-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.18.12.36-image.png)


2. .babelrc配置
虽然Babel可以直接在webpack.config.js中进行配置，但是考虑到babel具有非常多的配置选项，如果卸载webapck.config.js中会非常的雍长不可阅读，所以我们经常把配置卸载.babelrc文件里。

在项目根目录新建.babelrc文件，并把配置写到文件里。
![2018-11-09.18.15.04-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.18.15.04-image.png)

ENV：
现在网络上已经不流行babel-preset-es2015，现在官方推荐使用的是babel-preset-env,那我们为了紧跟潮流，我们在讲一下env的配置方法。
首先需要下载，<code>npm install --save-dev babel-preset-env</code>。

![2018-11-09.18.18.11-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.18.18.11-image.png)


然后修改.babelrc里的配置文件。其实只要把之前的es2015换成env就可以了。
![2018-11-09.18.17.57-image.png](https://raw.githubusercontent.com/yuxi114/img/master/2018-11-09.18.17.57-image.png)