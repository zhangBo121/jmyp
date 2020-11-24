// 1.判断num是否是一个素数
function isPrime(num) {
    //1 不是一个素数，排除1这个值
    if (num === 1) return false;
    //判断num是否是一个素数，
    //如果是素数，函数返回 一个true
    //如果不是素数，函数返回 一个false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            //执行到这里，num不是一个素数
            return false; //不是素数
        }
    }
    //当程序执行到这里，说明num是一个素数
    return true;
}

// 2.数组去重
// 利用indexOf（） 封装数组去重 
function noRepeat(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]); //遍历数组中所有的数据
        // if(arr[i]在 newArr 中不存在)
        //       ||
        if (newArr.indexOf(arr[i]) === -1) { //拿遍历出来的数组判断在新数组中是否存在，存在就不添加进新数组，不存在就添加进去
            newArr.push(arr[i]);
        }
    }
    return newArr; //没加return 外面就输出 undefined
    // return; //return后面没加newArr 外面就输出 undefined
}



// 4.选择排序降序，从大到小，Des表示降序
function choiceSortDes(brr) {
    var temp = 0;
    for (var i = 0; i < brr.length - 1; i++) { //输出比较数的下标

        for (var j = i + 1; j < brr.length; j++) { //被比较数的下标
            if (brr[i] < brr[j]) { //后面的数 比前面的数大时，则交换位置，得出一个大的值  ，大的值放在最前面
                // var temp = brr[i];
                temp = brr[i]; //把第一个数的值 赋值给一个 空
                brr[i] = brr[j]; //再把第二个数的值 赋值 给第一个数
                brr[j] = temp; //然后会得到一个最大的值
            }
        }
    }
    return brr;
}

//5. 选择排序升序，从小到大，Asc表示升序
function choiceSortAsc(brr) {
    var temp = 0;
    for (var i = 0; i < brr.length - 1; i++) { //输出比较数的下标

        for (var j = i + 1; j < brr.length; j++) { //被比较数的下标
            if (brr[i] > brr[j]) { //前面的数 比后面的数大时，则交换位置 ，小的值放在最前面
                // var temp = brr[i];
                temp = brr[i]; //把第一个数的值 赋值给一个 空
                brr[i] = brr[j]; //再把第二个数的值 赋值 给第一个数
                brr[j] = temp; //然后会得到一个最小的值
            }
        }
    }
    return brr;
}

// 6.冒泡排序升序，从小到大，Asc表示升序
function bubblingSortAsc(arr) {
    // console.log(arr);  //这里 会直接把 数组arr 打印出来
    var temp = 0; //temp 翻译为临时的
    for (var i = 0; i < arr.length - 1; i++) { //i 是比较的轮数 ，当前 i = 0 ，会比较 6 次
        // console.log(arr); //这里输出的数组arr 会循环数组长度这么多次 7次
        // console.log(arr[i]); //遍历数组arr 中的元素
        for (var j = 0; j < arr.length - (i + 1); j++) { //每一轮比较的次数
            // console.log(arr);  //输出数组次数 6+5+4+3+2+1 =21 次
            if (arr[j] > arr[j + 1]) { //比较前一个数和后一个数的大小，的出一个大的数，得出来的数放在最后面
                //true 如果前一个数大于后一个数 ，则交换两个数的位置
                temp = arr[j]; //把第一个数的值 赋值给一个 空
                arr[j] = arr[j + 1]; //再把第二个数的值 赋值 给第一个数
                arr[j + 1] = temp; //然后会得到一个最小的值
            }
        }
    }
    return arr;
}

