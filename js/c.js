var home=Vue.component('home',{
    template:`
    <div style="position: absolute;top:0;left:0;">
          <Nav></Nav>
          <router-view></router-view>
    </div>
    `
})

var Nav=Vue.component('Nav',{
    template:`
    <div class="Nav" active>
        <router-link :to="item.url" v-for="(item,key) in Navdata" :key="key" exact class="aa">{{item.title}}</router-link>
        
         <router-link to="/login" v-if="!islogin" v-show="" class="aa">login</router-link>
       
       <span v-if="islogin" class="info" @click="show">
       <a class="aa">{{name}}</a>
            <span  class="logout" v-show="isshow" @click="logout">退出</span>
       </span>
</div>
    `,
    data(){
        return{
            Navdata:[
                {title:"首页",url:'/'},
                {title:"公司简介",url:'/info'},
                {title:"文档说明",url:'/doc'},

            ],
            islogin:false,
            name:"",
            isshow:false
        }
    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
            this.del("login");
            router.push("/")
        }
    }
})
var homecon=Vue.component('homecon',{
    template:`<div style="position: relative;height: 80vh">
        <img  class="img" src="http://www.sxuek.com/statics/images/uek/new_logo.png" alt="tupain"> 
</div>`
})

var info=Vue.component('info',{
    template:`
<div style="">
    <Nav></Nav>
    <transition name="opacity" mode="out-in">
        <router-view></router-view>
    </transition>
</div> 
`
})
var list=Vue.component('list',{
    template:`
     <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
    <router-link to="/con/1" tag="a" active-class="ab">
     <img class="mui-media-object mui-pull-left" src="img/shuijiao.jpg">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
    </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
    <router-link to="/con/2" tag="a" active-class="ab">
        <img class="mui-media-object mui-pull-left" src="img/muwu.jpg">
            <div class="mui-media-body">
                木屋
                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
    </router-link>
      
           
       
    </li>
    <li class="mui-table-view-cell mui-media">
         <router-link to="/con/3" tag="a" active-class="ab">
            <img class="mui-media-object mui-pull-left" src="img/cbd.jpg">
            <div class="mui-media-body">
                CBD
                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
        </router-link>
    </li>
</ul>
    `
})
var con =Vue.component('con',{
    template:`
    <div style="position: absolute;top:0;left:0;padding-top: 44px;">
        {{$route.params.id}}
    </div>
    `
})


//文档
var doc=Vue.component('doc',{
    template:`
<div style="position: absolute;top:0;left:0;">
    <Nav></Nav>   <!--两个子路由时，写个标识name-->
    <router-view name="left" class="left"></router-view>    
    <router-view name="right" class="right"></router-view>    
</div>   
`,
    beforeRouteEnter(to,from,next){

        next(function(vm){
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})

var leftD=Vue.component('leftD',{
    template:`
    <div>
        <ul >
            <li class="l1">
                        基础
            </li>
        </ul>
        <ul>
            <li class="l2">
            <router-link to="#one" active-class="ab">安装</router-link>
            </li>
        </ul>
        <ul>
            <li class="l2">
                <router-link to="#two" active-class="ab">介绍</router-link>
            </li>
        </ul>
        <ul>
            <li class="l2">
            <router-link to="#three" active-class="ab">vue 实例化</router-link></li>
        </ul>
        <ul>
            <li class="l2">
            <router-link to="#four" active-class="ab">模板语法</router-link></li>
        </ul>
        <ul >
            <li class="l1">过渡&动画</li>
        </ul>
        <ul>
            <li class="l2"> <router-link to="#five" active-class="ab">进入/离开 & 列表过渡</router-link></li>
        </ul>
    </div>
    
    `,
    watch:{
    $route(){
        var hash = this.$route.hash.slice(1);
            console.log(hash);

            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber: document.querySelector('.right').scrollTop})
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: document.querySelector('#'+hash).offsetTop-40}, 500)
                .onUpdate(function () {
                    document.querySelector('.right').scrollTop = this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()

    }
    }
})
var rightD=Vue.component('rightD',{
    template:`
    <div>
    <div id="one" class="bb">
    <h3>安装</h3>
     <h4>兼容性</h4>   
Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。Vue.js 支持所有兼容 ECMAScript 5 的浏览器。

      <h4>更新日志</h4>
每个版本的更新日志见 GitHub。 
</div>


    <div id="two" class="bb">
    <h3>介绍</h3>
    <h4>Vue.js 是什么</h4>
Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。

如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架
</div>

    
    
    <div id="three" class="bb">
    <h3>Vue 实例</h3>
    <h4>创建一个 Vue 的实例</h4>
每个 Vue 应用都是通过 Vue 函数创建一个新的 Vue 实例开始的：

var vm = new Vue({
  // 选项
})
虽然没有完全遵循 MVVM 模型，Vue 的设计无疑受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的简称) 这个变量名表示 Vue 实例。

当创建一个 Vue 实例时，你可以传入一个选项对象。这篇教程主要描述的就是如何使用这些选项来创建你想要的行为。作为参考，你也可以在 API 文档 中浏览完整的选项列表。

一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。举个例子，一个 todo 应用的组件树可以是这样的：

Root Instance
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
我们会在稍后的组件系统章节具体展开。不过现在，你只需要明白所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象即可 (一些根实例特有的选项除外)。
</div>



<div class="bb" id="four">
        <h3>模板语法</h3>
Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，在应用状态改变时，Vue 能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上。

如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，直接写渲染 (render) 函数，使用可选的 JSX 语法。

</div>



<div class="bb" id="five">

<h3>进入/离开 & 列表过渡</h3>
<h4>概述</h4>
Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。
包括以下工具：

在 CSS 过渡和动画中自动应用 class
可以配合使用第三方 CSS 动画库，如 Animate.css
在过渡钩子函数中使用 JavaScript 直接操作 DOM
可以配合使用第三方 JavaScript 动画库，如 Velocity.js
在这里，我们只会讲到进入、离开和列表的过渡，你也可以看下一节的 管理过渡状态。
</div>



</div>
    `
})



//登录
var login=Vue.component('login',{
    template:`
    
    <div style="width:100%;height100%;position:absolute;top:0;left:0">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
        </header>
        <div class="mui-content" style="margin-left: ">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
		
		<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			
			</div>
			
        </div>
		</div> 
    `,
    methods:{
        back(){
            router.push("/");
        },
        submit(){

            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/doc")
        }

    }
})