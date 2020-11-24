// 我的聚美二级菜单
var myjm = document.querySelector('.t_topRight em')
var myjumei = document.querySelector('.myjumei')

myjm.onmouseover = function() {
    myjumei.style.display = 'block'
}
myjm.onmouseout = function() {
    myjumei.style.display = 'none'
}
myjumei.onmouseover = function() {
    myjumei.style.display = 'block'
}
myjumei.onmouseout = function() {
    myjumei.style.display = 'none'
}

// 更多二级菜单
var moreFather = document.querySelector('.t_topRight>i')
var more = document.querySelector('.more')

moreFather.onmouseover = function() {
    more.style.display = 'block'
}
moreFather.onmouseout = function() {
    more.style.display = 'none'
}
more.onmouseover = function() {
    more.style.display = 'block'
}
more.onmouseout = function() {
    more.style.display = 'none'
}

// 更多 -- 聚美微信 -- 三级菜单
var moreQR = document.querySelector('.moreQR')
var moreQRFather = document.querySelector('.moreQRFather')
console.log(moreQR);
console.log(moreQRFather);
moreQRFather.onmouseover = function() {
    moreQR.style.display = 'block'
}
moreQRFather.onmouseout = function() {
    moreQR.style.display = 'none'
}
moreQR.onmouseover = function() {
    moreQR.style.display = 'block'
}
moreQR.onmouseout = function() {
    more.style.display = 'none'
}




// 导航部分的点击事件 主体内容区选项卡切换 选项卡  切换页面
var navs = document.querySelectorAll('.nav ul li') //导航
var divs = document.querySelectorAll('.content>div')
var prevIndex = 0 //保存上一次点击的下标

for (var i = 0; i < navs.length; i++) {
    // 保存当前点击的下标
    navs[i].index = i
        // 给每个li 添加点击事件
    navs[i].onclick = function() {
        // 取消上一次点击的li 的类名
        navs[prevIndex].className = ''
        divs[prevIndex].className = ''

        // 点击后，给当前li 添加类名
        navs[this.index].className = 'active'
        divs[this.index].className = 'show'


        // 点击后，更新下标
        prevIndex = this.index
    }
}

// 进入页面，启动轮播图
slidePhoto()

