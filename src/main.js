import "./style1.css"
import "./style2.scss"
import "./style3.less"
//let测试
let a = 1
{
    let a=2
}
console.log(a)
//()=>测试
let b = [1, 2, 3, 4]
b.map((x)=>{
    console.log(x)
})
//换行
let msg=`这是一段非常非常长的换行文字，ES6之前是用单引号和\，
现在可以直接用\`,很方便
是吧！`
console.log(msg)