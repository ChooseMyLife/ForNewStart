var check = document.querySelectorAll('.check');
var checklen = check.length;
var single = document.querySelectorAll('.single');
var singlelen = single.length;


for (var i = 0; i < checklen; i++){
    //给所有复选框添加事件
    check[i].onclick = function (e) {
        //判断得到全选
        if (e.target.getAttribute('id') == 'all') {
            //把全选的状态赋值给了下面每一个checkbox了
            for (var j = 0; j < singlelen; j++) {
                single[j].checked = this.checked;
                
            } 
        }
        fTotal();
    }
}

function fTotal() {
    //每一行商品
    var itemBox = document.querySelectorAll('.item-box');
    var itemBoxlen = itemBox.length;
    var Num = 0;
    var totalNum = document.getElementById('totalNum');
    var totalPrice = document.getElementById('totalPrice');
    var price = 0;
    //计算每个商品的数量以及价格
    for (let i = 0; i < itemBoxlen; i++) {
        if (itemBox[i].getElementsByTagName('input')[0].checked) {
            Num += parseInt(itemBox[i].getElementsByTagName('input')[1].value);
            price += parseInt(itemBox[i].querySelector('.col-price').innerHTML);
        }  
    }
    totalNum.innerHTML = Num;
    totalPrice.innerHTML = price;
}