
let dialog_div = document.getElementById("dialog-div");
let main_div = document.getElementById("main-div");
let add_item_input = document.getElementById("add-item-input");

function top_bar_onclick() {
    dialog_div.style.visibility = "visible";
    main_div.style.visibility = "collapse";
    add_item_input.focus();
}

function add_item() {
    let text = add_item_input.value;

    if(text.length !== 0){
        let item = document.createElement("div");
        item.textContent = text;
        item.className = "item";
        // 监听touchstart事件
        item.addEventListener('touchstart', function(event) {
            event.preventDefault(); // 阻止默认行为，例如防止在某些移动浏览器中长按时出现选中文本
            touchStart = event.touches[0]; // 获取第一个触点的位置

            // 设置长按计时器
            longPressTimer = setTimeout(() => {
                main_div.removeChild(item);
            }, 500); // 设置长按阈值为500毫秒
        });

// 监听touchmove事件，取消长按事件的触发
        item.addEventListener('touchmove', function(event) {
            clearTimeout(longPressTimer); // 用户手指移动时，取消长按计时器
        });

// 监听touchend事件，清理计时器
        item.addEventListener('touchend', function(event) {
            clearTimeout(longPressTimer); // 清理计时器，无论是否达到长按阈值
        });

// 可选，监听touchcancel事件（例如，当系统中断触摸事件时）
        item.addEventListener('touchcancel', function(event) {
            clearTimeout(longPressTimer);
        });
        main_div.appendChild(item);
    }

    dialog_div.style.visibility = "collapse";
    main_div.style.visibility = "visible";
    add_item_input.value = "";
}