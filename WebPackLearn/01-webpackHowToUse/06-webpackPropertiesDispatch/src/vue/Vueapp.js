// 定义一个模板进行代码分离，然后注册到Vue中
export default {
    template:`
        <div>
          <h2>{{message}}</h2>
          <button @click="btnclick">按钮</button>
          <p>{{name}}</p>
        </div>
    `,
    data(){
        return{
            message:"Hello WebPack",
            name:"Echo"
        }
    },
    methods:{
        btnclick(){
            console.log("cao");
        }
    }
}