var name = '小明'
var age = 18
var flag = true
function sum(sum1, sum2) {
return sum1 + sum2
}
if (flag) {
    console.log(sum(20,30))
}
// 导出方式一
export {
    flag,
    sum
}
// 导出方式二
export var num1 = 1000
export var height = 1.80

// 导出函数/类
export function sum2(num1, num2) {
return num1+num2
}
export class Person {
    run() {
        console.log('人在奔跑')
    }
}
// var address = '浙江杭州'
// export default address
export default function (s) {
    console.log(s)
}