//7. 冒泡排序降序，从大到小，Des表示降序
function bubblingSortDes(arr) {
    // console.log(arr);  //这里 会直接把 数组arr 打印出来
    var temp = 0; //temp 翻译为临时的
    for (var i = 0; i < arr.length - 1; i++) { //i 是比较的轮数 ，当前 i = 0 ，会比较 6 次
        // console.log(arr); //这里输出的数组arr 会循环数组长度这么多次 7次
        // console.log(arr[i]); //遍历数组arr 中的元素
        for (var j = 0; j < arr.length - (i + 1); j++) { //每一轮比较的次数
            // console.log(arr);  //输出数组次数 6+5+4+3+2+1 =21 次
            if (arr[j] < arr[j + 1]) { //比较前一个数和后一个数的大小，的出一个小的数，放在最后面
                //true 如果前一个数小于后一个数 ，则交换两个数的位置
                temp = arr[j]; //把第一个数的值 赋值给一个 空
                arr[j] = arr[j + 1]; //再把第二个数的值 赋值 给第一个数
                arr[j + 1] = temp; //然后会得到一个最大的值
            }
        }
    }
    return arr;
}


//8. 随机数  min -- max 之间的随机数整数
function getRand(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}


// 9. 获取随机的十六进制颜色 配合随机数getRand() 使用
function getColor() {
    var str = "0123456789abcdef"; //index 0--15 列出十六进制颜色可能出现的字符
    var color = "#";
    // 随机到str中取出六个字符
    // 将这六个字符拼接在# 后面并返回
    for (var i = 0; i < 6; i++) { //这里共有 6 位，所以循环 6 次
        color += str[getRand(0, 15)]; //用下标作随机数
    }
    return color; //拼接完成返回出来颜色
}


