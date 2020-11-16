1、什么是 mvvm？
MVVM 是 Model-View-ViewModel 的缩写。mvvm 是一种设计思想。Model 层代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑；View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来，ViewModel 是一个同步 View 和 Model 的对象。

在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

2、mvvm 和 mvc 区别？
mvc 和 mvvm 其实区别并不大。都是一种设计思想。主要就是 mvc 中 Controller 演变成 mvvm 中的 viewModel。mvvm 主要解决了 mvc 中大量的 DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。和当 Model 频繁发生变化，开发者需要主动更新到 View 。

3、vue 的优点是什么？
低耦合。视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的"View"上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。
可重用性。你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 view 重用这段视图逻辑。
独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用 Expression Blend 可以很容易设计界面并生成 xml 代码。
可测试。界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。

4、vue生命周期的理解？
答：总共分为 8 个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

创建前/后： 在 beforeCreate 阶段，vue 实例的挂载元素 el 还没有。
载入前/后：在 beforeMount 阶段，vue 实例的$el 和 data 都初始化了，但还是挂载之前为虚拟的 dom 节点，data.message 还未替换。在 mounted 阶段，vue 实例挂载完成，data.message 成功渲染。
更新前/后：当 data 变化时，会触发 beforeUpdate 和 updated 方法。
销毁前/后：在执行 destroy 方法后，对 data 的改变不会再触发周期函数，说明此时 vue 实例已经解除了事件监听以及和 dom 的绑定，但是 dom 结构依然存在

5、组件之间的传值？
父组件与子组件传值
//父组件通过标签上面定义传值
<template>
    <Main :obj="data"></Main>
</template>
<script>
    //引入子组件
    import Main form "./main"

    exprot default{
        name:"parent",
        data(){
            return {
                data:"我要向子组件传递数据"
            }
        },
        //初始化组件
        components:{
            Main
        }
    }
</script>


//子组件通过props方法接受数据
<template>
    <div>{{data}}</div>
</template>
<script>
    exprot default{
        name:"son",
        //接受父组件传值
        props:["obj"]
    }
</script>
子组件向父组件传递数据
//子组件通过$emit方法传递参数
<template>
   <div @event="events"></div>
</template>
<script>
    //引入子组件
    import Main form "./main"

    exprot default{
        methods:{
            events:function(params){
              console.log(params)
            }
        }
    }
</script>


//

<template>
    <div v-on:click="emitEvent">{{data}}</div>
</template>
<script>
    exprot default{
        name:"son",
        //接受父组件传值
        props:["data"],
        methods: {
          emitEvent() {
            this.$emit('event', params) // 派发函数，并传递值，params是你自己想传的值
          }
        }
    }
</script>

6、路由之间跳转？
声明式（标签跳转 router-link）
编程式（ js 跳转） router.push('index')

7、懒加载（按需加载路由）（常考）
webpack 中提供了 require.ensure()来实现按需加载。以前引入路由是通过 import 这样的方式引入，改为 const 定义的方式进行引入。

不进行页面按需加载引入方式：
import  home   from '../../common/home.vue'
进行页面按需加载的引入方式：
const  home = r => require.ensure( [], () => r (require('../../common/home.vue')))

8、vue 框架中状态管理。在 main.js 引入 store，注入。新建了一个目录 store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

// 新建 store.js
import vue from 'vue'
import vuex form 'vuex'
vue.use(vuex)
export default new vuex.store({
    //...code
})

//main.js
import store from './store'
...

9、vue-router 有哪几种导航钩子?
三种

全局导航钩子
router.beforeEach(to, from, next),
router.beforeResolve(to, from, next),
router.afterEach(to, from ,next)
组件内钩子
beforeRouteEnter,
beforeRouteUpdate,
beforeRouteLeave
单独路由独享组件
beforeEnter