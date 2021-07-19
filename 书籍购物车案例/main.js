const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '书籍1',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '书籍2',
                date: '2006-2',
                price: 84.00,
                count: 1
            },
            {
                id: 3,
                name: '书籍3',
                date: '2008-9',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '书籍4',
                date: '2009-9',
                price: 77.00,
                count: 1
            }
        ],
        date1: '20200428',
        date2: '20210327'
    },
    methods: {
        decrement (index) {
            this.books[index].count--
        },
        increment (index) {
            this.books[index].count++
        },
        removeHandle (index) {
            this.books.splice(index, 1)
        },
        dateFormat(date) {
            return date.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")
        }
    },
    computed: {
        //时间相差天数
        getDateCount() {
            date2 = new Date(this.dateFormat(this.date2)).getTime()
            date1 = new Date(this.dateFormat(this.date1)).getTime()
            return Math.abs((date2-date1)/(24 * 60 * 60 * 1000))
        },
        totalPrice() {
            let totalPrice = 0
            /*for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].count
            }*/
            // for in
            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count
            // }
            // for of
            for(let item of this.books) {
                totalPrice += item.price * item.count
            }
            // filter中的回调函数必须返回一个Boolean值
            // true：返回true，自动将这次回调的n加入到新数组中
            // false：函数内部自动过滤
            const nums = [10,30,55,100,234,345]
            let newNums = nums.filter(function (n) {
                return n<100
            })
            console.log(newNums);
            // map函数返回一个表达式，匹配返回值
            let newNums2 = nums.map(function (n) {
                return n*2
            })
            console.log(newNums2);
            // reduce函数，对数组中所有的内容进行汇总
            let total = newNums2.reduce(function (pre,n ) {
                return pre + n
            }, 0)
            console.log(total);
            let total2 = nums.filter(function (n) {
                return n < 100
            }).map(function (n) {
                return n * 2
            }).reduce(function (pre, n) {
                return pre + n
            }, 0)
            console.log(total2);
            let total3 = nums.filter(n => n<100).map(n => n * 2).reduce((pre,n) => pre+n)
            console.log(total3);
            return totalPrice
        }
    },
    filters: {
        showPrice (price) {
            return '￥' + price.toFixed(2)
        }
    }
})
