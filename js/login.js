// 登录注册选项卡
var h2s = document.querySelectorAll('.content h2') //登录注册标题
var divs = document.querySelectorAll('.login-big>section') //登录注册的盒子
var prevIndex = 0 //保存上一次点击的下标

for (var i = 0; i < h2s.length; i++) {
    // 保存当前点击的下标
    h2s[i].index = i
        // 给每个h2添加点击事件
    h2s[i].onclick = function() {
        console.log(this.index);

        // 给上一次点击的盒子去掉类名
        divs[prevIndex].className = ''
        h2s[prevIndex].className = ''

        // 给当前点击的盒子添加类名、
        divs[this.index].className = 'show'
        h2s[this.index].className = 'lsh2'

        // 更新每次点击的下标
        prevIndex = this.index
    }
}

// 普通登录手机验证登录选项卡
var h3s = document.querySelectorAll('.h3s h3') //登录小标题
var logins = document.querySelectorAll('.login00>section') //登录的大盒子
var prevInx = 0 //保存上一次点击的下标

for (var i = 0; i < h3s.length; i++) {
    h3s[i].index = i //保存当前下标

    // 给每个h3添加点击事件
    h3s[i].onclick = function() {
        // 去掉上一次点击的类名
        logins[prevInx].className = ''
        h3s[prevInx].className = ''

        // 给当前点击的盒子添加类名
        logins[this.index].className = 'active'
        h3s[this.index].className = 'lsh3'

        // 更新下标
        prevInx = this.index
    }
}