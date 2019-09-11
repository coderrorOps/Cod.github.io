// запреты на выделение копирование и перетаскивание объектов на странице
document.onloadstart = test;
document.onselectstart = test;
document.oncontextmenu = test;
function test() {
    return false
}

//------------------- проверка ответов -------------------------//

//Pascal easy
function proverit1() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1 = "writeln('Привет', name);";
    var rigright_answerswer2 = "var";
    var rigright_answerswer3 = "a:= 1;";
    var rigright_answerswer4 = "end.";

    var user_answer1 = document.getElementById("answer_1").value;
    var user_answer2 = document.getElementById("answer_2").value;
    var user_answer3 = document.getElementById("answer_3").value;
    var user_answer4 = document.getElementById("answer_4").value;

    if (rigright_answerswer1 == user_answer1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (rigright_answerswer2 == user_answer2) {
        ball += 1;
        answers += "<div class='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (rigright_answerswer3 == user_answer3) {
        ball += 1;
        answers += "<br><div class='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (rigright_answerswer4 == user_answer4) {
        ball += 1;
        answers += "<div class='output'>4. Верно </div>";
    } else { answers += "<div class='output'>4. Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}

//pascal normal
function proverit2() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1_1 = "while i <= 10 do";
    var rigright_answerswer2_1 = "i: longint;";
    var rigright_answerswer2_2 = "i:= i+1;";
    var rigright_answerswer3_1 = "writeln('Введите первое число');";
    var rigright_answerswer3_2 = "readln(a);";
    var rigright_answerswer3_3 = "readln(b);";
    var rigright_answerswer4_1 = "a,b: longint;";
    var rigright_answerswer4_2 = "writeln('вычитание = ', a-b);";
    var rigright_answerswer4_3 = "writeln('произведение = ', a*b);";

    var user_answer1_1 = document.getElementById("answer_1_1").value;
    var user_answer2_1 = document.getElementById("answer_2_1").value;
    var user_answer2_2 = document.getElementById("answer_2_2").value;
    var user_answer3_1 = document.getElementById("answer_3_1").value;
    var user_answer3_2 = document.getElementById("answer_3_2").value;
    var user_answer3_3 = document.getElementById("answer_3_3").value;
    var user_answer4_1 = document.getElementById("answer_4_1").value;
    var user_answer4_2 = document.getElementById("answer_4_2").value;
    var user_answer4_3 = document.getElementById("answer_4_3").value;

    if (rigright_answerswer1_1 == user_answer1_1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (rigright_answerswer2_1 == user_answer2_1) {
        ball += 1;
        answers += "<div class='output'>2.1 Верно </div>";
    } else { answers += "<div class='output'>2.1 Неверно </div>"; }

    if (rigright_answerswer2_2 == user_answer2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (rigright_answerswer3_1 == user_answer3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (rigright_answerswer3_2 == user_answer3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (rigright_answerswer3_3 == user_answer3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (rigright_answerswer4_1 == user_answer4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (rigright_answerswer4_2 == user_answer4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (rigright_answerswer4_3 == user_answer4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar'>" + answers + "</div>";
}

//pascal hard
function proverit3() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1_1 = "readln(day);";
    var rigright_answerswer1_2 = "6 :writeln('суббота');";
    var rigright_answerswer1_3 = "writeln('Неверный номер дня недели');";
    var rigright_answerswer2_1 = "writeln('2-ое число меньше 39');";
    var rigright_answerswer2_2 = "writeln('Второе число >= 39';";
    var rigright_answerswer2_3 = "end.";
    var rigright_answerswer3_1 = "a = 12;";
    var rigright_answerswer3_2 = "begin";
    var rigright_answerswer3_3 = "writeln('это равно ', b/a);";
    var rigright_answerswer4_1 = "i: longint;";
    var rigright_answerswer4_2 = "for i:= 0 to 10 do";
    var rigright_answerswer4_3 = "end.";

    var user_answer1_1 = document.getElementById("answer_1_1").value;
    var user_answer1_2 = document.getElementById("answer_1_2").value;
    var user_answer1_3 = document.getElementById("answer_1_3").value;
    var user_answer2_1 = document.getElementById("answer_2_1").value;
    var user_answer2_2 = document.getElementById("answer_2_2").value;
    var user_answer2_3 = document.getElementById("answer_2_3").value;
    var user_answer3_1 = document.getElementById("answer_3_1").value;
    var user_answer3_2 = document.getElementById("answer_3_2").value;
    var user_answer3_3 = document.getElementById("answer_3_3").value;
    var user_answer4_1 = document.getElementById("answer_4_1").value;
    var user_answer4_2 = document.getElementById("answer_4_2").value;
    var user_answer4_3 = document.getElementById("answer_4_3").value;

    if (rigright_answerswer1_1 == user_answer1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (rigright_answerswer1_2 == user_answer1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (rigright_answerswer1_3 == user_answer1_3) {
        ball += 1;
        answers += "<div class='output'>1.3 Верно </div>";
    } else { answers += "<div class='output'>1.3 Неверно </div>"; }

    if (rigright_answerswer2_1 == user_answer2_1) {
        ball += 1;
        answers += "</br><div class='output'>2.1 Верно </div>";
    } else { answers += "</br><div class='output'>2.1 Неверно </div>"; }

    if (rigright_answerswer2_2 == user_answer2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (rigright_answerswer2_3 == user_answer2_3) {
        ball += 1;
        answers += "<div class='output'>2.3 Верно </div>";
    } else { answers += "<div class='output'>2.3 Неверно </div>"; }

    if (rigright_answerswer3_1 == user_answer3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (rigright_answerswer3_2 == user_answer3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (rigright_answerswer3_3 == user_answer3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (rigright_answerswer4_1 == user_answer4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (rigright_answerswer4_2 == user_answer4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (rigright_answerswer4_3 == user_answer4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_4'>" + answers + "</div>";
}

//css easy
function proverit4() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1_1 = ".header {";
    var rigright_answerswer2_1 = "width: 100%;";
    var rigright_answerswer2_2 = "height: 100%;";
    var rigright_answerswer3_1 = "height: 40px;";
    var rigright_answerswer4_1 = "color: #000;";
    var rigright_answerswer4_2 = "font-weight: bold;";

    var user_answer1_1 = document.getElementById("answer_1_1").value;
    var user_answer2_1 = document.getElementById("answer_2_1").value;
    var user_answer2_2 = document.getElementById("answer_2_2").value;
    var user_answer3_1 = document.getElementById("answer_3_1").value;
    var user_answer4_1 = document.getElementById("answer_4_1").value;
    var user_answer4_2 = document.getElementById("answer_4_2").value;

    if (rigright_answerswer1_1 == user_answer1_1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (rigright_answerswer2_1 == user_answer2_1) {
        ball += 1;
        answers += "<div class='output'>2.1 Верно </div>";
    } else { answers += "<div class='output'>2.1 Неверно </div>"; }

    if (rigright_answerswer2_2 == user_answer2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (rigright_answerswer3_1 == user_answer3_1) {
        ball += 1;
        answers += "<br><div class='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (rigright_answerswer4_1 == user_answer4_1) {
        ball += 1;
        answers += "<div class='output'>4.1 Верно </div>";
    } else { answers += "<div class='output'>4.1 Неверно </div>"; }

    if (rigright_answerswer4_2 == user_answer4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}

//css Normal
function proverit5() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1_1 = "padding: 16px 22px 23px 10px;";
    var rigright_answerswer1_2 = "font-weight: normal;";
    var rigright_answerswer1_3 = ".header-topmenu-bar ul li a:hover {";
    var rigright_answerswer2_1 = "padding-top: 16px;";
    var rigright_answerswer2_2 = "font-weight: normal;";
    var rigright_answerswer2_3 = "text-align: center;";
        var rigright_answerswer3_1_1 = "padding: 2px 3px;";
        var rigright_answerswer3_1_2 = "padding: 2% 3%;";
    var rigright_answerswer3_2 = "border-bottom-right-radius: 20px;";
    var rigright_answerswer3_3 = "background: #265ba1;";
    var rigright_answerswer4_1 = "display: block;";
    var rigright_answerswer4_2 = "position: fixed;";
    var rigright_answerswer4_3 = "font-size: 30px;";

    var user_answer1_1 = document.getElementById("answer_1_1").value;
    var user_answer1_2 = document.getElementById("answer_1_2").value;
    var user_answer1_3 = document.getElementById("answer_1_3").value;
    var user_answer2_1 = document.getElementById("answer_2_1").value;
    var user_answer2_2 = document.getElementById("answer_2_2").value;
    var user_answer2_3 = document.getElementById("answer_2_3").value;
    var user_answer3_1 = document.getElementById("answer_3_1").value;
    var user_answer3_2 = document.getElementById("answer_3_2").value;
    var user_answer3_3 = document.getElementById("answer_3_3").value;
    var user_answer4_1 = document.getElementById("answer_4_1").value;
    var user_answer4_2 = document.getElementById("answer_4_2").value;
    var user_answer4_3 = document.getElementById("answer_4_3").value;

    if (rigright_answerswer1_1 == user_answer1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (rigright_answerswer1_2 == user_answer1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (rigright_answerswer1_3 == user_answer1_3) {
        ball += 1;
        answers += "<div class='output'>1.3 Верно </div>";
    } else { answers += "<div class='output'>1.3 Неверно </div>"; }

    if (rigright_answerswer2_1 == user_answer2_1) {
        ball += 1;
        answers += "<br><div class='output'>2.1 Верно </div>";
    } else { answers += "<br><div class='output'>2.1 Неверно </div>"; }

    if (rigright_answerswer2_2 == user_answer2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (rigright_answerswer2_3 == user_answer2_3) {
        ball += 1;
        answers += "<div class='output'>2.3 Верно </div>";
    } else { answers += "<div class='output'>2.3 Неверно </div>"; }

    if (rigright_answerswer3_1_1 == user_answer3_1 || rigright_answerswer3_1_2 == user_answer3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (rigright_answerswer3_2 == user_answer3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (rigright_answerswer3_3 == user_answer3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (rigright_answerswer4_1 == user_answer4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (rigright_answerswer4_2 == user_answer4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (rigright_answerswer4_3 == user_answer4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_4'>" + answers + "</div>";
}

//css hard
function proverit6() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1_1 = "border-bottom: 1px solid #265ba1;";
    var rigright_answerswer1_2 = "border-bottom-left-radius: 15px;";
    var rigright_answerswer1_3 = "outline: none;";
    var rigright_answerswer2_1 = "background: #c5daf5;";
    var rigright_answerswer2_2 = "@media screen and (max-width:480px){";
    var rigright_answerswer2_3 = "}}";
    var rigright_answerswer3_1 = '.search-bar input[type="submit"] {';
    var rigright_answerswer3_2 = "z-index: 9;";
    var rigright_answerswer3_3 = "position: absolute;";
    var rigright_answerswer4_1 = ".top-menu-bar {";
        var rigright_answerswer4_2 = 'background: url("images/menu-bar.png");';
        var rigright_answerswer4_2_2 = 'background: url("images/menu-bar.jpg");';
    var rigright_answerswer4_3 = "line-height: 14px;";

    var user_answer1_1 = document.getElementById("answer_1_1").value;
    var user_answer1_2 = document.getElementById("answer_1_2").value;
    var user_answer1_3 = document.getElementById("answer_1_3").value;
    var user_answer2_1 = document.getElementById("answer_2_1").value;
    var user_answer2_2 = document.getElementById("answer_2_2").value;
    var user_answer2_3 = document.getElementById("answer_2_3").value;
    var user_answer3_1 = document.getElementById("answer_3_1").value;
    var user_answer3_2 = document.getElementById("answer_3_2").value;
    var user_answer3_3 = document.getElementById("answer_3_3").value;
    var user_answer4_1 = document.getElementById("answer_4_1").value;
    var user_answer4_2 = document.getElementById("answer_4_2").value;
    var user_answer4_3 = document.getElementById("answer_4_3").value;

    if (rigright_answerswer1_1 == user_answer1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (rigright_answerswer1_2 == user_answer1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (rigright_answerswer1_3 == user_answer1_3) {
        ball += 1;
        answers += "<div class='output'>1.3 Верно </div>";
    } else { answers += "<div class='output'>1.3 Неверно </div>"; }

    if (rigright_answerswer2_1 == user_answer2_1) {
        ball += 1;
        answers += "<br><div class='output'>2.1 Верно </div>";
    } else { answers += "<br><div class='output'>2.1 Неверно </div>"; }

    if (rigright_answerswer2_2 == user_answer2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (rigright_answerswer2_3 == user_answer2_3) {
        ball += 1;
        answers += "<div class='output'>2.3 Верно </div>";
    } else { answers += "<div class='output'>2.3 Неверно </div>"; }

    if (rigright_answerswer3_1 == user_answer3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (rigright_answerswer3_2 == user_answer3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (rigright_answerswer3_3 == user_answer3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (rigright_answerswer4_1 == user_answer4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (rigright_answerswer4_2 == user_answer4_2 || rigright_answerswer4_2_2 == user_answer4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (rigright_answerswer4_3 == user_answer4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_4'>" + answers + "</div>";
}


//Phyton easy
function proverit10() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1 = 'print("Hello World")';
    var rigright_answerswer2 = "test = 123";
    var rigright_answerswer3 = "print(20//6)";
    var rigright_answerswer4 = "print(i)";

    var user_answer1 = document.getElementById("answer_1").value;
    var user_answer2 = document.getElementById("answer_2").value;
    var user_answer3 = document.getElementById("answer_3").value;
    var user_answer4 = document.getElementById("answer_4").value;

    if (rigright_answerswer1 == user_answer1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (rigright_answerswer2 == user_answer2) {
        ball += 1;
        answers += "<div class='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (rigright_answerswer3 == user_answer3) {
        ball += 1;
        answers += "<br><div class='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (rigright_answerswer4 == user_answer4) {
        ball += 1;
        answers += "<div class='output'>4. Верно </div>";
    } else { answers += "<div class='output'>4. Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}

//Phyton normal
function proverit11() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1 = 'test = [1,2,3]';
    var rigright_answerswer2 = "test.reverse()";
    var rigright_answerswer3 = "numbers=list(range(100))";
    var rigright_answerswer4_1 = "assert text !=' '";
    var rigright_answerswer4_2 = "evir('Hello World')";

    var user_answer1 = document.getElementById("answer_1").value;
    var user_answer2 = document.getElementById("answer_2").value;
    var user_answer3 = document.getElementById("answer_3").value;
    var user_answer4_1 = document.getElementById("answer_4_1").value;
    var user_answer4_2 = document.getElementById("answer_4_2").value;

    if (rigright_answerswer1 == user_answer1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (rigright_answerswer2 == user_answer2) {
        ball += 1;
        answers += "<div class='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (rigright_answerswer3 == user_answer3) {
        ball += 1;
        answers += "<div class='output'>3. Верно </div>";
    } else { answers += "<div class='output'>3. Неверно </div>"; }

    if (rigright_answerswer4_1 == user_answer4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (rigright_answerswer4_2 == user_answer4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}


//Phyton hard
function proverit12() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1_1 = "ever = [1,2,3,4,5,6,7,8,9,10]";
    var rigright_answerswer1_2 = "ever2 = ever[::4]";
    var rigright_answerswer1_3 = "print(ever2)";
    var rigright_answerswer2_1 = "ever2 = range (2 , 101)[::4]";
    var rigright_answerswer2_2 = "for i in ever2:";
    var rigright_answerswer3_1 = "for i in range(10):";
    var rigright_answerswer3_2 = "print(random.randint(1,100))";
    var rigright_answerswer4_1 = "while 1==1:";
    var rigright_answerswer4_2 = "print('Число,' +str(i))";

    var user_answer1_1 = document.getElementById("answer_1_1").value;
    var user_answer1_2 = document.getElementById("answer_1_2").value;
    var user_answer1_3 = document.getElementById("answer_1_3").value;
    var user_answer2_1 = document.getElementById("answer_2_1").value;
    var user_answer2_2 = document.getElementById("answer_2_2").value;
    var user_answer3_1 = document.getElementById("answer_3_1").value;
    var user_answer3_2 = document.getElementById("answer_3_2").value;
    var user_answer4_1 = document.getElementById("answer_4_1").value;
    var user_answer4_2 = document.getElementById("answer_4_2").value;

    if (rigright_answerswer1_1 == user_answer1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (rigright_answerswer1_2 == user_answer1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (rigright_answerswer1_3 == user_answer1_3) {
        ball += 1;
        answers += "<div class='output'>1.3 Верно </div>";
    } else { answers += "<div class='output'>1.3 Неверно </div>"; }

    if (rigright_answerswer2_1 == user_answer2_1) {
        ball += 1;
        answers += "<br><div class='output'>2.1 Верно </div>";
    } else { answers += "<br><div class='output'>2.1 Неверно </div>"; }

    if (rigright_answerswer3_1 == user_answer3_1) {
        ball += 1;
        answers += "<div class='output'>3.1 Верно </div>";
    } else { answers += "<div class='output'>3.1 Неверно </div>"; }

    if (rigright_answerswer4_1 == user_answer4_1) {
        ball += 1;
        answers += "<div class='output'>4.1 Верно </div>";
    } else { answers += "<div class='output'>4.1 Неверно </div>"; }

    if (rigright_answerswer2_2 == user_answer2_2) {
        ball += 1;
        answers += "<br><div class='output'>2.2 Верно </div>";
    } else { answers += "<br><div class='output'>2.2 Неверно </div>"; }

    if (rigright_answerswer3_2 == user_answer3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (rigright_answerswer4_2 == user_answer4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar'>" + answers + "</div>";
}







//HTML easy
function proverit7() {
    var ball = 0;
    var answers = "";

    var rigright_answerswer1 = "<h1>Hello world</h1>";
    var rigright_answerswer2 = "<h1><b>привет</b></h1>";
    var rigright_answerswer3 = "<h1 align=”center”>Привет мир</h1>";
    var rigright_answerswer4 = "<h1><q>Человек должен мечтать.</q></h1>";

    var user_answer1 = document.getElementById("answer_1").value;
    var user_answer2 = document.getElementById("answer_2").value;
    var user_answer3 = document.getElementById("answer_3").value;
    var user_answer4 = document.getElementById("answer_4").value;

    if (rigright_answerswer1 == user_answer1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (rigright_answerswer2 == user_answer2) {
        ball += 1;
        answers += "<div class='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (rigright_answerswer3 == user_answer3) {
        ball += 1;
        answers += "<br><div class='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (rigright_answerswer4 == user_answer4) {
        ball += 1;
        answers += "<div class='output'>4. Верно </div>";
    } else { answers += "<div class='output'>4. Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}

//HTML normal
function proverit8() {
    var ball = 0;
    var answers = "";

    var right_answer1 = '<img src="logo.png" width="60px" height="60px">';
    var right_answer2_1 = '<a href="http://keksby.ru">';
    var right_answer2_2 = '<img src="cat.png" alt="Кекс">';
    var right_answer3_1 = "<li><h1>";
    var right_answer3_2 = '<a href="Saturday.html">СБ</a>';
    var right_answer3_3 = "</menu>";
    var right_answer4_1 = "<table>";
    var right_answer4_2 = "</table>";

    var user_answer1 = document.getElementById("answer_1").value;
    var user_answer2_1 = document.getElementById("answer_2_1").value;
    var user_answer2_2 = document.getElementById("answer_2_2").value;
    var user_answer3_1 = document.getElementById("answer_3_1").value;
    var user_answer3_2 = document.getElementById("answer_3_2").value;
    var user_answer3_3 = document.getElementById("answer_3_3").value;
    var user_answer4_1 = document.getElementById("answer_4_1").value;
    var user_answer4_2 = document.getElementById("answer_4_2").value;

    if (right_answer1 == user_answer1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (right_answer2_1 == user_answer2_1) {
        ball += 1;
        answers += "<div class='output'>2.1 Верно </div>";
    } else { answers += "<div class='output'>2.1 Неверно </div>"; }

    if (right_answer2_2 == user_answer2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (right_answer3_1 == user_answer3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (right_answer3_2 == user_answer3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (right_answer3_3 == user_answer3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (right_answer4_1 == user_answer4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (right_answer4_2 == user_answer4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar'>" + answers + "</div>";
}


//HTML hard
function proverit9() {
    var ball = 0;
    var answers = "";

    var right_answer1_1 = '<link href="external.css" rel="stylesheet">';
    var right_answer1_2 = '<script src="myjs.js"></script>';
    var right_answer2_1 = "</dd>";
    var right_answer2_2 = "</dt>";
    var right_answer2_3 = "</html>";
    var right_answer3_1 = "<details>";
    var right_answer3_2 = "</ul>";
    var right_answer3_3 = "</details>";
    var right_answer4_1 = '<meta charset="utf-8">';
    var right_answer4_2 = '<link rel="shortcut icon" href="logo.ico">';
    var right_answer4_3 = '<link rel="stylesheet" type="text/css" href="style.css">';

    var user_answer1_1 = document.getElementById("answer_1_1").value;
    var user_answer1_2 = document.getElementById("answer_1_2").value;
    var user_answer2_1 = document.getElementById("answer_2_1").value;
    var user_answer2_2 = document.getElementById("answer_2_2").value;
    var user_answer2_3 = document.getElementById("answer_2_3").value;
    var user_answer3_1 = document.getElementById("answer_3_1").value;
    var user_answer3_2 = document.getElementById("answer_3_2").value;
    var user_answer3_3 = document.getElementById("answer_3_3").value;
    var user_answer4_1 = document.getElementById("answer_4_1").value;
    var user_answer4_2 = document.getElementById("answer_4_2").value;
    var user_answer4_3 = document.getElementById("answer_4_3").value;

    if (right_answer1_1 == user_answer1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (right_answer1_2 == user_answer1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (right_answer2_1 == user_answer2_1) {
        ball += 1;
        answers += "<br><div class='output'>2.1 Верно </div>";
    } else { answers += "<br><div class='output'>2.1 Неверно </div>"; }

    if (right_answer2_2 == user_answer2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (right_answer2_3 == user_answer2_3) {
        ball += 1;
        answers += "<div class='output'>2.3 Верно </div>";
    } else { answers += "<div class='output'>2.3 Неверно </div>"; }

    if (right_answer3_1 == user_answer3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (right_answer3_2 == user_answer3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (right_answer3_3 == user_answer3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (right_answer4_1 == user_answer4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (right_answer4_2 == user_answer4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (right_answer4_3 == user_answer4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_4'>" + answers + "</div>";
}
