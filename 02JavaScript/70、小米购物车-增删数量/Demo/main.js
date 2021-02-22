var check = document.querySelectorAll('.check');
var checklen = check.length;
var single = document.querySelectorAll('.single');
var singlelen = single.length;
var itemBox = document.querySelectorAll('.item-box');
var itemBoxlen = itemBox.length;

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

for (var i = 0; i < itemBoxlen; i++){
    itemBox[i].onclick = function (e) {
        var input = this.getElementsByTagName('input')[1];
        switch (e.target.className) {
            case 'add':
                input.value = parseInt(input.value) + 1;
                fnumtotal(this);
                break;
            case 'reduce':
                input.value = parseInt(input.value) - 1 <= 1 ? 1 : parseInt(input.value) - 1;
                fnumtotal(this);
                break;
            case 'col col-action u-r':
                var con = confirm('确认删除吗?');
                if (con) {
                    this.parentNode.removeChild(this);
                }
                break;
            default:
                break;
        }
        fTotal();
    }
    itemBox[i].onkeyup = function () {
        fnumtotal(this);
        fTotal();
    }
}

//计算小计
function fnumtotal(that) {
    //获取到当前行的数量
    var num = that.getElementsByTagName('input')[1].value;
    //获取当前行的价格
    var price = parseInt(that.querySelector('.col-price').innerHTML);
    //计算小计
    that.querySelector('.col-sum').innerHTML = num * price;
}

//计算总计
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
            price += parseInt(itemBox[i].querySelector('.col-sum').innerHTML);
        }  
    }
    totalNum.innerHTML = Num;
    totalPrice.innerHTML = price;
}