const content = document.getElementById("content");
let select_item = document.getElementById("introduce");
select_item.style['color'] = "aqua";
content.src = "pages/introduce.html";
function top_item_onclick(item, page){
    content.src = "pages/" + page + ".html";
    if(select_item === null)item.style = "color: aqua";
    else{
        select_item.style['color'] = "white";
        item.style = "color: aqua";
    }
    select_item = item;
}