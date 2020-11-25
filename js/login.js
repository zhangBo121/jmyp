// 登录注册选项卡
var h2s = document.querySelectorAll('.content h2') //登录注册标题
var divs = document.querySelectorAll('.login-big>section') //登录注册的盒子
var prevIndex = 0 //保存上一次点击的下标

for (var i = 0; i < h2s.length; i++) {
    // 保存当前点击的下标
    h2s[i].index = i
        // 给每个h2添加点击事件
    h2s[i].onclick = function() {
        // console.log(this.index);

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


// 普通登录，手机号验证
var userPT = document.querySelector('.user01') //手机号输入框
var passPT = document.querySelector('.pass01') //密码输入框
var authCodePT = document.querySelector('.authCode') //验证码输入框
var aCPt = document.querySelector('.login02>p:nth-child(3) span') //验证码框
var btn1 = document.querySelector('.login02>p:nth-child(3) button') //验证码按钮
var checked01 = document.querySelector('.checked01') //自动登录的复选框
var btn2 = document.querySelector('.btn02') //登录按钮
var phone = document.querySelector('.phone') //注册的手机号
var pass = document.querySelector('.pass') //注册的密码
var agree = document.querySelector('.agree') //注册按钮
console.log(agree);
console.log(phone);
console.log(pass);

// 给登录按钮btn2添加点击事件
/* btn2.onclick = function() {
    // 获取用户输入的内容
    var val1 = userPT.value //手机号
    var val2 = passPT.value //密码

    // 开始正则验证
    // ^(\+861|1) 以+86或 1 开头，第二位是在3-9之间，后面有9 为数字结尾
    var regPhone = /^(\+861|1)[3-9]\d{9}$/ //手机号

    // 密码输入判断
    if (val2.length == 6) {
        if (!/[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\:\“\"\'\,\.\/\<\>\！\￥\?\|\{\}\[\]\”]/.test(val2)) {
            alert('111')

        } else {
            alert('只能含有数字有字母')
        }
    } else {
        alert('密码错误')
    }

    if (!regPhone.test(val1)) {
        alert("手机号输入错误")
    }



} */


// 登录
btn2.onclick = function() {
    // 获取用户输入的内容
    var userval = userPT.value
    var passval = passPT.value

    // 开始正则验证
    // ^(\+861|1) 以+86或 1 开头，第二位是在3-9之间，后面有9 为数字结尾
    var regPhone = /^(\+861|1)[3-9]\d{9}$/ //手机号

    // 账号判断
    if (regPhone.test(userval)) {
        // 密码输入判断
        if (passval.length == 6) {
            if (!/[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\:\“\"\'\,\.\/\<\>\！\￥\?\|\{\}\[\]\”]/.test(passval)) {
                // alert('登录成功')
                // ajax传入php检测
                ajax({
                    url: `http://localhost/qian_phone/second/jmyp2/data/user.php`,
                    // url: `../data/user.php`, //相对路径和绝对路径都行
                    type: "post",
                    data: {
                        user: userval,
                        pass: passval,
                        type: 'login'
                    },
                    // dataType:'json',
                    // cache:true,
                    success: function(res) {
                        alert(JSON.parse(res).msg)
                    },
                    error: function(err) {
                        console.log(err)
                    }
                })

            } else {
                alert('只能含有数字有字母')
            }
        } else {
            alert('密码错误')
        }

    } else {
        alert("手机号输入错误")
    }


}

// 注册
agree.onclick = function() {
    // 获取用户输入的内容
    var userval = phone.value
    var passval = pass.value

    // 开始正则验证
    // ^(\+861|1) 以+86或 1 开头，第二位是在3-9之间，后面有9 为数字结尾
    var regPhone = /^(\+861|1)[3-9]\d{9}$/ //手机号


    // 账号判断
    if (regPhone.test(userval)) {
        // 密码输入判断
        if (passval.length == 6) {
            if (!/[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\:\“\"\'\,\.\/\<\>\！\￥\?\|\{\}\[\]\”]/.test(passval)) {
                // alert('登录成功')
                // ajax传入php检测
                ajax({
                    url: `../data/user.php`,
                    type: "post",
                    data: {
                        user: userval,
                        pass: passval,
                        type: 'add'
                    },
                    // dataType:'json',
                    // cache:true,
                    success: function(res) {
                        // console.log(res)
                        alert(JSON.parse(res).msg)
                    },
                    error: function(err) {
                        console.log(err)
                    }
                })

            } else {
                alert('只能含有数字有字母')
            }
        } else {
            alert('密码错误')
        }

    } else {
        alert("手机号输入错误")
    }

}