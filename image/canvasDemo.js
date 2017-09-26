var bg = document.getElementById('bgRound');
var cxt = bg.getContext('2d'); //创建context对象
cxt.fillStyle = '#1bdc8b'; //设置或返回用于填充绘画的颜色、渐变或模式 染成红色
cxt.strokeStyle = "#ff0000"; //设置或返回用于笔触的颜色、渐变或模式
cxt.beginPath(); //起始一条路径，或重置当前路径
cxt.moveTo(50, 50); //把路径移动到画布中的指定点，不创建线条

function draw(current) {
    //绘制一个中心点为（100,100），半径为100，起始点为0*Math.PI,终点为2.5*Math.PI,
    //从1.5*Math.PI开始不流畅，在CSS旋转了-90deg
    cxt.arc(50, 50, 50, 0 * Math.PI, current * (2.5 * Math.PI), false);
    cxt.closePath(); //创建从当前点回到起始点的路径
    cxt.fill();//填充当前绘图（路径）
}

var t = 0;
var timer = timer = setInterval(function () {
    draw(t);
    t += 0.0016666;
    if (t > 0.8) {
        t = 0.0;
        cxt.clearRect(0, 0, 100, 100);
        cxt.beginPath(); //起始一条路径，或重置当前路径
        cxt.moveTo(50, 50); //把路径移动到画布中的指定点，不创建线条
        draw(t);
    }
}, 5);
