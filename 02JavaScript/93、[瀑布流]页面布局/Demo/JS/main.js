window.onload=function () {
    fWaterFall();

    window.onscroll = function () {
        if (fScrollTop()) {
            var container = document.getElementById('container');
            var oItem = document.createElement('div');
            oItem.className = 'item';
            var oPic = document.createElement('div');
            oPic.className = 'pic';
            var oImg = document.createElement('img');
            oImg.src = './Images/3.jpg';
            container.appendChild(oItem);
            oItem.appendChild(oPic);
            oPic.appendChild(oImg);
            fWaterFall();
        }
    }
}
function fScrollTop() {
    var item = document.getElementsByClassName('item');
    //最后一个Item
    var lastitem = item[item.length - 1];
    //可视区域高
    var clientHeight = document.documentElement.clientHeight;
    //滚动距离
    var scrollTop = document.documentElement.scrollTop;
    if (lastitem.offsetTop<clientHeight+scrollTop) {
        return true;
    }
    else {
        return false;
    }
}
function fWaterFall() {
    var container = document.getElementById('container');

    //可视区域化的宽度
    var clientWidth = document.documentElement.clientWidth;
    var OItem = document.getElementsByClassName('item');
    var itemWidth = OItem[0].offsetWidth;
    var num = Math.floor(clientWidth / itemWidth);
    
    var hrr = [];
    container.style.width = num*itemWidth+'px';
    
    for (let i = 0; i < OItem.length; i++) {
        if (i<num) {
            hrr.push(OItem[i].offsetHeight);
        }
        else {
            var minHeight = Math.min(...hrr);
            var index = fInArray(minHeight, hrr);
            OItem[i].style.position  = 'absolute';
            OItem[i].style.left = index*itemWidth+'px';   //索引*一个盒子的宽度+'px';
            OItem[i].style.top = minHeight + 'px';    //上面盒子的高度+'px';
            hrr[index] += OItem[i].offsetHeight;
        }
        
    }

}

function fInArray(min,hrr) {
    for (let i = 0; i < hrr.length; i++) {
        const element = hrr[i];
        if (min==element) {
            return i;
        }
    }
}