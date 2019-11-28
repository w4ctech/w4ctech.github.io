(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{308:function(t,e,a){"use strict";a.r(e);var n=a(17),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-react-native相对于原生的ios和android有哪些优势？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-react-native相对于原生的ios和android有哪些优势？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.React Native相对于原生的ios和Android有哪些优势？")]),t._v(" "),a("p",[t._v("1.性能媲美原生APP\n2.使用JavaScript编码，只要学习这一种语言\n3.绝大部分代码安卓和IOS都能共用\n4.组件式开发，代码重用性很高\n5.跟编写网页一般，修改代码后即可自动刷新，不需要慢慢编译，节省很多编译等待时间\n6.支持APP热更新，更新无需重新安装APP")]),t._v(" "),a("p",[t._v("缺点：\n内存占用相对较高\n版本还不稳定，一直在更新，现在还没有推出稳定的1.0版本")]),t._v(" "),a("h2",{attrs:{id:"_2-react-native组件的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-react-native组件的生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.React Native组件的生命周期")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.yupoo.com/forrest071/dede824f/a0e072f5.jpg",alt:""}})]),t._v(" "),a("p",[t._v("生命周期\t调用次数\t能否使用 setSate()\ngetDefaultProps\t1(全局调用一次)\t否\ngetInitialState\t1\t否\ncomponentWillMount\t1\t是\nrender\t>=1\t否\ncomponentDidMount\t1\t是\ncomponentWillReceiveProps\t>=0\t是\nshouldComponentUpdate\t>=0\t否\ncomponentWillUpdate\t>=0\t否\ncomponentDidUpdate\t>=0\t否\ncomponentWillUnmount\t1\t否")]),t._v(" "),a("h2",{attrs:{id:"_3-当你调用setstate的时候，发生了什么事？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-当你调用setstate的时候，发生了什么事？","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.当你调用setState的时候，发生了什么事？")]),t._v(" "),a("p",[t._v("当调用 setState 时，React会做的第一件事情是将传递给 setState 的对象合并到组件的当前状态。\n这将启动一个称为和解（reconciliation）的过程。\n和解（reconciliation）的最终目标是以最有效的方式，根据这个新的状态来更新UI。\n为此，React将构建一个新的 React 元素树（您可以将其视为 UI 的对象表示）。\n一旦有了这个树，为了弄清 UI 如何响应新的状态而改变，React 会将这个新树与上一个元素树相比较（ diff ）。\n通过这样做， React 将会知道发生的确切变化，并且通过了解发生什么变化，只需在绝对必要的情况下进行更新即可最小化 UI 的占用空间。")]),t._v(" "),a("h2",{attrs:{id:"_4-props和state相同点和不同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-props和state相同点和不同点","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.props和state相同点和不同点")]),t._v(" "),a("p",[t._v("1.不管是props还是state的改变，都会引发render的重新渲染。\n2.都能由自身组件的相应初始化函数设定初始值。")]),t._v(" "),a("p",[t._v("不同点\n1.初始值来源：state的初始值来自于自身的getInitalState（constructor）函数；props来自于父组件或者自身getDefaultProps（若key相同前者可覆盖后者）。")]),t._v(" "),a("p",[t._v("2.修改方式：state只能在自身组件中setState，不能由父组件修改；props只能由父组件修改，不能在自身组件修改。")]),t._v(" "),a("p",[t._v("3.对子组件：props是一个父组件传递给子组件的数据流，这个数据流可以一直传递到子孙组件；state代表的是一个组件内部自身的状态，只能在自身组件中存在。")]),t._v(" "),a("h2",{attrs:{id:"_5-shouldcomponentupdate-应该做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-shouldcomponentupdate-应该做什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.shouldComponentUpdate 应该做什么")]),t._v(" "),a("p",[t._v("其实这个问题也是跟reconciliation有关系。\n“和解（ reconciliation ）的最终目标是以最有效的方式，根据新的状态更新用户界面”。\n如果我们知道我们的用户界面（UI）的某一部分不会改变，\n那么没有理由让 React 很麻烦地试图去弄清楚它是否应该渲染。\n通过从 shouldComponentUpdate 返回 false，\nReact 将假定当前组件及其所有子组件将保持与当前组件相同")]),t._v(" "),a("h2",{attrs:{id:"_6-reactjs的props-children-map函数来遍历会收到异常提示，为什么？应该如何遍历？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-reactjs的props-children-map函数来遍历会收到异常提示，为什么？应该如何遍历？","aria-hidden":"true"}},[t._v("#")]),t._v(" 6.reactJS的props.children.map函数来遍历会收到异常提示，为什么？应该如何遍历？")]),t._v(" "),a("p",[t._v("this.props.children 的值有三种可能：\n1.当前组件没有子节点，它就是 undefined;\n2.有一个子节点，数据类型是 object ；\n3.有多个子节点，数据类型就是 array 。\n系统提供React.Children.map()方法安全的遍历子节点对象")]),t._v(" "),a("h2",{attrs:{id:"_7-redux状态管理的流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-redux状态管理的流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 7.redux状态管理的流程")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://pic.yupoo.com/forrest071/0f711f99/33431f36.png",alt:""}}),t._v("\naction是用户触发或程序触发的一个普通对象。\nreducer是根据action操作来做出不同的数据响应，返回一个新的state。\nstore的最终值就是由reducer的值来确定的。（一个store是一个对象, reducer会改变store中的某些值）\naction -> reducer -> 新store -> 反馈到UI上有所改变。")]),t._v(" "),a("h2",{attrs:{id:"_8-加载bundle的机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-加载bundle的机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 8.加载bundle的机制")]),t._v(" "),a("p",[t._v("要实现RN的脚本热更新，我们要搞明白RN是如何去加载脚本的。 在编写业务逻辑的时候，我们会有许多个js文件，打包的时候RN会将这些个js文件打包成一个叫index.android.bundle(ios的是index.ios.bundle)的文件，所有的js代码(包括rn源代码、第三方库、业务逻辑的代码)都在这一个文件里，启动App时会第一时间加载bundle文件，所以脚本热更新要做的事情就是替换掉这个bundle文件。")]),t._v(" "),a("h2",{attrs:{id:"_9-flex布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-flex布局","aria-hidden":"true"}},[t._v("#")]),t._v(" 9.Flex布局")]),t._v(" "),a("p",[t._v('采用Flex布局的元素，称为Flex容器（flex Container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。\n'),a("img",{attrs:{src:"http://pic.yupoo.com/forrest071/bd1d492f/2c0075a1.png",alt:""}})]),t._v(" "),a("p",[t._v("容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。")]),t._v(" "),a("p",[t._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。")]),t._v(" "),a("p",[t._v("容器的属性\n以下6个属性设置在容器上。\nflex-direction  属性决定主轴的方向（即项目的排列方向)。\nflex-wrap   属性定义，如果一条轴线排不下，如何换行。\nflex-flow   flex-flow属性是flex-direction属性和flex-wrap属性的简写形式。\njustify-content   定义了项目在主轴上的对齐方式。\nalign-items  属性定义项目在交叉轴上如何对齐。\nalign-content  align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")]),t._v(" "),a("h2",{attrs:{id:"_10-请简述-code-push-的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-请简述-code-push-的原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.请简述 code push 的原理")]),t._v(" "),a("p",[t._v("code push 调用 react native 的打包命令，将当前环境的非 native 代码全量打包成一个 bundle 文件，然后上传到微软云服务器（Windows Azure）。 在 app 中启动页（或 splash 页）编写请求更新的代码（请求包含了本地版本，hashCode、appToken 等信息），微软服务端对比本地 js bundle 版本和微软服务器的版本，如果本地版本低，就下载新的 js bundle 下来后实现更新(code push 框架实现)。")]),t._v(" "),a("h2",{attrs:{id:"_11-redux中同步-action-与异步-action-最大的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-redux中同步-action-与异步-action-最大的区别是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 11.Redux中同步 action 与异步 action 最大的区别是什么")]),t._v(" "),a("p",[t._v("同步只返回一个普通 action 对象。而异步操作中途会返回一个 promise 函数。当然在 promise 函数处理完毕后也会返回一个普通 action 对象。thunk 中间件就是判断如果返回的是函数，则不传导给 reducer，直到检测到是普通 action 对象，才交由 reducer 处理。")]),t._v(" "),a("p",[t._v("转载自 : "),a("a",{attrs:{href:"https://github.com/forrest23/react-native-interview",title:" react-native-interview",target:"_blank",rel:"noopener noreferrer"}},[t._v(" react-native-interview"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);