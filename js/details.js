var id = location.href.split('?')[1].split('=')[1]
console.log(id)

// 放大镜
var minBox = document.querySelector('.big_img') //图片小盒子
var mask = document.querySelector('.mask') //蒙板层
var maxBox = document.querySelector('.magnify') //图片大盒子
var maxImg = document.querySelector('.magnify img') //放大的图片

// 鼠标移动，mask跟随移动，给mask的父盒子添加鼠标事件
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
var imgIndex = 0 //当前显示的图片下标
var recordIndex = 0
var time
var timer
var flag = true //声明节流开关

// 获取图片的长度 --> 图片的个数
var imgLen = smaImg.children.length

// 获取单张图片的宽度  --> 所有图片宽度都相等
var imgWidth = smaImg.children[0].clientWidth + 5
smaImg.parentElement.style.width = imgWidth * 4 + 'px'
    // 播放下一张
function nextMove() {
    if (flag) { //节流
        flag = false
        setTimeout(() => {
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
    // 播放下一张时，当前图片的下标 + 1
    imgIndex--
    recordIndex--

    console.log(imgIndex, imgLen - 1)
    if (recordIndex <= 0) {
        recordIndex = 0
    }
    minBox.firstElementChild.src = smaImg.children[recordIndex].src
    maxImg.src = smaImg.children[recordIndex].src




    //判断临界值  判断图片是否到达第一张的位置
    if (imgIndex <= 0) {
        console.log(111111)
            // 到达第一张时，让其下标等于第一张的下标(停止在第一张)
        imgIndex = 0
        return
    }
    smaImg.style.left = smaImg.offsetLeft + imgWidth + 'px'
}

// 点击下一张
next.onclick = function() {
    nextMove()
}

// 点击上一张
prev.onclick = function() {
    prevMove()
}