/**
 * 1>鼠标按下：onmousedown
 * 2\鼠标移动：onmouseover || onmousemove
 * 3\鼠标方式: onmouseup
 */

var drag = document.getElementById('drag');
drag.onmousedown = function (e) {
    //按下的时候 鼠标位置距离浏览器左侧的位置 - 盒子左侧距离浏览器的位置
    var x = e.clientX - drag.offsetLeft;
    var y = e.clientY - drag.offsetTop;
    document.onmousemove = function (e) {
        //鼠标距离浏览器左侧的距离值
        var l = e.clientX - x;
        //鼠标距离浏览器顶部的距离值
        var t = e.clientY - y;
        if (l < 0) {
            l = 0;
        }
        else if (l > document.documentElement.clientWidth - drag.offsetWidth) {
            l = document.documentElement.clientWidth - drag.offsetWidth;
        }
        if (t < 0) {
            t = 0;
        }
        else if (t > document.documentElement.clientHeight - drag.offsetHeight) {
            t = document.documentElement.clientHeight - drag.offsetHeight;
        }
        drag.style.left = l + 'px';
        drag.style.top = t + 'px';
    }
}

drag.onmouseup = function (e) {
    document.onmousemove = null;
}
