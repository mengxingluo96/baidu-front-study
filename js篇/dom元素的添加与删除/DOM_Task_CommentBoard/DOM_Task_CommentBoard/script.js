/*
  *渲染留言列表
  完成 renderComments 函数，使其为其接收 comments 数组中的每条留言构建一个 html 字符串，使用 insertAdjacentHTML 方法将其添加到 id 为 comments 的容器内。
  每条留言 html 模板字符串格式如下
  模板 html 中的内容相对应替换成 comments 数组中的值，比如：姓名替换为 comments 数组对象中的 name 属性值，日期替换成 time 属性值
  您可以假设 comments 数组的内容是安全的,格式如下。
  此外，留言列表的顺序应与数组中的顺序相同。因此，第一条留言应该首先显示在顶部。

  <hr />
  <h4>
    <span>姓名</span>
    <span class="date">日期</span>
  </h4>
  <p>留言内容</p>
  */
//留言数据对象
const comments = [
  {
    name: 'Danny',
    comment: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    time: 'Thu Jan 12 2022'
  },
  {
    name: 'Jackson',
    comment: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    time: 'Thu Jan 11 2022'
  }
];

/**
 * @description 基于comments数据，完成渲染留言板渲染
 * @param {object[]} comments
 */
const renderComments = (comments) => {
  // console.log(comments)
  // 获取留言列表对象
  let commentsDiv = document.getElementById("comments");
  // 遍历comments，插入div
  comments.forEach(element => {
    let res = ``;
    res = res.concat(`<hr />
    <h4>
      <span>${element.name}</span>
      <span class="date">${element.time}</span> 
    </h4>
    <p>${element.comment}</p>`)
    commentsDiv.insertAdjacentHTML("afterend", res);
  })
}

// 调用
renderComments(comments);

/*
  实现更新留言板

  点击留言按钮，触发 postComment 函数。
  实现 postComment ，获取姓名输入框和留言输入框的值，存入 comments 对象。
  实现添加提交的留言在留言板中，您需要注意安全问题，留言内容不完全信任，请使用 textContent 实现，以防止 xss 攻击
  新插入的留言应该位于留言板列表的第一条。

  输入姓名：<h1>黑客</h1>
  输入留言内容：<strong>哈哈你被攻击了！</strong>
  输入以上内容, <h1>和<strong>标签不会起作用。
 */

/**
 * @description 基于comments数据，完成添加一条留言，注意安全问题
 * @param {object[]} comments
 */
const postComment = (curComments) => {
  curComments = comments;
  let newComment = {};
  let nameText = document.getElementById('name').value;
  let commentText = document.getElementById('comment').value;
  let date = new Date();
  newComment.name = nameText;
  newComment.comment = commentText;
  newComment.time = date.toDateString();
  curComments.push(newComment);

  // 获取留言列表对象
  let commentsDiv = document.getElementById("comments");
  let res = ``;
  res = res.concat(`<hr />
  <h4>
    <span></span>
    <span class="date"></span> 
  </h4>
  <p></p>`)
  commentsDiv.insertAdjacentHTML("afterbegin", res);

  let nameDiv = document.querySelector("#comments h4 span");
  let timeDiv = document.querySelector("#comments h4 .date");
  let commentDiv = document.querySelector("#comments p");
  nameDiv.textContent = nameText;
  timeDiv.textContent = newComment.time;
  commentDiv.textContent = commentText;
}

/**
 * 关闭/开启留言模式切换
  点击禁止留言按钮，触发 toggleComment 函数
  实现 toggleComment 函数，从而进行禁止留言和开启留言两种状态切换
  禁止留言模式:给留言按钮以及两个姓名和留言输入框添加禁用属性，并且禁止留言按钮文本变为开启留言
  开启留言模式:给留言按钮以及两个姓名和留言输入框删除禁用属性，并且禁止留言按钮文本变为关闭留言
 */

/**
 * @description 切换关闭留言和开启留言两种模式
 */
const toggleComment = () => {
  // your code here 
  let nameDiv = document.getElementById("name");
  let commentDiv = document.getElementById("comment");
  let closeDiv = document.getElementsByClassName("close")[0];
  // nameDiv.disabled = nameDiv.disabled ? false : true;
  // commentDiv.disabled = commentDiv.disabled ? false : true;

  if(nameDiv.disabled || commentDiv.disabled){
    nameDiv.disabled = false;
    commentDiv.disabled = false;
    closeDiv.innerText = "关闭留言"
  }else{
    nameDiv.disabled = true;
    commentDiv.disabled = true;
    closeDiv.innerText = "开启留言"
  }
}
