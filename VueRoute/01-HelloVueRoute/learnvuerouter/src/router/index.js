//配置所有路由相关的信息
import Vue from 'vue'
import Router from 'vue-router' //'vue-router'是我们安装的框架
//import HelloWorld from '@/components/HelloWorld'
// 传统的路由导入方式
// import Home from '../components/Home'
// import About from "../components/About";
// import User from '../components/User';

// 使用路由懒加载进行导入
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
// 嵌套的子路由
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

//routes:配置路由和组件之间的映射关系
const routes = [
  //想要在打开网页的时候默认显示是首页，那就配置一个默认路由，重定向到/home下
  {
    path:'',
    redirect:'/home'
  },
  //这里面配置的是一个组件一个url的映射关系
  {
    path:'/home',
    component:Home,
    //定义元数据,添加title属性
    meta:{
      title:'首页'
    },
    //嵌套子路由
    children:[
      {
        path: '',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path: 'message',
        component:HomeMessage
      }
    ]
  },
  {
    path:'/about',
    meta:{
      title:'关于'
    },
    component:About,
    //定义一个独享的前置守卫
    beforeEnter:(to,from,next) => {
      console.log("about独享的全局守卫")
      next()
    }
  },
  {
    path:'/profile',
    meta:{
      title:'档案'
    },
    component:Profile
  },
  {
    //动态绑定路由2，想要显示一个类似于/user/zhangsan的效果,在这里绑定一下
    // :userId是一个变量
    path:'/user/:userId',
    meta:{
      title:'用户'
    },
    component:User
  }
]
//1.通过Vue.use(插件),安装插件
Vue.use(Router)
//2.创建路由对象，并导出名为routes的对象
const router = new Router({
  //配置模式为history,用来处理hash（默认是hash），中出现的url中含有#的情况
  mode:'history',
  //routes:配置路由和组件之间的映射关系
  routes: routes
})


//实现导航守卫,拦截导航跳转,实现导航更改时,标题同样发生变化
//前置守卫(钩子) 跳转前调用
router.beforeEach((to, from, next) => {
  //从from跳转到to  (其实,个人理解,这个to和from都是一个route对象,可以获取到其中定义的数据)
  //但是这样会出一些问题,问题在于,当定位到首页时,会因为首页的路径显示是/home/news 而无法正确显示title
  //所以需要用另一种方式
  // document.title = to.meta.title
  //分析源码获得的另一种方式
  document.title = to.matched[0].meta.title

  console.log("before hook")
  //一定要调用这个next函数,否则就不会实现路由中的跳转,默认路由的跳转是调用该函数的
  next()
})
//后置守卫(钩子) 跳转后调用
router.afterEach(((to, from) => {
  console.log("after hook")
}))


export default router
