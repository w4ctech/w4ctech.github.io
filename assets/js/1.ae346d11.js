(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{167:function(t,e,a){},210:function(t,e,a){"use strict";var s=a(167);a.n(s).a},290:function(t,e,a){"use strict";a.r(e);var s=[{excerpt:"  现象  1. 在使用``electron-vue``进行开发时，每次调试界面打开``devtools``调试，常看到烦人的``Warning ``信息。  ![waring.jpg](https://i.loli.net/2019/11/28/4HoEs2e8FQYxvkJ.png)     ``security-warnings.js``  1. 审查元素发现该文件位于`......",tags:["electron-vue"],id:0,title:"反编译asar文件去除electron-vue的waring信息",lastUpdated:"2019-11-28 11:30",path:"/posts/remove-electron-vue-waring.html"},{excerpt:"  基础知识   模块化   模块化   js模块化    1. js模块化           命名空间          1. 命名空间              1. 一个对象              语法:              ```js              库名.类别名.方法名              ```            ......",tags:["webpack","notes"],id:1,title:"由浅入深学习webpack",lastUpdated:"2019-09-24 12:22:23",path:"/posts/webpack.html"},{excerpt:"  进制分类   二进制（逢二进一）  1.  ``1. 0、1``      - 以0b或者0B开头   八进制（逢八进一）  1.  ``0、1、2、3、4、5、6、7``      - 以0开头         十进制（逢十进一）  1.  ``0、1、2、3、4、5、6、7、8、9``   十六进制（逢十六进一）  1.  ``0、1、2、3、4、5、6、7、8......",tags:["javascript","notes"],id:2,title:"javascript进制转换",lastUpdated:"2019-09-19 15:09",path:"/posts/javascript%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2.html"},{excerpt:" **- 校验数字的表达式**        1. 数字：^[0-9]*$      2. n位的数字：^\\d{n}$      3. 至少n位的数字：^\\d{n,}$      4. m-n位的数字：^\\d{m,n}$      5. 零和非零开头的数字：^(0|[1-9][0-9]*)$      6. 非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(.[0-9]{1,2})?......",tags:["正则","notes"],id:3,title:"常用正则表达式",lastUpdated:"2019-06-20 17:10",path:"/posts/%E5%B8%B8%E7%94%A8%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html"},{excerpt:"  1.React Native相对于原生的ios和Android有哪些优势？  1.性能媲美原生APP  2.使用JavaScript编码，只要学习这一种语言  3.绝大部分代码安卓和IOS都能共用  4.组件式开发，代码重用性很高  5.跟编写网页一般，修改代码后即可自动刷新，不需要慢慢编译，节省很多编译等待时间  6.支持APP热更新，更新无需重新安装APP    缺点：  内存占用相对......",tags:["React","react-native","notes"],id:4,title:"react-native知识点",lastUpdated:"2019-04-09 08:59",path:"/posts/react-native%E7%9F%A5%E8%AF%86%E7%82%B9.html"},{excerpt:"  react组件内三大属性  1.``state``: 值为容器对象, 保存的是组件内可变的数据,组件根据``state``中的数据显示, 要更新界面只要更新``state``即可  2.``props``: 值为容器对象, 保存的是从组件外传递过来的数据, 当前组件只读, 父组件修改了自动显示新数据  3.``refs``: 值为容器对象, 保存的是``n``个有``ref``属性的``d......",tags:["React","notes"],id:5,title:"React知识点整理",lastUpdated:"2019-03-29 15:30",path:"/posts/React%E7%9F%A5%E8%AF%86%E7%82%B9%E6%95%B4%E7%90%86.html"},{excerpt:"  案例对比    > 这是一个下载网络图片并且装载水印，然后显示到ImageView上的代码案例     抽取公用代码    \tpublic class MainActivity extends AppCompatActivity {    \t    private ImageView mImageView;  \t    @Override  \t    protected void ......",tags:["Rxjava","notes"],id:6,title:"RxJava的优势",lastUpdated:"2019-03-20 21:58",path:"/posts/RxJava%E7%9A%84%E4%BC%98%E5%8A%BF.html"},{excerpt:"  添加依赖    \tcompile 'io.reactivex.rxjava2:rxandroid:2.0.1'  \tcompile 'io.reactivex.rxjava2:rxjava:2.0.1'    ---        compile 'io.reactivex.rxjava2:rxandroid:2.1.0'      compile 'io.reactivex.rxja......",tags:["Rxjava","notes"],id:7,title:"Rxjava笔记",lastUpdated:"2019-03-20 15:58",path:"/posts/rxjava%E7%AC%94%E8%AE%B02.html"},{excerpt:' 调度器    > 用于线程调度    使用案例    \tObservable.create(new Observable.OnSubscribe<String>() {  \t\t\t  \t\t@Override  \t\tpublic void call(Subscriber<? super String> subscriber) {  \t\t\tSystem.out.println("正在进行耗时......',tags:["Rxjava","notes"],id:8,title:"Rxjava的线程调度",lastUpdated:"2019-03-18 18:31",path:"/posts/Rxjava%E7%9A%84%E7%BA%BF%E7%A8%8B%E8%B0%83%E5%BA%A6.html"},{excerpt:"  使用步骤    > build.gradle引入依赖    \tcompile 'io.reactivex:rxjava:1.0.14'   \tcompile 'io.reactivex:rxandroid:1.0.1'      创建数据源（被观察者/可观察者），泛型必须是Object的子类    \tObservable observable = Observable.crea......",tags:["Rxjava","notes"],id:9,title:"Rxjava笔记",lastUpdated:"2019-03-18 15:07",path:"/posts/Rxjava%E7%AC%94%E8%AE%B0.html"},{excerpt:" 1. 先打开夜神模拟器  1. `win+R`选择`cmd`进入第三方模拟器的安装目录的`bin`目录下  1. `adb connect 127.0.0.1:62001`  1. `VSCode `命令行或 `Android Studio` 命令行中执行`flutter`项目启动命令。```  `flutter run`  ```  ![cmd.png](https://i.w4ctech.c......",tags:["flutter","tools"],id:10,title:"Android Studio或VSCode在第三方模拟器上运行flutter项目",lastUpdated:"2019-03-16 15:27",path:"/posts/Android%20Studio%E6%88%96VSCode%E5%9C%A8%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%8A%E8%BF%90%E8%A1%8Cflutter%E9%A1%B9%E7%9B%AE.html"},{excerpt:"  map 转换    > map转换，将泛型指定的对象转换成其他类型的对象，可进行多次转换        Observable.create(new ObservableOnSubscribe<String>() {            @Override          public void subscribe(ObservableEmitter<String> emitter)......",tags:["Rxjava","notes"],id:11,title:"Rxjava中的操作符",lastUpdated:"2019-03-16 15:27",path:"/posts/Rxjava%E4%B8%AD%E7%9A%84%E6%93%8D%E4%BD%9C%E7%AC%A6.html"},{excerpt:" ```  import 'package:flutter/material.dart';  import 'package:flutter/foundation.dart';    void main(){    runApp(new MyApp());  }    class MyApp extends StatelessWidget {    @override    Widget buil......",tags:["flutter","notes"],id:12,title:"flutter自定义主题",lastUpdated:"2019-03-13 19:55",path:"/posts/flutter%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98.html"},{excerpt:' 1. App.vue        ```      <template>          <div id="app">              <showregister></showregister>              <register></register>          </div>      </template>        <script>          i......',tags:["vuex","vue","notes"],id:13,title:"vue兄弟组件通信不使用vuex",lastUpdated:"2019-3-3 14:20",path:"/posts/vue%E5%85%84%E5%BC%9F%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1%E4%B8%8D%E4%BD%BF%E7%94%A8.html"},{excerpt:"  **现象**  - 使用`Dio`库在访问api的时候返回``451``状态码    >  451状态码在计算机网上领域中，HTTP 451 因法律原因不可用（英语：HTTP 451 Unavailable For Legal Reasons）是一种HTTP协议的错误状态代码，当用户请求访问某个经政府审核等查核方法后认定不合法的来源时，就会显示这个错误代码。    ![451.jpg](......",tags:["flutter","notes"],id:14,title:"flutter中get请求中返回451的解决方法",lastUpdated:"2019-02-24 09:43",path:"/posts/flutter%E4%B8%ADget%E8%AF%B7%E6%B1%82%E4%B8%AD%E8%BF%94%E5%9B%9E451%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html"},{excerpt:"  **1. 现象**    ![transboundary.gif](https://i.w4ctech.cn/usr/uploads/2019/02/725384706.gif)     2. 解决方法    - 在``rerutn Scaffold``中添加 ``resizeToAvoidBottomPadding: false,``![resizeToAvoidBottomPaddin......",tags:["flutter","notes"],id:15,title:"解决flutter外部容器在键盘弹起时越界的两种方法",lastUpdated:"2019-02-22 09:19",path:"/posts/%E8%A7%A3%E5%86%B3flutter%E5%A4%96%E9%83%A8%E5%AE%B9%E5%99%A8%E5%9C%A8%E9%94%AE%E7%9B%98%E5%BC%B9%E8%B5%B7%E6%97%B6%E8%B6%8A%E7%95%8C%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E6%B3%95.html"},{excerpt:" 1.记事本打开``studio64.exe.vmoptions``文件。 新增              Djava.net.preferIPv4Stack=true       -Didea.updates.url=http://dl.google.com/android/studio/patches/updates.xml       -Didea.patches.url=http://dl......",tags:["Android Studio","notes"],id:16,title:"Android Studio 自动更新失败解决办法",lastUpdated:"2019-02-20 15:06",path:"/posts/Android%20Studio%20%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%A4%B1%E8%B4%A5%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{excerpt:"  启动 / 关闭 Vim   启动  | 命令\t| 作用 |   | ------ | ------ |  | ``vim <file>``\t| 使用 Vim 打开某文件|      退出  以下命令在 Vim 的控制模式下使用。    | 命令\t| 作用|   | ------ | ------ | ------ |  | :q!\t| 抛弃修改并退出|   | ZQ\t| 抛弃修改......",tags:["vim","notes"],id:17,title:"vim 学习笔记",lastUpdated:"2019-01-18 13:16",path:"/posts/vim%20%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html"},{excerpt:"  安装Flutter      1.  ``git clone https://github.com/flutter/flutter.git``   2.  在系统变量``path``新增 ``E:\\flutter\\bin``   3.  新增``PUB_HOSTED_URL``系统变量``https://pub.flutter-io.cn``   4.  新增`` FLUTTER_ST......",tags:["flutter","notes"],id:18,title:"Flutter开发环境搭建",lastUpdated:"2019-01-09 15:07",path:"/posts/Flutter%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.html"},{excerpt:" 公众号一条在文章《那么爱立flag，你一定是积极废人吧！》里，提出了“积极废人”的人设：    ![这三种思维，正在让你变成“积极废人”](https://pic.36krcnd.com/201805/23091456/p5jeobvyqlasr3rc)    网友表示：间歇性踌躇满志，持续性混吃等死，是我本人没错了。    “积极废人”也成为自“佛系青年”、“隐形贫困人口”后，又一个迅速火起来......",tags:["简书"],id:19,title:"那么爱立flag，你一定是积极废人吧！",lastUpdated:"2018-12-24 14:20",path:"/posts/%E9%82%A3%E4%B9%88%E7%88%B1%E7%AB%8Bflag%EF%BC%8C%E4%BD%A0%E4%B8%80%E5%AE%9A%E6%98%AF%E7%A7%AF%E6%9E%81%E5%BA%9F%E4%BA%BA%E5%90%A7.html"},{excerpt:" 《救命，我被蜗牛追杀了》  ------------                      1.          说起来你可能不信，我被一只蜗牛追杀了。    故事还要从半年前说起。    那时候，我和陈沫刚分手，事业也处于低谷，还和父母大吵了一架。总之就是诸事不顺。    正当我准备以服安眠药自杀来结束这糟糕的人生时，奇迹般的事情发生了。    一个中性特征的陌生人出现在我的面前，对我说......",tags:["知乎"],id:20,title:"知乎短篇小说：救命,我被蜗牛追杀了！",lastUpdated:"2018-12-20 17:02",path:"/posts/%E7%9F%A5%E4%B9%8E%E7%9F%AD%E7%AF%87%E5%B0%8F%E8%AF%B4%EF%BC%9A%E6%95%91%E5%91%BD,%E6%88%91%E8%A2%AB%E8%9C%97%E7%89%9B%E8%BF%BD%E6%9D%80%E4%BA%86%EF%BC%81.html"},{excerpt:" 1. **沉溺于「轻易获得高成就感」的事情**      有意无意地寻求用很小付出获得很大「回报」的偏方，哪怕回报是虚拟的。这种行为会提升自己的「兴奋阈值」，让人越来越不容易拥有成就感，从而越来越依赖虚拟的成就感，陷入恶性循环。      症状轻的：沉溺游戏（在虚拟世界中加快时间流逝的速度，使得「成功」来得更快）、种马小说（意淫人能轻易获得想要的东西）；症状重甚至犯法的：赌博（轻易获得「金钱」）......",tags:["知乎"],id:21,title:"知乎高赞：一个人是怎么一步一步废掉的？",lastUpdated:"2018-11-28 01:18",path:"/posts/%E7%9F%A5%E4%B9%8E%E9%AB%98%E8%B5%9E%EF%BC%9A%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%98%AF%E6%80%8E%E4%B9%88%E4%B8%80%E6%AD%A5%E4%B8%80%E6%AD%A5%E5%BA%9F%E6%8E%89%E7%9A%84%EF%BC%9F.html"},{excerpt:" &ensp;&ensp;&ensp;&ensp;旅游圈仿佛有一个隐藏的定律——  &ensp;&ensp;&ensp;&ensp;**＂哪里火哪里就会被破坏＂**  &ensp;&ensp;&ensp;&ensp;玉龙雪山火了，慢慢变成了秃山；茶卡盐湖火了，不久就变成了垃圾场；西藏朝圣火了，去往西藏的路于是就成了肮脏之路。  &ensp;&ensp;&ensp;&ensp;果不其然。  &ens......",tags:["简书"],id:22,title:"简书高赞：毁掉你们的不是抖音，而是你自己！",lastUpdated:"2018-11-08 04:10:03",path:"/posts/%E7%AE%80%E4%B9%A6%E9%AB%98%E8%B5%9E%EF%BC%9A%E6%AF%81%E6%8E%89%E4%BD%A0%E4%BB%AC%E7%9A%84%E4%B8%8D%E6%98%AF%E6%8A%96%E9%9F%B3%EF%BC%8C%E8%80%8C%E6%98%AF%E4%BD%A0%E8%87%AA%E5%B7%B1.html"},{excerpt:" 1. cd类 （切换目录）     - ``cd dirName`` 语法     - ``cd ~`` 切换到home目录     - ``cd ../..`` 切换到目录的上两层  2. ls   （显示目录）     - ``ls [-alrtAFR] [name...]`` 语法                  ```           -a 显示所有文件及目录 (ls内定将文件名或......",tags:["linux","notes"],id:23,title:"linux命令笔记",lastUpdated:"2018-10-16 09:54",path:"/posts/linux%E5%91%BD%E4%BB%A4%E7%AC%94%E8%AE%B0.html"},{excerpt:" 一.更新源：   1. 终端中输入：``leafpad /etc/apt/sources.list`` 进入``sources.list``文件。  2. 修改``sources.list``文件源保存并退出：          ```          kali官方源          deb http://http.kali.org/kali kali-rolling main non-f......",tags:["kail","notes"],id:24,title:"kali linux下安装搜狗输入法",lastUpdated:"2018-10-15 15:41",path:"/posts/kali%20linux%E4%B8%8B%E5%AE%89%E8%A3%85%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95.html"},{excerpt:"如果您看到这篇文章,表示您的 blog 已经安装成功.  ......",tags:"",id:25,title:"欢迎使用 Typecho",lastUpdated:"2018-10-14 20:27",path:"/posts/%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8%20Typecho.html"}],i={name:"Layout",data:function(){return{isHide:!1,needOverlay:!1,content:s}},methods:{clickMenu:function(){this.isHide=!this.isHide,"undefined"!=typeof window&&window.innerWidth<=1190&&(this.needOverlay=!this.needOverlay)},close:function(){this.needOverlay=!this.needOverlay,this.isHide=!this.isHide}}},E=(a(210),a(17)),l=Object(E.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("el-container",{staticClass:"main-container"},[a("my-aside",{attrs:{isHide:t.isHide}}),t._v(" "),a("el-container",{staticClass:"container-warp"},[a("my-header",{attrs:{showIcon:t.isHide},on:{clickMenu:t.clickMenu}},[t._v("\n        >")]),t._v(" "),a("my-main",{attrs:{isHide:t.isHide,content:t.content}})],1),t._v(" "),a("go-top")],1),t._v(" "),a("my-footer",{attrs:{content:t.content,isHide:t.isHide}}),t._v(" "),a("div",{staticClass:"overlay",class:{"overlay--active":t.needOverlay},on:{click:t.close}})],1)}),[],!1,null,"80d5f2bc",null);e.default=l.exports}}]);