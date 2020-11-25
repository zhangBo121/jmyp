// 判断本地储存中，是否有购物车数据
if (localStorage.getItem('goods')) {
    // 如果有，则获取购物车中的数据
    var goodsArr = JSON.parse(localStorage.getItem('goods'))
    console.log(goodsArr);
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