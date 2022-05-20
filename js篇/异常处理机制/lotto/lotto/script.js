
let button = document.getElementById("generate");
let startInput = document.querySelector('#start');
let endInput = document.querySelector('#end');
let numInput = document.querySelector('#num');

button.addEventListener("click", function (event) {

    if (!startInput.value || !endInput.value || !numInput.value) {
        return;
    }
    event.preventDefault();

    let numbers;
    try {
        numbers = generateRadom(num.value);
    } catch (error) {
        if (error.name = "invalidBallNumError") {
            alert(error.message);
        }

        numInput.focus();
        return
    }


    addColorToBall(numbers)
    //add numbers to history

    addHistory(numbers);
});

function generateRadom(num) {

    let ballnum = parseInt(num);
    if (ballnum < 0) {
        let message = "乐透球个数为负值，不合法!";
        throw new invalidBallNumError(message);
        return;
    }
    if (ballnum > 49) {
        let message = "乐透球个数超过数值范围，不合法!";
        throw new invalidBallNumError(message);
        return;
    }
    let numbers = new Array(ballnum);

    for (let i = 0; i < num; i++) {
        let random;

        try {
            random = generateRadomInRange(start.value, end.value);
        } catch (error) {
            if (error.name = "invalidRangeNumError") {
                alert(error.message);
            }

            startInput.focus();
            return
        }

        if (numbers.indexOf(random) == -1) {
            numbers[i] = random
        }
        else {
            i--;
        }
    }
    console.log(numbers)
    return numbers

}

function generateRadomInRange(start, end) {
    if (start > end) {
        let message = "不合法数值范围错误：最小数大于最大数，";
        alert(message);
        throw new invalidRangeNumError(message);
        return;
    }

    if (start < 1 || start > 49 || end < 1 || end > 49) {
        let message = "不合法数值范围错误: 数值范围不符合1-49!";
        alert(message);
        throw new invalidRangeNumError(message);
        return;
    }

    let range = parseInt(end - start);
    return Math.floor(Math.random() * range) + parseInt(start)
}


function addColorToBall(numbers) {
    let ball = document.getElementsByClassName("ball");
    for (var i = 0; i < ball.length; i++) {

        ball[i].classList.remove('choose')

    }
    for (var j = 0; j < numbers.length; j++) {

        ball[numbers[j]].classList.add('choose')
    }

}
function addHistory(numbers) {
    let history = [];
    let historyDiv = document.getElementById("history");
    let para = document.createElement("p");
    history.push(numbers.join(", "));

    for (let i in history) {

        var node = document.createTextNode(history[i]);
        para.appendChild(node);
        historyDiv.appendChild(para);

    }
}

class invalidRangeNumError extends Error {
    constructor(message) {
        super(message);
        this.name = "invalidRangeNumError";
    }
}

class invalidBallNumError extends Error {
    constructor(message) {
        super(message);
        this.name = "invalidBallNumError";
    }
}