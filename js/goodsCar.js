// 判断本地储存中，是否有购物车数据
if (localStorage.getItem('goods')) {
    // 如果有，则获取购物车中的数据
    var goodsArr = JSON.parse(localStorage.getItem('goods'))
    console.log(goodsArr);
    dataDemand() //回调函数 运行请求过后的程序
} else {
    // 如果没有数据，直接在页面显示购物车暂无数据
    // 创建div
    var div = document.createElement('div')

    // 给创建的div 添加类名
    div.className = 'noData'

    // 给创建的div添加内容
    div.innerHTML = '<p>购物车暂无数据</p>'
        // var nodata = '<div style="line-height:70px; text-align:center;">购物车暂无数据</div>'
    document.querySelector('.main').firstElementChild.appendChild(div)
}

function dataDemand() {
    var main = document.querySelector('.main') //商品中最外层的大盒子


    ajax({
        url: '../data/goodslist.json',
        type: 'get',
        data: '',
        dataTppe: 'json',
        cache: false,
        success: function(jsonx) {
            var json = JSON.parse(jsonx) //将拿到的json字符串转成json对象
                // console.log(json);
                // var domStr = '' //在这里了声明可以节约性能，后面调取一次就行，在each 里面需要调用多次，比较耗费性能

            // 遍历 localStorage 中的本地数据
            // console.log(goodsArr);
            goodsArr.forEach((item) => {

                // 遍历ajax请求到的数据，与 localStorage 中的数据进行比较
                json.forEach((obj) => { //json 遍历后每个数据都是一个对象
                    if (item.id === obj.id) { //判断两个数据中的id是否一致
                        // 数据一致就可以渲染到页面上
                        console.log(item.num);
                        console.log(obj.price);
                        console.log(obj.price.slice(1));
                        var prices = (obj.price.slice(1) - 0)
                        console.log(prices);
                        // 创建一个包裹商品的div
                        var div = document.createElement('div')

                        // 给创建的div 添加类名 goodS
                        div.className = 'goodS'

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
                                    <b>-</b>
                                    <em>${item.num}</em>
                                    <i>+</i>
                                </div>
                                <strong>${prices*(item.num)}</strong>
                                <span class="iconfont icon-lajitong"></span>
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
}