
const data = [['AMY','100'],['Lisa','99'],['Jackson','98'],['Jennie','97']];

const html = renderScoreTableRows(data);

const tbody = document.querySelector("#score-table tbody");
const first_print_btn = document.querySelector(".print_first");
const print_last_btn = document.querySelector(".print_last");
const print_average_btn = document.querySelector('.print_average')

const report = document.querySelector('.report');

tbody.insertAdjacentHTML("beforeend", html);

first_print_btn.addEventListener('click',function(){
    let firtsHTMl = printFirst(data);
    report.insertAdjacentHTML("beforeend", firtsHTMl);
})

print_last_btn.addEventListener('click',function(){
    let lastHtml = printLast(data)
    report.insertAdjacentHTML("beforeend", lastHtml);
})

print_average_btn.addEventListener('click',function(){
    let averageHtml = printAverage(data)
    report.insertAdjacentHTML("beforeend", averageHtml);
})

