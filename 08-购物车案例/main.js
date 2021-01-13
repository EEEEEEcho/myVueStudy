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
            //let totalPrice = 0;
            // for(let i = 0;i < this.books.length;i ++){
            //     totalPrice += this.books[i].count * this.books[i].price;
            // }
            // for(book of this.books){
            //     totalPrice += book.count * book.price;
            // }
            // return totalPrice;
            return this.books.reduce(function(previous,book){
                return previous + book.count * book.price;
            },0);
        }
    }
});

//函数式编程
const nums = [10,20,110,120,130,140,40,50];
//filter 过滤器，其中定义的function是一个回调函数，它必须返回一个bool值，
//当返回true:函数内部会自动将这次回调的n加入到新的数组中
//当返回false：函数会自动过滤掉这个n
//使用filter找出所有小于100的数
let newNums = nums.filter(function(n){
    return n < 100;
});
console.log(newNums);
//map的使用，将所有的数组中的元素 * 2返回
let new2Nums = newNums.map(function(n){
    return n * 2;
});
console.log(new2Nums);

//new2Nums.reduce(参数一，参数二)  其中参数一是一个函数
//new2Nums = [20, 40, 80, 100]
//这个函数其实就是python中reduce函数，链式反应函数
let total = new2Nums.reduce(function(previous,n){
    return previous + n;
},0);
console.log(total);
//第一次previous=0,(就是传入的第二个参数) n = 20   return 0 + 20= 20
//第二次previous=20 n = 40  return 20 + 40 = 60
//第三次previous=60 n = 80  return 60 + 80 = 140
//第四次previous=140 n = 100  return 140 + 100 = 240
let total2 = nums.filter(function(n){
    return n < 100;
}).map(function(n){
    return n * 2;
}).reduce(function(previous,n){
    return previous + n;
},0);
console.log(total2);