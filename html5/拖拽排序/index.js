// 拖拽排序
const list = document.querySelector('.drag-container')
let draggingElement = null

// 拖拽开始
list.ondragstart = function (e) {
  draggingElement = e.target
  e.target.classList.add('moving')
}

// 拖拽结束
list.ondragend = function (e) {
  e.target.classList.remove('moving')
  draggingElement = null
}

// 拖拽经过其他元素
list.ondragover = function (e) {
  e.preventDefault()
  const target = e.target
  
  // 确保目标是列表项
  if (target.classList.contains('list-item') && target !== draggingElement) {
    const targetRect = target.getBoundingClientRect()
    const targetMiddle = targetRect.top + targetRect.height / 2
    
    if (e.clientY < targetMiddle) {
      target.parentNode.insertBefore(draggingElement, target)
    } else {
      target.parentNode.insertBefore(draggingElement, target.nextSibling)
    }
  }
}