// 首页轮播图
function slidePhoto() {
    // 获取元素
    var slide = document.querySelector('.slide') //图片外层的盒子，有滚动条
    var slideshow = document.querySelector('.slideshow') //图片外层的盒子
    var prev = document.querySelector('.prev') //上一张
    var next = document.querySelector('.next') //下一张
    var lis = document.querySelectorAll('.list li') //分页器集合
    var timer //计时器
    var imgIndex = 0 //当前显示的图片下标
    var numIndex = 0 //当前显示的分页器的下标


    // 向图片中补一张图片
    var firstImg = slideshow.children[0].cloneNode(true) //复制所有图中的第一张
    slideshow.appendChild(firstImg) //把克隆的第一张图片添加到所有图片的最后


    // 获取图片的长度（下标的长度 图片的数量）
    var imgLen = slideshow.children.length //sildeshow中所有子元素的个数


    // 获取单张图片的宽度  注：所有图片宽度相等
    var imgWidth = slideshow.children[0].clientWidth //第一张图片的宽度


    // 启动自动播放
    autoMove()


    // 自动播放
    function autoMove() {
        timer = setInterval(() => {
            nextMove() //默认自动播放下一张
                // prevMove()
        }, 3000);
    }

    // 播放下一张
    function nextMove() {
        // 自动播放下一张时，当前图片的下标 +1
        imgIndex++

        // 临界值判断 判断图片是否到达最后一张的位置
        if (imgIndex >= imgLen) { //最后一张是克隆的第一张
            // 当到达最后一张时，下一张就要播放到第二张、
            imgIndex = 1

            // 图片到达最后一张时，滚动条瞬间回到第一张的位置
            slide.scrollLeft = 0
        }

        // 动画函数开始，每播放一张，滚动条就移动一次，移动的距离就是每张图片移动完后加起来的宽度
        animate(slide, { 'scrollLeft': imgIndex * imgWidth })

        // 去掉上一次显示的数字的类名
        lis[numIndex].className = ''

        // 每播放一次，分页器的下标 +1
        numIndex++

        // 临界值判断  判断分页器是否到达最后一个
        if (numIndex >= imgLen - 1)[ //分页器下标比所有图片少一
            // 图片到达倒数第二张，分页器就到达了最后一个，图片到达最后一张时，分页器就到达第一个
            numIndex = 0
        ]

        // 给当前显示的数字添加类名 --> 此时的numIndex已经 +1 ，只需要给当前的分页器添加类名即可
        lis[numIndex].className = 'num'
    }

    // 播放上一张
    function prevMove() {
        // 播放上一张时，图片下标会 -1
        imgIndex--

        // 临界值判断 判断图片是否到达了第一张
        if (imgIndex < 0) { //当图片播放到第一张时，下一张播放的就是倒数第二张
            // 到达最后一张是 -1 倒数第二张 -2
            imgIndex = imgLen - 2

            //图片到达第一张时，滚动条要瞬间拉倒最后一张的位置
            slide.scrollLeft = imgWidth * (imgLen - 1)
        }

        // 往前播放一张，滚动条也到达相应的位置 ,每次走动一张图片的宽度
        animate(slide, { 'scrollLeft': imgWidth * imgIndex })

        // 清空上一次分页器的下标
        lis[numIndex].className = ''

        // 每移动一次num就 -1
        numIndex--

        // 临界值判断  -->数字下标是否到达了第一个
        if (numIndex < 0) {
            // 到达第一个之后，下一个就是最后一个   图片长度比分页器多一 ，分页器最后一个下标实际比图片长度少 2
            numIndex = imgLen - 2
        }

        // 给当前分页器添加类名
        lis[numIndex].className = 'num'
    }

    // 点击上一张
    prev.onclick = function() {
        // 清除计时器
        clearInterval(timer)

        // 点击一次就播放一次
        prevMove()

        // 点击完后，到了时间，重新开始自动播放,启动定时器
        autoMove()
    }

    // 点击下一张
    next.onclick = function() {
        // 清除计时器
        clearInterval(timer)

        // 点击一次就播放一次
        nextMove()

        // 点击完后，到了时间，重新开始自动播放
        autoMove()
    }

    // 点击分页器，跳转到指定图片 类似于选项卡
    for (var i = 0; i < lis.length; i++) {
        // 保存当前分页器的下标
        lis[i].index = i

        //给当前点击的分页器添加点击事件
        lis[i].onclick = function() {
            // 清除定时器，停止自动播放
            clearInterval(timer)
                // console.log(this.index);

            // 点击后，图片的下标等于数字的下标
            imgIndex = this.index

            // 点击后，滚动条移动到当前图片所在位置
            animate(slide, { 'scrollLeft': this.index * imgWidth })

            // 去掉上一次分页器的类名
            lis[numIndex].className = ''

            // 将当前点击的下标赋值给上一次显示的下标（更新下标）
            numIndex = this.index

            // 给当前显示的分页器添加类名
            lis[numIndex].className = 'num'

            // 启动自动播放
            autoMove()
        }
    }
}



// 商品列表页js代码
var goodslist = document.querySelector('.goodslist') //获取商品列表页的大盒子

// 获取商品数据
ajax({
    url: '../data/goodslist.json', //请求路径
    type: 'get', //请求方式
    data: '', //获取数据时传回给后端的参数，没有可以不传
    dataType: "json", //得到的数据形式
    cache: 'false', //是否需要缓存，false为不需要
    success: function(json) { //数据获取成功，可以渲染页面
        console.log(json);

        json.forEach((item, index) => {
            // 创建节点
            var div = document.createElement('div')
                // 记录索引
            div.index = index
                // 给创建的div添加类名
            div.className = 'gLs'
                // 给div添加数据
            div += `
                    <p>【非自营】</p>
                    <p><img src="${item.imgurl}" alt=""></p>
                    <p>${item.title}</p>
                    <p><i>￥</i><span>${item.price}</span></p>
                    <p><span id='${item.code}'>去看看</span></p>
                    `
            goodslist.appendChild(div)
        });
    },
    error: function(err) {
        console.log(err);
    }

})