//10. 获取随机的 RGB 颜色值 配合随机数getRand() 使用
function getRGB() {
    var r = getRand(0, 255);
    var g = getRand(0, 255);
    var b = getRand(0, 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}


// 11.随机验证码 num 是验证码的 位数 一般为 4 位 或6位，配合随机数getRand() 使用
function getVerificationCode(num) {
    var yzm = "";
    var rand;
    for (var i = 0; i < num; i++) { //验证码有几位，就要循环几次，循环一次就增加一位
        rand = getRand(48, 122);
        if (rand >= 58 && rand <= 64 || rand >= 91 && rand <= 98) {
            // 随机数在这个范围时，不符合，从新获取
            i--; //预防把错误的字符添加进验证码中
        } else { //不再条件范围时，符合要求，则添加进验证码
            yzm += String.fromCharCode(rand); //在unicode 码中找出对应字符，并且加入验证码的字符串中
            // yzm = yzm + String.fromCharCode(rand);
        }
    }
    return yzm;
}

//12. 添加本地化时间
function getDateToLocal(date) {
    var y = date.getFullYear(); //年
    var m = date.getMonth() + 1; //月份是从 0 开始计的  0--11
    var d = date.getDate(); //日
    var h = date.getHours(); //小时
    var f = date.getMinutes(); //分钟
    var s = date.getSeconds(); //秒
    // var ms = date.getMilliseconds();  //毫秒
    var w = date.getDay(); //星期  但这里获取的是数字  下标从0--6 和下面数组里面的下标一一对应
    var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    return y + "年" + toDB(m) + "月" + toDB(d) + "日" + toDB(h) + ":" + toDB(f) + ":" + toDB(s) + /* " " + ms + */ "  " + week[w];

}


// 给 1--9 前面添加数字 0 
function toDB(num) {
    return num < 10 ? "0" + num : num;
}


// 13.封装时间差函数，获取时间差秒数
function getDifTime(startDate, endDate) {
    return (endDate.getTime() - startDate.getTime()) / 1000
}


// 14.获取ID元素
function $(idName) {
    return document.getElementById(idName);
}

// 15获取元素样式  兼容谷、歌火狐、IE678
function getStyle(dom, attr) {
    if (dom.currentStyle) {
        return dom.currentStyle[attr]
    } else {
        return getComputedStyle(dom)[attr]
    }
}


// 16 动画函数支持多属性运动
function animate(dom, options, callback) {
    // 遍历对象属性
    for (var attr in options) {
        // 获取元素当前的attr值
        if (attr === 'opacity') {
            // 获取当前元素的透明度*100
            var current = parseInt(getComputedStyle(dom)[attr] * 100)
            var target = options[attr] * 100
        } else if (attr.indexOf('scroll') !== -1) {
            var current = dom[attr]
            var target = options[attr]
        } else {
            var current = parseInt(getComputedStyle(dom)[attr])
            var target = options[attr]
        }
        options[attr] = {
                'current': current,
                'target': target
            }
            // 目标数据结构:
            // options = {
            //   'width': {
            //     'current': 100,
            //     'target': 300
            //   },
            //   'height': {
            //     'current': 100,
            //     'target': 300
            //   },
            //   ...
            // }
    }

    clearInterval(dom.timer)
    dom.timer = setInterval(function() {
        // 遍历对象，取出数据
        for (var attr in options) {
            var current = options[attr].current
            var target = options[attr].target
                // 持续变化的速度
            var speed = (target - current) / 10
                // 浮点数计算会造成结果有偏差，可能造成数据丢失：取整
                // 判断运动方向取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

            // 临界值判断：剩余运动量<=每次的运动量
            if (Math.abs(target - current) <= Math.abs(speed)) {
                // 到达终点
                if (attr === 'opacity') {
                    dom.style[attr] = target / 100 // 立即到达终点
                } else if (attr.indexOf('scroll') !== -1) {
                    dom[attr] = target
                } else {
                    dom.style[attr] = target + 'px'
                }

                // 删除已运动完成的属性
                delete options[attr]

                for (var attr in options) {
                    // 还有其他属性没运动完成，提前结束当前程序，不清除计时器
                    return false;
                }
                //如果有回调函数，则执行回调函数
                typeof callback === 'function' ? callback() : ''
                clearInterval(dom.timer) // 清除计时器
            } else {
                // 未到达终点
                options[attr].current += speed
                if (attr === 'opacity') {
                    dom.style[attr] = options[attr].current / 100
                } else if (attr.indexOf('scroll') !== -1) {
                    dom[attr] = options[attr].current
                } else {
                    dom.style[attr] = options[attr].current + 'px'
                }
            }
        }
    }, 20)
}

// 17 获取元素到最外层定位父级的距离
function offset(dom, bool) {
    var t = 0,
        l = 0
    var bdl = dom.clientLeft // 保存当前元素的左边框
    var bdt = dom.clientTop // 保存当前元素的上边框
    while (dom) {
        l += dom.offsetLeft + dom.clientLeft
        t += dom.offsetTop + dom.clientTop
            // 每次循环完让当前dom元素等于他的定位父级
        dom = dom.offsetParent
    }
    if (bool) { // 包含自身边框
        return { left: l, top: t }
    } else { // 不包含自身边框
        return { left: l - bdl, top: t - bdt }
    }
}

// 18判断是否是一个对象
function isObject(obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        return true
    }
    return false
}


