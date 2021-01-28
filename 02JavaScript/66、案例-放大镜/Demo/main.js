var sImg = document.getElementById('sImg');
var pImg = document.getElementById('pImg');
var lens = document.getElementById('lens');
var main = document.getElementById('main');
var picImg = document.getElementById('piCimg');

sImg.onmouseover=function () {
    lens.style.display = 'block';
    pImg.style.display = 'block';

}
sImg.onmousemove = function (e) {
    lens.style.display = 'block';
    pImg.style.display = 'block';
    var x = e.clientX - main.offsetLeft - lens.offsetWidth / 2;
    var y = e.clientY - main.offsetTop - lens.offsetHeight / 2;

    if (x<0) {
        x = 0;
    }
    else if (x>sImg.offsetWidth-lens.offsetWidth) {
        x= sImg.offsetWidth - lens.offsetWidth
    }
    if (y < 0) {
        y = 0;
    }
    else if (y > sImg.offsetHeight - lens.offsetHeight) {
        y = sImg.offsetHeight - lens.offsetHeight
    }
    lens.style.left = x + 'px';
    lens.style.top = y + 'px';

    picImg.style.left = -x * 2 + 'px';
    picImg.style.top = -y * 2 + 'px';
}
sImg.onmouseout = function () {
    lens.style.display = 'none';
    pImg.style.display = 'none';    
}