

// 登录注册选项卡
var h2s = document.querySelectorAll('.content h2')  //登录注册标题
var divs = document.querySelectorAll('.login-big>section') //登录注册的盒子
var prevIndex = 0  //保存上一次点击的下标

console.log(divs);
for(var i = 0 ; i < h2s.length ; i++){
    // 保存当前点击的下标
    h2s[i].index = i
    // 给每个h2添加点击事件
    h2s[i].onclick = function(){
        console.log(this.index);
        
        // 给当前点击的盒子添加类名、
        divs[this.index].className = 'show'
        h2s[this.index].className = 'lsh2'
        
        // 给上一次点击的盒子去掉类名
        divs[prevIndex].className = ''
        h2s[prevIndex].className = ''

        // 更新每次点击的下标
        prevIndex = this.index
    }
}