//   19 ajax请求
function ajax(options) {
    // data -> 'key=value&key=value'
    // 1.创建数据交互对象
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest() // 非IE5 6
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
    }

    // 判断并格式化参数data
    var data = ''
        // if (typeof options.data === 'object' && options.data !== null && options.data.constructor === 'Object') {
    if (isObject(options.data)) {
        // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
        for (var key in options.data) {
            data += key + '=' + options.data[key] + '&'
        }
        // data = 'k1=v1&k2=v2&k3=v3&'
        data = data.substring(0, data.length - 1)
    }

    if (typeof options.data === 'string') {
        data = options.data
    }

    // 判断请求方式
    if (options.type.toLowerCase() === 'get') {
        var time = ''
        time = options.cache ? '' : Date.now()
            // 2.打开连接
        xhr.open(options.type, options.url + '?' + data + '&_=' + time, true) // 默认true，异步
            // 3.发送请求
        xhr.send(null) // get请求传null
    }
    if (options.type.toLowerCase() === 'post') {
        // 2.打开连接
        xhr.open(options.type, options.url, true) // 默认true，异步
            // post 请不会有缓存问题

        // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

        // 3.发送请求
        xhr.send(data) // post请求 要传递的参数在此传
    }

    // 4.等待请求/响应状态
    // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
    xhr.onreadystatechange = function() {
        // console.log( xhr.readyState );// 2 3 4
        if (xhr.readyState === 4) { // 请求完成
            // xhr.status 响应状态
            if (xhr.status === 200) { // OK 响应就绪
                // xhr.responseText 响应的数据
                // options.success(xhr.responseText)
                // 支持dataType配置
                if (options.dataType === 'json') {
                    var json = JSON.parse(xhr.responseText)
                    options.success(json)
                } else if (options.dataType === 'xml') {
                    options.success(xhr.responseXML)
                } else {
                    options.success(xhr.responseText)
                }
            } else {
                // console.log(xhr.status)
                options.error(xhr.status)
            }
        }
    }
}

//   20 jsonp请求
function jsonp(options) {
    // options.success 变成全局函数
    window[options.jsonpCallback] = options.success

    // 判断 options.data的数据类型
    // 如果字符串，直接赋值data变量
    // 如果是对象，转成参数序列的字符串
    var data = ''
    if (typeof options.data === 'string') {
        data = options.data
    }
    if (isObject(options.data)) {
        for (var key in options.data) {
            data += key + '=' + options.data[key] + '&'
        }
        data = data.substring(0, data.length - 1)
    }

    // 创建 script标签
    var oScript = document.createElement('script')
        // 给src属性赋值（url+接口参数）
    oScript.src = options.url + '?' + options.jsonp + '=' + options.jsonpCallback + '&' + data
        // 把script插入文档中
    document.body.appendChild(oScript)
        // script标签加载完成时，删除此标签
    oScript.onload = function() {
        document.body.removeChild(oScript)
    }
}

//   21 获取单个元素
function $1(selector) {
    return document.querySelector(selector)
}

// 22 获取元素集合
function $2(selector) {
    return document.querySelectorAll(selector)
}


// 23 promiseAjax
function promiseAjax(options) {
    return new Promise((resolve, reject) => {
        // data -> 'key=value&key=value'
        // 1.创建数据交互对象
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest() // 非IE5 6
        } else {
            var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
        }

        // 判断并格式化参数data
        var data = ''
            // if (typeof options.data === 'object' && options.data !== null && options.data.constructor === 'Object') {
        if (isObject(options.data)) {
            // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
            for (var key in options.data) {
                data += key + '=' + options.data[key] + '&'
            }
            // data = 'k1=v1&k2=v2&k3=v3&'
            data = data.substring(0, data.length - 1)
        }

        if (typeof options.data === 'string') {
            data = options.data
        }

        // 判断请求方式
        if (options.type.toLowerCase() === 'get') {
            var time = ''
            time = options.cache ? '' : Date.now()
                // 2.打开连接
            xhr.open(options.type, options.url + '?' + data + '&_=' + time, true) // 默认true，异步
                // 3.发送请求
            xhr.send(null) // get请求传null
        }
        if (options.type.toLowerCase() === 'post') {
            // 2.打开连接
            xhr.open(options.type, options.url, true) // 默认true，异步
                // post 请不会有缓存问题

            // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

            // 3.发送请求
            xhr.send(data) // post请求 要传递的参数在此传
        }

        // 4.等待请求/响应状态
        // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
        xhr.onreadystatechange = function() {
            // console.log( xhr.readyState );// 2 3 4
            if (xhr.readyState === 4) { // 请求完成
                // xhr.status 响应状态
                if (xhr.status === 200) { // OK 响应就绪
                    // xhr.responseText 响应的数据
                    // options.success(xhr.responseText)
                    // 支持dataType配置
                    if (options.dataType === 'json') {
                        var json = JSON.parse(xhr.responseText)
                        resolve(json)
                    } else if (options.dataType === 'xml') {
                        resolve(xhr.responseXML)
                    } else {
                        resolve(xhr.responseText)
                    }
                } else {
                    // console.log(xhr.status)
                    reject(xhr.status)
                }
            }
        }
    })
}

