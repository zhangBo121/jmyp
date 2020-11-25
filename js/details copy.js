window.onload = function() {

    // 由商品列表页传过来的id 来匹配当前页的数据
    var id = location.href.split('?')[1].split('=')[1]
        // console.log(id)

    // 获取装数据的最大的盒子
    var main = document.querySelector('.main')
        // 发起ajax请求
    ajax({
        url: '../data/goodslist.json', //请求路径
        type: 'get', //请求方式
        data: '', //获取数据时传回给后端的参数，没有可以不传
        dataType: "json", //得到的数据形式
        cache: 'false', //是否需要缓存，false为不需要
        success: function(json) { //数据请求成功
            // console.log(json);
            a(json)
        }
    })





    // 回调函数 使用回调函数
    function a(json) {
        console.log(json)
        json.forEach((item, index) => {
            // console.log(item);
            if (id == item.id) {
                // console.log(item.id);
                // console.log(item.detail.title);
                // console.log(item.detail.biglistImg[0]);
                // 创建main中的节点
                var div = document.createElement('div')

                // 给创建的节点添加类名
                div.className = 'haha'

                // 给创建的div添加数据
                div.innerHTML = `
                    <div class="m_top">
                    <div class="main_left">
                        <div class="big_img">
                            <img src="${item.imgurl}" alt="">
                            <div class="mask"></div>
                        </div>
                        <div class="big_small">
                            <p class="prev">
                                < </p>
                                    <section>
                                        <div class="small_img">
                                            <img src="${item.detail.biglistImg[0]}" alt="" class="mm">
                                            <img src="${item.detail.biglistImg[1]}" alt="">
                                            <img src="${item.detail.biglistImg[2]}" alt="">
                                            <img src="${item.detail.biglistImg[3]}" alt="">
                                            <img src="${item.detail.biglistImg[4]}" alt="">
                                            <img src="${item.detail.biglistImg[5]}" alt="">
                                        </div>
                                    </section>
                                    <p class="next"> > </p>
                        </div>
                        <div class="magnify">
                            <img src="${item.imgurl}" alt="">
                        </div>
                    </div>
                    <div class="main_right">
                        <p>${item.detail.title}</p>
                        <p><span>${item.price}</span></p>
                        <div>
                            <p>包邮政策： 本商品包邮(新疆部分地区除外)</p>
                            <p>服务政策： 本商品支持退货</p>
                        </div>
                        <p><span id='${item.id}'>加入购物车</span></p>
                    </div>
                </div>
                <div class="g_detail">
                    <h2>商品详情</h2>
                    <img src="${item.detail.detailList[0]}" alt="">
                    <img src="${item.detail.detailList[1]}" alt="">
                    <img src="${item.detail.detailList[2]}" alt="">
                    <img src="${item.detail.detailList[3]}" alt="">
                    <img src="${item.detail.detailList[4]}" alt="">
                </div>
                `

                // 把创建的div 添加（渲染）到 main 里面
                main.appendChild(div)
                var minBox = document.querySelector('.big_img') //图片小盒子

                minBox.onmousemove = function(eve) {
                    var e = eve || event

                    console.log(offset(minBox).left);
                    // 计算mask 的坐标
                    // 蒙板层左侧到父级的距离 = 鼠标到文档左侧的距离 - 父级到文档左侧的距离 - 鼠标到元素左侧的距离
                    var maskLeft = e.pageX - offset(minBox).left - mask.clientWidth / 2
                        // 同上
                    var maskTop = e.pageY - offset(maxBox).top - mask.clientHeight / 2


                    // 限制mask 的移动范围
                    //当蒙板层左侧与父级的距离为 0 时 ，蒙版层停止移动
                    if (maskLeft <= 0) {
                        maskLeft = 0
                    }
                    // 当蒙版层右侧与父级的距离为0 时 ，蒙板层停止移动
                    if (maskLeft >= minBox.clientWidth - mask.clientWidth) {
                        //当蒙板层到达右侧时 蒙板层左侧的距离 = 父级元素的宽度 - 蒙版层的宽度
                        maskLeft = minBox.clientWidth - mask.clientWidth
                    }
                    // 当蒙版层顶部与父级的距离为0 时，蒙板层停止移动
                    if (maskTop < 0) {
                        maskTop = 0
                    }
                    // 当蒙版层底部与父级的距离为 0 时 ，蒙板层停止移动
                    if (maskTop >= (minBox.clientHeight - mask.clientHeight)) {
                        // 当蒙版层到达底部时 蒙版层距离顶部的距离  = 父级元素的高度 - 蒙版层的高度
                        maskTop = minBox.clientHeight - mask.clientHeight
                    }

                    // 实例化蒙版层到父级左侧的距离
                    mask.style.left = maskLeft + 'px'
                        // 实例化蒙版层到父级顶部的距离
                    mask.style.top = maskTop + 'px'

                    // 蒙版层与父级的宽度的比例
                    var scaleX = maskLeft / (minBox.clientWidth - mask.clientWidth)
                        // 蒙版层与父级高度的比例
                    var scaleY = maskTop / (minBox.clientHeight - mask.clientHeight)

                    // 大图跟随移动 --> 蒙版层的移动方向与大图的移动方向相反
                    // 大图到大盒子左侧的距离 = 比例的负数 * 大图的宽度与大盒子的宽度的差
                    maxImg.style.left = -scaleX * (maxImg.clientWidth - maxBox.clientWidth) + 'px'
                        // 大图到大盒子顶部的距离 = 比例的负数 * 大图的高度与大盒子的高度的差
                    maxImg.style.top = -scaleY * (maxImg.clientHeight - maxBox.clientHeight) + 'px'
                }
            }


            console.log(1)
                // 放大镜
                // var minBox = document.querySelector('.big_img') //图片小盒子
            console.log(minBox)
            var mask = document.querySelector('.mask') //蒙板层
            console.log(mask)
            var maxBox = document.querySelector('.magnify') //图片大盒子
            var maxImg = document.querySelector('.magnify img') //放大的图片

            // 鼠标移动，mask跟随移动，给mask的父盒子添加鼠标事件


            // 鼠标移入小盒子
            minBox.onmouseenter = function() {
                mask.style.display = 'block' //蒙版层显示
                maxBox.style.display = 'block' //大盒子显示
            }

            // 鼠标移出小盒子
            minBox.onmouseleave = function() {
                mask.style.display = 'none' //蒙板层隐藏
                maxBox.style.display = 'none' //大盒子隐藏
            }


            // 小图、手动轮播
            var prev = document.querySelector('.prev') //上一张
            var next = document.querySelector('.next') //下一张
            var smaImg = document.querySelector('.small_img') //包所有小图片的盒子
            var sImgs = document.querySelectorAll('.small_img img') //所有的小图片
            var imgIndex = 0 //当前显示的图片下标
            var recordIndex = 0 //保存当前显示的图片下标 每次点击后++
            var time //下一张计时器
            var timer //上一张计时器
            var flag = true //下一张 声明节流开关
            var flag2 = true //上一张  节流开关

            // 获取图片的长度 --> 图片的个数
            var imgLen = smaImg.children.length

            // 获取单张图片的宽度  --> 所有图片宽度都相等
            var imgWidth = smaImg.children[0].clientWidth + 5
            smaImg.parentElement.style.width = imgWidth * 4 + 'px'
                // 播放下一张
            function nextMove() {
                if (flag) { //节流
                    flag = false
                    time = setTimeout(() => { //节流
                        clearTimeout(time)
                        flag = true
                        console.log(smaImg)
                            // 播放下一张时，当前图片的下标 + 1
                        imgIndex++
                        recordIndex++
                        // //判断临界值  判断图片是否到达最后一张的位置

                        if (recordIndex >= imgLen - 1) {
                            recordIndex = imgLen - 1
                        }
                        minBox.firstElementChild.src = smaImg.children[recordIndex].src
                        smaImg.children[recordIndex].className = 'mm'
                        smaImg.children[recordIndex].previousElementSibling.className = ''
                        maxImg.src = smaImg.children[recordIndex].src



                        console.log(imgIndex, imgLen - 1)
                        if (imgIndex >= 3) {
                            // 到达最后一张时，让其下标等于最后一张的下标(停止在最后一张)
                            imgIndex = 3
                            return
                        }
                        smaImg.style.left = smaImg.offsetLeft - imgWidth + 'px'
                    }, 500)
                }

                return

                // 设置上面图片路径

            }

            // 播放上一张
            function prevMove() {
                if (flag2) {
                    flag2 = false
                    timer = setTimeout(() => {
                        clearTimeout(timer)
                        flag2 = true

                        // 播放下一张时，当前图片的下标 + 1
                        imgIndex--
                        recordIndex--

                        console.log(imgIndex, imgLen - 1)
                        if (recordIndex <= 0) {
                            recordIndex = 0
                        }
                        minBox.firstElementChild.src = smaImg.children[recordIndex].src
                        smaImg.children[recordIndex].className = 'mm'
                        smaImg.children[recordIndex].nextElementSibling.className = ''
                        maxImg.src = smaImg.children[recordIndex].src


                        //判断临界值  判断图片是否到达第一张的位置
                        if (imgIndex <= 0) {
                            console.log(111111)
                                // 到达第一张时，让其下标等于第一张的下标(停止在第一张)
                            imgIndex = 0
                            return
                        }
                        smaImg.style.left = smaImg.offsetLeft + imgWidth + 'px'
                    }, 500)
                }
            }

            // 点击下一张
            next.onclick = function() {
                nextMove()
            }

            // 点击上一张
            prev.onclick = function() {
                prevMove()
            }

            // 点击小图片，图片框里显示对应的图片
            for (var i = 0; i < sImgs.length; i++) {
                // 保存当前图片的下标
                sImgs[i].clickIndex = i
                    // console.log(sImgs[i]);
                    // 给每张图片添加点击事件
                sImgs[i].onclick = function() {
                    // console.log(this.clickIndex);

                    // 把所有图片的类名都去掉
                    // console.log(smaImg.children);
                    // smaImg.children[prevIndex].className = ''
                    sImgs[recordIndex].className = ''

                    // 给当前点击的图片添加类名
                    // smaImg.children[recordIndex].className = 'mm'
                    sImgs[this.clickIndex].className = 'mm'
                    minBox.firstElementChild.src = sImgs[this.clickIndex].src
                    maxImg.src = sImgs[this.clickIndex].src

                    // 更新下标 每次点击后  recordIndex会++ 所以每次都需要更新下标
                    recordIndex = this.clickIndex

                    // function siblings(ele) {
                    //     var a = [];
                    //     var p = ele.parentNode.children;
                    //     for (var i = 0, pl = p.length; i < pl; i++) {
                    //         if (p[i] !== ele) a.push(p[i]);
                    //     }
                    //     return a;
                    // }
                    // var sibling = siblings(this) //不包含自己的其他兄弟元素

                    // console.log(typeof sibling); //object
                    // smaImg.children[recordIndex].sibling.className = '' //报错
                }
            }
        })
    }
}