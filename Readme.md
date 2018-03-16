# 项目说明

## 解决方案

### 自适应:

1.通过scss编写了函数，对1200px下ucd设计图进行px到rem的转换计算;

2.然后在window窗体resize的时候通过js修改html的font－size做到界面自适应；

3.通过媒体查询，在不同的分辨率节点下做样式重载

4.设置meta的viewport属性，对使用设备进行进行配置

### 布局和兼容性

1.布局的时候使用flex布局，支持目前主流浏览器和ie10；display: -ms-flexbox;  /* 混合版本语法: IE 10 */

2.引入reset.css清除浏览器的默认标签样式

3.对ie和其它浏览器的某些特性做兼容性处理，比如opacity

## 工程搭建

### 技术选型
   由于homework不让使用第三方的框架和库，所以工程就使用了如下内容：
   
   1. webpack
   
   - 对静态资源做打包,对es6的语法通过bebel-preset-2015转换成es5
   - 对svg和png，css，js文件进行打包处理，输出bundle.js 
   
   2. scss 
   
   － 因为需要做设备自适应，所以主要使用scss提供的变量可以对默认参数进行存储，放置多处掉用
  
  ```
   $defaultTextColor:#fff default!;
  ```
  
  － 使用了scss提供的函数，对1200px像素下的ucd设计图做rem的转换，然后在不同分辨率下通过js文件修改rem的基数，以便自适应
  
  ```
   @function px2rem($px){
      $rem = 1400/100;  // ucd图纸在1400px图纸下进行的标注
      @return($px/$rem)+'rem' // 将px转换成了rem
   }
   然后通过resize时间添加addeventlistener或者ie下attachEvent对resize事件做监听，然后根据可视区大小计算出html的font-size，也就是rem的值，控制界面自适应
  ```

   3. fonticon字体库

   - 图标全是使用homework提供的fonticon，也是通过url－loader让webpack打包处理；
   - 引用方式：icon icon－xxx和通过伪元素after的content属性加载

### 工程目录    

```
    - src为源文件
    - fonts-icons 字体库
    - logo
    - sources
        - css
        - img
        - js
    - dist为webpakck编译后的文件
    - index.html为界面的内容
    - package.json为项目依赖，使用yarn install 就可以安装所以项目依赖
    - webpack.config.json 为webpack打包工具的配置文件

```

### 设置yarn

- 将yarn加载node-sass的源设置成taobao的源头，否则会报错

```
    yarn config set registry https://registry.npm.taobao.org
    yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
```

### 项目启动

```
    yarn install ; // 安装项目依赖
    yarn run start ; // 在package中写的scripts脚本，通过webpack热加载监听文件变化，用于开发

    在浏览器中打开跟路径下的index.html就可以访问
```
