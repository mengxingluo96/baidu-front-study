
/**
 * @description 返回成绩表格 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 *  <tr>
        <td>学生姓名</td>
        <td>学生总分</td>
    </tr>
 */
function renderScoreTableRows(rows) {
    let res = ``;

    rows.forEach(ele => {
        res = res.concat(`<tr><td>${ele[0]}</td><td>${ele[1]}</td></tr>`);
    })

    // your code here
    return res;
}
/**
 * @description 返回第一名列表 html 字符串 
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 * <li>第一名：学生姓名，分数：学生分数</li>
 */
function printFirst(rows) {
    let res = ``;
    res = res.concat(`<li>第一名：${rows[0][0]}，分数：${rows[0][1]}</li>`);
    //your code here 
    return res;
}

/**
 * @description 返回最后一名列表 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>最后一名：学生姓名，分数：学生分数</li>
 */
function printLast(rows) {

    //you code here
    let res = ``;
    let index = rows.length - 1;
    res = res.concat(`<li>第一名：${rows[index][0]}，分数：${rows[index][1]}</li>`);
    //your code here 
    return res;
}

/**
 * @description 返回平均分 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>平均分:平均分分数</li>
 */
function printAverage(rows) {
    // your code here
    let score = 0;
    let res = ``;

    rows.forEach(ele => {
        score += Number(ele[1]);
    })

    score /= rows.length;
    res = res.concat(`<li>平均分:${score}</li>`);

    return res;
}
