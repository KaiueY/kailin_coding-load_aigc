document.addEventListener("DOMContentLoaded", function() {
    const navbarItems = document.querySelectorAll(".weui-navbar__item");
    const newsLists = document.querySelectorAll(".news-list");

    navbarItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            // 移除所有 navbar 的选中状态
            navbarItems.forEach(navItem => {
                navItem.classList.remove("weui-bar__item_on");
            });
            // 添加当前点击的 navbar 的选中状态
            item.classList.add("weui-bar__item_on");

            // 隐藏所有 news-list
            newsLists.forEach(list => {
                list.style.display = "none";
            });
            // 显示对应索引的 news-list
            newsLists[index].style.display = "block";
        });
    });
});
