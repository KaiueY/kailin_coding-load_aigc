window.onload = function () {
    // 确定第一行能放多少张 n图

    //获取一屏幕宽度width

    //获取图片box的宽度

    //操作第n+1张 拜访他的位置 放在高度最小的那一列
    //获取每一列的高度
    //更新这一列的高度
    imgLocation('container', 'box')
    function imgLocation(parent, child) {
        var cParent = document.getElementById(parent)
        var cChild = cParent.getElementsByClassName(child)
        var screenWidth = window.innerWidth
        var imgWidth = cChild[0].offsetWidth
        var num = Math.floor(screenWidth / imgWidth)
        cParent.style.width = `${imgWidth * num}px`

        //操作第num+1张 
        var boxHeightArr = []
        for (var i = 0; i < cChild.length; i++) {
            if (i < num) {
                boxHeightArr.push(cChild[i].offsetHeight)
            }
            else {
                //找到数组最小值
                var minHeight = Math.min(...boxHeightArr)
                var minIndex = boxHeightArr.indexOf(minHeight)
                //摆放图片
                cChild[i].style.position = 'absolute'
                cChild[i].style.top = minHeight + 'px'
                cChild[i].style.left = cChild[minIndex].offsetLeft + 'px'

                //更新这一列的额高度
                boxHeightArr[minIndex] = boxHeightArr[minIndex] + cChild[i].offsetHeight
            }
        }
    }
}
