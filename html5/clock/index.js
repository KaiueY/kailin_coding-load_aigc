var secondHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
function setDate() {
    //拿到当前时间
    var now = new Date(); /* 获取当前时间 */
    var seconds = now.getSeconds(); /* 获取当前秒 */
    var secondsDegrees = ((seconds / 60) * 360) + 90; /* 获取当前秒对应的角度 */
    secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)'; /* 设置当前秒对应的角度 */

    // 设置分针
    var min = now.getMinutes();
    var minDegress = ((min / 60) * 360)+ (seconds / 60) * 6  + 90;
    minHand.style.transform = 'rotate(' + minDegress + 'deg)';

    // 设置时针
    var hour = now.getHours();
    var hourDegress = ((hour / 12) * 360) + (min / 60) * 30 + 90;
    hourHand.style.transform = 'rotate(' + hourDegress + 'deg)';
}

setInterval(setDate, 1000);