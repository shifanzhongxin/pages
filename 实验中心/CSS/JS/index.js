
//排他思想，先获取选项卡，点击变换底色
var tab_list = document.getElementById('.tab_list');
var lis = tab_list.getElementsByTagName('li');
var items = document.getElementById('.item');
for (var i = 0; i < lis.length; i++) {
    //给li添加一个索引号
    lis[i].setAttribute('index', i);
    //上面模块
    lis[i].onclick = function () {
        //先将所有的Li清除样式
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        this.className = 'current';
        //下面模块 选项卡与内容一一对应
        var index = this.getAttribute('index');//这一步就是为了获取索引号
        console.log(index);
        //其他先清除样式（隐藏）
        for (var i = 0; i < items.length; i++) {
            items[i].style.dispaly = 'none';
        }
        items[index].style.dispaly = 'block';
    }
}
