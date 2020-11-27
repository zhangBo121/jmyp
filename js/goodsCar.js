// 这个函数需要优化， 现在的情况只能是购物车中无数据时，刷新页面才会显示购物车暂无数据
function noBase() {
    // 如果没有数据，直接在页面显示购物车暂无数据
    // 创建div
    var div = document.createElement('div')

    // 给创建的div 添加类名
    div.className = 'noData'

    // 给创建的div添加内容
    div.innerHTML = '<p>购物车暂无数据</p>'

    // 把创建的div 添加进页面
    document.querySelector('.main').firstElementChild.appendChild(div)
}



// 判断本地储存中，是否有购物车数据
if (localStorage.getItem('goods')) {
    // 如果有，则获取购物车中的数据，并将其转换成JSON 对象
    var goodsArr = JSON.parse(localStorage.getItem('goods'))

    if (goodsArr.length > 0) { //length > 0 说明有数据
        dataDemand() //回调函数 运行请求过后的程序
    } else {
        noBase() //无数据时，给页面添加暂无数据
    }
    // console.log(goodsArr);  //打印判断是否拿到数据
} else {
    noBase() //无数据时，给页面添加暂无数据
}



// 使用回调函数，可以避免后面的代码冗余
function dataDemand() {
    var main = document.querySelector('.main') //商品中最外层的大盒子

    // ajax请求
    ajax({
        url: '../data/goodslist.json',
        type: 'get',
        data: '',
        dataTppe: 'json',
        cache: false,
        success: function(jsonx) {
            var json = JSON.parse(jsonx) //将拿到的json字符串转成json对象

            // 遍历 localStorage 中的本地数据
            // console.log(goodsArr);
            goodsArr.forEach((item) => {

                // 遍历ajax请求到的数据，与 localStorage 中的数据进行比较
                json.forEach((obj) => { //json 遍历后每个数据都是一个对象
                    if (item.id === obj.id) { //判断两个数据中的id是否一致
                        // 数据一致就可以渲染到页面上

                        // 把数据中的价格字符串转成数字
                        var prices = (obj.price.slice(1) - 0)
                            // console.log(prices);

                        // 创建一个包裹商品的div
                        var div = document.createElement('div')

                        // 给创建的div 添加类名 goodS
                        div.className = 'goodS'

                        // 给创建的div 赋值一个index
                        div.index = item.id

                        // 给创建的div 添加内容
                        div.innerHTML += `
                            <div class="goods_main">
                            <div class="m_left">
                                <input type="checkbox" class="check01" name="chk">
                                <img src="${obj.imgurl}" alt="">
                                <div>
                                    <p>${obj.title}</p>
                                    <b>${obj.describe}</b>
                                </div>
                            </div>
                            <div class="m_right">
                                <b>${obj.price}</b>
                                <div class="num">
                                    <b class='minus'>-</b>
                                    <em>${item.num}</em>
                                    <i class='add'>+</i>
                                </div>
                                <strong>${prices*(item.num)}</strong>
                                <em><i class='rem'>删除</i></em>
                            </div>
                        </div>
                        <div class="goods_foot">
                            <p>商品金额： <b>￥</b><span>${prices*(item.num)}</span></p>
                        </div>
                        `

                        // 将div 渲染到页面上去
                        main.appendChild(div)
                    }

                })

            })


        }
    })

    // 判断数组中是否包含某个值
    function has(arr, item) {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                return true;
            }
        }
        return false;
    }

    // 请求完成，开始事件委托
    var wrap = document.querySelector('.wrap') //页面中最大的盒子
    var all = document.querySelector('.all') //全选
    var del2 = document.querySelector('.del2') //删除选中的商品的盒子

    wrap.onclick = function(e) { //事件委托
        var target = e.target // 
            // console.log(target, 'target');

        // 加号  需要清除本地数据
        if (target.className == 'add') {
            // 原始数量
            var num1 = target.previousElementSibling.innerHTML - 0 //把获取到的字符串转成数字

            // 小计
            var amounts = target.parentElement.nextElementSibling.innerHTML - 0 //金额增加

            // 单价
            var price = target.parentElement.previousElementSibling.innerHTML.slice(1) - 0 //获取价格

            // 商品金额 target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerHTML

            let div = target.parentElement.parentElement.parentElement.parentElement //商品最大的盒子
            let data1 = JSON.parse(localStorage.getItem('goods')) //每次操作数据都需要重新请求


            num1++ //每点击一次数量就加 1
            // 判断加入购物车的数量是否达到上限
            if (num1 > 10) {
                num1 = 10
                alert('购买的商品数量已达上限')
            }

            // 从当前数据中找到该下标的数据，并删除 
            data1.forEach((item, index) => {
                if (item.id === div.index) {
                    item.num = num1
                }
            })

            // 把加 后的数据重新加入到localstorage 
            localStorage.setItem('goods', JSON.stringify(data1))


            // 小计 = 数量 * 单价
            amounts = num1 * price

            // 将得到的值重新赋值给原来的盒子  更新值
            target.previousElementSibling.innerHTML = num1
            target.parentElement.nextElementSibling.innerHTML = amounts
            target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerHTML = amounts

            total() //计算总价
        }

        // 减号  需要清除本地数据
        if (target.className == 'minus') {
            // 原始数量
            var num2 = target.nextElementSibling.innerHTML - 0 //把获取到的字符串转成数字

            // 小计
            var amounts = target.parentElement.nextElementSibling.innerHTML - 0 //小计金额增加

            // 单价
            var price = target.parentElement.previousElementSibling.innerHTML.slice(1) - 0 //获取价格

            // 商品金额  target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerHTML

            let div = target.parentElement.parentElement.parentElement.parentElement //商品最大的盒子
            let data2 = JSON.parse(localStorage.getItem('goods')) //每次操作数据都需要重新请求

            num2-- //每点击一次数量就加 1
            // 判断加入购物车的数量是否达到上限
            if (num2 <= 0) {
                num2 = 1
                alert('购买的商品数量已达最低')
            }

            // 从当前数据中找到该下标的数据，并删除 
            data2.forEach((item, index) => {
                // item.id === div.index && data.splice(index, 1)
                if (item.id === div.index) {
                    item.num = num2
                }

            })

            // 把减 后的数据重新加入到localstorage 
            localStorage.setItem('goods', JSON.stringify(data2))


            // 小计 = 数量 * 单价  = 商品金额
            amounts = num2 * price

            // 将得到的值重新赋值给原来的盒子  更新值
            target.nextElementSibling.innerHTML = num2

            // 将累加的金额赋值给小计
            target.parentElement.nextElementSibling.innerHTML = amounts

            // 将小计金额赋值给商品金额
            target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerHTML = amounts

            total() //计算总价
        }

        // 删除该商品  需要清除本地数据
        if (target.className == 'rem') {
            let div = target.parentElement.parentElement.parentElement.parentElement //商品最大的盒子
            let data = JSON.parse(localStorage.getItem('goods')) //每次操作数据都需要重新请求
            console.log(div)
            console.log(div.index)

            // 从当前数据中找到该下标的数据，并删除 
            data.forEach((item, index) => {
                item.id === div.index && data.splice(index, 1)
            })

            // 把删除后的数据重新加入到localstorage 
            localStorage.setItem('goods', JSON.stringify(data))

            // 删除包裹整个商品的大盒子
            target.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(target.parentElement.parentElement.parentElement.parentElement)

            total() //计算总价
        }


        // 每个商品的勾选情况  单选
        if (target.className == 'check01') {
            var selectArr = [] //储存勾选状态
            var checks = document.querySelectorAll('.check01') //获取每个商品的选择框

            // 遍历所有任务的勾选状态  用来判断单选是否勾选
            for (var i = 0; i < checks.length; i++) {
                if (checks[i].checked) {
                    selectArr.push('a') //a 是自定义的  可用于与 b 在数组中区分
                } else {
                    selectArr.push('b')
                }
            }

            // 判断全选是否需要勾选
            if (has(selectArr, 'b')) {
                all.checked = false
            } else {
                all.checked = true
            }

            total() //计算总价


        }

        // -----------------------------------------------------------------------------------------------------------------------------
        // 清除选中商品的思路
        //1.  主要是找出当前选中商品的id 
        // 2.拿到所有的包裹商品的div
        // 3.先去除不需要的结构
        // 4.然后对其进行遍历
        // 5.最后匹配对应的id

        // 清空选中的商品 --> 需要清除本地数据  可以用事件委托做-----------------------------------------------------
        if (target.className == 'del2') {
            var checks = document.querySelectorAll('.check01') //获取每个商品的选择框
            let divs = target.parentElement.parentElement.parentElement.previousElementSibling.children //商品最大的盒子集合
            let data3 = JSON.parse(localStorage.getItem('goods')) //每次操作数据都需要重新请求
            console.log(divs); //

            // 对divs 进行切割 把divs 的第一个子元素去除
            // 将伪数组转成数组
            let arr2 = Array.from(divs)

            // 去除数组首个元素
            arr2.shift()

            // 遍历所有商品，查看是否选中
            for (var i = 0; i < checks.length; i++) {
                checks[i].index1 = i
                    // 判断商品是否勾选
                if (checks[i].checked) {

                    // 从当前数据中找到该下标的数据，并删除 
                    data3.forEach((item, index) => {
                        // console.log(item.id);
                        // console.log(arr2);
                        arr2.forEach((ele, index2) => {
                            // console.log(ele);
                            // console.log(ele.index);
                            // console.log(item.id);
                            if (item.id === ele.index) {
                                // console.log(11111122222);
                                data3.splice(index, 1)
                            }
                        })

                        // item.id === div.index && 
                    })

                    // 把删除后的数据重新加入到localstorage 
                    localStorage.setItem('goods', JSON.stringify(data3))

                    // 删除选中的商品
                    checks[i].parentNode.parentNode.parentNode.parentNode.removeChild(checks[i].parentNode.parentNode.parentNode)

                    // 判断全选是否勾选 ，如果勾选，则去掉全选
                    if (all.checked) {
                        all.checked = false
                    }

                }
            }
            total() //计算总价

        }


        // 去结算--------------------------------------------------------------
        // 思路：事件委托
        // 1.点击后遍历所有单选框--> 判断是否勾选商品
        // 2.如果勾选了商品
        //     1.获取总价，把总价生成一个本地数据的属性，并添加进本地数据
        //     2.更新本地数据
        //     3.删除已勾选的对应的商品
        // 3.如果没有勾选商品
        //     1.弹框告诉用户，没有勾选商品

        if (target.className == 'windUp') {
            var checks = document.querySelectorAll('.check01') //获取每个商品的选择框

            for (var i = 0; i < checks.length; i++) {
                console.log(checks[i].checked);
                if (checks[i].checked) {
                    console.log('去结算');
                    // return
                } else {
                    console.log('请先勾选需要结算的商品');
                    // alert('请先勾选需要结算的商品')
                    // return
                }
                return
            }
            return
        }


        // -------------------------------------------------------------------------------------------------------------------------------------------------
        // 商品总计思路
        // 单选选中时的情况  全选情况和这个差不多
        // 商品应付总额

        // var total = 0 //累加器 累加之后赋值给总计
        // var checks = document.querySelectorAll('.check01') //获取每个商品的选择框
        // //单选选中时的情况
        // for (var i = 0; i < checks.length; i++) {
        //     if (checks[i].checked) {
        //         // 获取商品小计
        //         var total2 = checks[i].parentElement.nextElementSibling.lastElementChild.previousElementSibling.innerHTML - 0
        //         console.log(total2);
        //         // 商品金额累加
        //         total += total2
        //         // 将累加好的金额赋值给总计
        //         checks[i].parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.firstElementChild.lastElementChild.innerHTML = total
        //     } else {
        //         // 如果单选一个都没有选中 直接将 0 赋值给总计
        //         checks[i].parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.firstElementChild.lastElementChild.innerHTML = 0
        //     }
        // }
        // -----------------------------------------------------------------------------------------------------
    }

    // 封装计算总价的函数   删除--加号--减号--单选--全选 --------------------------------------------------------
    // 哪里需要，哪里调用  避免代码冗余
    function total() {
        var total7 = 0 //累加器 累加之后赋值给总计
        var checks = document.querySelectorAll('.check01') //获取每个商品的选择框

        for (var i = 0; i < checks.length; i++) { //遍历出所有已经勾选的单选
            if (checks[i].checked) { //判断全选没有勾选时，其他单选是否有勾选
                // 获取商品小计
                var total6 = checks[i].parentElement.nextElementSibling.lastElementChild.previousElementSibling.innerHTML - 0

                // 全选没勾选时，将其他已勾选的单选相加
                total7 += total6
            }
        }
        // 将已勾选的金额相加后赋值给总计
        // checks[i].parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.firstElementChild.lastElementChild.innerHTML = total7
        document.querySelector('.total').innerHTML = total7
    }


    // 点击全部 --> 全选  --------------------------------------------------------------------------
    all.onclick = function() {
        var checks = document.querySelectorAll('.check01') //获取每个商品的选择框
        for (var i = 0; i < checks.length; i++) {
            if (this.checked) {
                // console.log(this.checked);
                checks[i].checked = true
                    // console.log(22222);
            } else {
                checks[i].checked = false
                    // console.log(11111);
            }
        }
        total() //计算总价
    }
}