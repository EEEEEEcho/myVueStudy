const app = new Vue({
    el:"#app",
    data:{
        books:[
            {
                id:1,
                name:"算法导论",
                date:"2006-9",
                price:85.00,
                count:1
            },
            {
                id:2,
                name:"鸟哥的Linux私房菜",
                date:"2006-1",
                price:105.00,
                count:1
            },
            {
                id:3,
                name:"Java8实战",
                date:"2011-3",
                price:72.00,
                count:1
            },
            {
                id:4,
                name:"Java编程思想",
                date:"2008-7",
                price:92.00,
                count:1
            },
        ],
    },
    methods:{
        increment(index){
            this.books[index].count ++;
        },
        decrement(index){
            this.books[index].count --;
        },
        remove(index){
            //移除该项
            this.books.splice(index,1);
        }
    },
    filters:{
        //过滤器，过滤器是一个函数，通过将传入的值进行修饰后返回
        formatPrice(price){
            return "￥" + price.toFixed(2);
        }
    },
    computed:{
        totalPrice(){
            let totalPrice = 0;
            for(let i = 0;i < this.books.length;i ++){
                totalPrice += this.books[i].count * this.books[i].price;
            }
            return totalPrice;
        }
    }
});