// 对象中定义
import {flag, sum} from "./aaa.js";

if (flag) {
    console.log("小明是天才, 哈哈哈")
    console.log(sum(40,50))
}
// 直接到如export定义的变量
import {num1, height} from "./aaa.js";
console.log(num1);
console.log(height);

// 导入export的函数
import {sum2} from "./aaa.js";
console.log(sum(900, 100));
import {Person} from "./aaa.js";
var p = new Person()
p.run()
import addr from "./aaa.js"

// console.log(addr);
addr('刘绪俭，你好!')
// 统一全部导入
import * as aaaa from "./aaa.js"

console.log(aaaa.flag)
console.log(aaaa.height)