//24 设置cookie
function setCookie(options) {
    options.days = options.days || 0
    options.path = options.path || ''
    if (options.days === 0) {
        document.cookie = options.key + '=' + options.val + '; path=' + options.path
    } else {
        var d = new Date()
        d.setDate(d.getDate() + options.days)
        document.cookie = options.key + '=' + options.val + '; expires=' + d + '; path=' + options.path
    }
}

//25 获取cookie
function getCookie(key) {
    var arr = document.cookie.split('; ')
    for (var i = 0, len = arr.length; i < len; i++) {
        var arr2 = arr[i].split('=')
        if (arr2[0] === key) {
            return arr2[1]
        }
    }
    return null
}

// 26 删除cookie（cookie过期浏览器自动删除）
function removeCookie(key) {
    setCookie({
        key: key,
        val: '123',
        days: -2
    })
}

//27 判断数组中是否包含某个值
function has(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

// 28 数组去重 2 和27一起用
function norepeat(arr) {
    var arr2 = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (!has(arr2, arr[i])) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}


//29 获取下一个兄弟节点
function getNextNode(dom) {
    if (dom.nextElementSibling) {
        return dom.nextElementSibling;
    } else {
        return dom.nextSibling;
    }
}

//30 获取上一个兄弟节点
function getPrevNode(dom) {
    if (dom.previousElementSibling) {
        return dom.previousElementSibling;
    } else {
        return dom.previousSibling;
    }
}

// 31 添加事件监听（兼容低版本浏览器）
function addEvent(dom, type, cb) {
    if (dom.attachEvent) {
        dom.attachEvent('on' + type, cb);
    } else {
        dom.addEventListener(type, cb);
    }
}

// 32 移除事件监听（兼容低版本浏览器）
function removeEvent(dom, type, cbName) {
    if (dom.detachEvent) {
        dom.detachEvent('on' + type, cbName);
    } else {
        dom.removeEventListener(type, cbName);
    }
}


// 33 事件委托封装
function on(parent, type, selector, callback) {
    addEvent(parent, type, function(ev) {
        var e = ev || event; //事件对象
        var target = e.target || e.srcElement; //事件源
        // 获取选择器第一个字符（ . ）
        var sel_first = selector.substr(0, 1);
        // 记录第一个字符之后的属性值（ add ）
        var sel_last = null;
        // 记录选择器类型（id className tagName）
        var sel_type = null;
        // 判断传入的是什么选择器
        switch (sel_first) {
            case '.': // 类选择器
                sel_last = selector.slice(1);
                sel_type = 'className';
                break;
            case '#': // id选择器
                sel_last = selector.slice(1);
                sel_type = 'id';
                break;
            default:
                sel_last = selector;
                sel_type = 'tagName';
        }

        // 只有传入selector元素被点击时触发
        if (sel_type === 'tagName') {
            // 如果是标签选择器，转成大写
            sel_last = sel_last.toUpperCase();
        }
        if (target[sel_type] === sel_last) {
            // callback(e);
            callback.call(target, e);
        }

        // 判断target是否为selector元素或selector的子元素
        // while(target !== parent){
        //     if (sel_type === 'tagName') {
        //         // 如果是标签选择器，转成大写
        //         sel_last = sel_last.toUpperCase();
        //     }
        //     if (target[sel_type] === sel_last) {
        //         // callback(e);
        //         callback.call(target,e);
        //     }
        //     target = target.parentNode;
        // }
    });
}