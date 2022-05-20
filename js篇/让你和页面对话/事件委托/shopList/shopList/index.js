/**
 * 请您在 index.js 中实现以下功能
    实现购物清单的添加。给添加按钮绑定点击事件处理程序:addItemToList 函数
    实现 addItemToList 函数功能，给 id 为 shopping-list 的 列表添加购物清单子项元素，值为输入框中的取值。每一个新生成购物清单子项元素格式如下：
    <li>
    <p>项目名称</p>
    <button>删除</button>
    </li>
    您可以使用 insertAdjacentHTML 和 Documentdocu.createElement()这两种方式都实现一次

    实现购物清单的删除功能。点击删除按钮，实现删除该子项，您有两种实现方式：

    给每一个删除按钮都绑定点击事件处理程序:removeItemFromList ，完成删除购物清单项，但是您会发现，每此新生成的购物清单子项，您都需要绑定一次，这很麻烦
    更优秀的处理办法是：使用事件委托的方式， 给 id 为 shopping-list 的 列表绑定点击事件处理程序:removeItemFromList，实现删除购物清单子项
    实现 removeItemFromList 函数，完成删除功能

    此外，项目的顺序应与数组中的顺序相同。因此，第一个项目应该首先显示（在顶部）。
 */

//TODO:实现购物清单的添加和删除
function addItemToList(event) {
    let ulDiv = document.getElementById("shopping-list");
    let itemName = document.getElementById("item-name").value;
    document.getElementById("item-name").value = "";
    let curLi = document.createElement("li");
    let curP = document.createElement("p");
    curP.innerText = itemName;
    let curBtn = document.createElement("button");
    curBtn.innerText = "删除";

    curLi.appendChild(curP);
    curLi.appendChild(curBtn);
    ulDiv.appendChild(curLi);

    // 阻止表单默认提交
    event.preventDefault();
}

// 事件委派
function removeItemFromList(ev) {
    ev = ev || window.event;
    let target = ev.target || ev.srcElement;
    // console.log(target)
    // 寻找li元素
    // element.parentElement 属性返回当前元素的父元素
    if (ev.target && ev.target.nodeName.toUpperCase() == "BUTTON") {
        let curLi = target.parentElement;
        curLi.remove();
    }
}
