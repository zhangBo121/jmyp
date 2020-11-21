






// 导航部分的点击事件 主体内容区选项卡切换 选项卡
var navs = document.querySelectorAll('.nav ul li')  //导航
var divs = document.querySelectorAll('.content div')
var prevIndex = 0 //保存上一次点击的下标

for(var i = 0 ; i< navs.length;i++){
    // 保存当前点击的下标
    navs[i].index = i
    // 给每个li 添加点击事件
    navs[i].onclick = function(){

        console.log(this.index);
        // 点击后，给当前li 添加类名
        navs[this.index].className = 'active'
        divs[this.index].className = 'show'
        // 取消上一次点击的li 的类名
        navs[prevIndex].className = ''
        divs[prevIndex].className = ''

        // 点击后，更新下标
        prevIndex = this.index
    }
}

