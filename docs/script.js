//document.onloadstart = test;
//document.onselectstart = test;
//document.oncontextmenu = test;
function test() {
    return false
}




//Pascal easy
function proverit1() {
    var ball = 0;
    var answers = "";

    var p_ae1 = "writeln('Привет', name);";
    var p_ae2 = "var";
    var p_ae3 = "a:= 1;";
    var p_ae4 = "end.";

    var p_e1 = document.getElementById("z_1").value;
    var p_e2 = document.getElementById("z_2").value;
    var p_e3 = document.getElementById("z_3").value;
    var p_e4 = document.getElementById("z_4").value;

    if (p_ae1 == p_e1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (p_ae2 == p_e2) {
        ball += 1;
        answers += "<div class='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (p_ae3 == p_e3) {
        ball += 1;
        answers += "<br><div class='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (p_ae4 == p_e4) {
        ball += 1;
        answers += "<div class='output'>4. Верно </div>";
    } else { answers += "<div class='output'>4. Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar'>" + answers + "</div>";
}

//pascal normal
function proverit2() {
    var ball = 0;
    var answers = "";

    var p_an1_1 = "while i <= 10 do ";
    var p_an2_1 = "i: longint;";
    var p_an2_2 = "i:= i+1;";
    var p_an3_1 = "writeln('Введите первое число');";
    var p_an3_2 = "readln(a);";
    var p_an3_3 = "readln(b);";
    var p_an4_1 = "a,b: longint;";
    var p_an4_2 = "writeln('вычитание = ', a-b);";
    var p_an4_3 = "writeln('произведение = ', a*b);";

    var p_n1_1 = document.getElementById("zpn_1_1").value;
    var p_n2_1 = document.getElementById("zpn_2_1").value;
    var p_n2_2 = document.getElementById("zpn_2_2").value;
    var p_n3_1 = document.getElementById("zpn_3_1").value;
    var p_n3_2 = document.getElementById("zpn_3_2").value;
    var p_n3_3 = document.getElementById("zpn_3_3").value;
    var p_n4_1 = document.getElementById("zpn_4_1").value;
    var p_n4_2 = document.getElementById("zpn_4_2").value;
    var p_n4_3 = document.getElementById("zpn_4_3").value;

    if (p_an1_1 == p_n1_1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (p_an2_1 == p_n2_1) {
        ball += 1;
        answers += "<div class='output'>2.1 Верно </div>";
    } else { answers += "<div class='output'>2.1 Неверно </div>"; }

    if (p_an2_2 == p_n2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (p_an3_1 == p_n3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (p_an3_2 == p_n3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (p_an3_3 == p_n3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (p_an4_1 == p_n4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (p_an4_2 == p_n4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (p_an4_3 == p_n4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar'>" + answers + "</div>";
}

//pascal hard
function proverit3() {
    var ball = 0;
    var answers = "";

    var p_ah1_1 = "readln(day);";
    var p_ah1_2 = "6 :writeln('суббота');";
    var p_ah1_3 = "writeln('Неверный номер дня недели');";
    var p_ah2_1 = "writeln('2-ое число меньше 39');";
    var p_ah2_2 = "writeln('Второе число >= 39';";
    var p_ah2_3 = "end.";
    var p_ah3_1 = "a = 12;";
    var p_ah3_2 = "begin";
    var p_ah3_3 = "writeln('это равно ', b/a);";
    var p_ah4_1 = "i: longint;";
    var p_ah4_2 = "for i:= 0 to 10 do;";
    var p_ah4_3 = "end.";

    var p_h1_1 = document.getElementById("zph_1_1").value;
    var p_h1_2 = document.getElementById("zph_1_2").value;
    var p_h1_3 = document.getElementById("zph_1_3").value;
    var p_h2_1 = document.getElementById("zph_2_1").value;
    var p_h2_2 = document.getElementById("zph_2_2").value;
    var p_h2_3 = document.getElementById("zph_2_3").value;
    var p_h3_1 = document.getElementById("zph_3_1").value;
    var p_h3_2 = document.getElementById("zph_3_2").value;
    var p_h3_3 = document.getElementById("zph_3_3").value;
    var p_h4_1 = document.getElementById("zph_4_1").value;
    var p_h4_2 = document.getElementById("zph_4_2").value;
    var p_h4_3 = document.getElementById("zph_4_3").value;

    if (p_ah1_1 == p_h1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (p_ah1_2 == p_h1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (p_ah1_3 == p_h1_3) {
        ball += 1;
        answers += "<div class='output'>1.3 Верно </div>";
    } else { answers += "<div class='output'>1.3 Неверно </div>"; }

    if (p_ah2_1 == p_h2_1) {
        ball += 1;
        answers += "</br><div class='output'>2.1 Верно </div>";
    } else { answers += "</br><div class='output'>2.1 Неверно </div>"; }

    if (p_ah2_2 == p_h2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (p_ah2_3 == p_h2_3) {
        ball += 1;
        answers += "<div class='output'>2.3 Верно </div>";
    } else { answers += "<div class='output'>2.3 Неверно </div>"; }

    if (p_ah3_1 == p_h3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (p_ah3_2 == p_h3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (p_ah3_3 == p_h3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (p_ah4_1 == p_h4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (p_ah4_2 == p_h4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (p_ah4_3 == p_h4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_4'>" + answers + "</div>";
}

//css easy
function proverit5() {
    var ball = 0;
    var answers = "";

    var c_ae1_1 = "b";
    var c_ae2_1 = "b";
    var c_ae2_2 = "b";
    var c_ae3_1 = "b";
    var c_ae4_1 = "b";
    var c_ae4_2 = "b";

    var c_e1_1 = document.getElementById("zce_1_1").value;
    var c_e2_1 = document.getElementById("zce_2_1").value;
    var c_e2_2 = document.getElementById("zce_2_2").value;
    var c_e3_1 = document.getElementById("zce_3_1").value;
    var c_e4_1 = document.getElementById("zce_4_1").value;
    var c_e4_2 = document.getElementById("zce_4_2").value;

    if (c_ae1_1 == c_e1_1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (c_ae2_1 == c_e2_1) {
        ball += 1;
        answers += "<div class='output'>2.1 Верно </div>";
    } else { answers += "<div class='output'>2.1 Неверно </div>"; }

    if (c_ae2_2 == c_e2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (c_ae3_1 == c_e3_1) {
        ball += 1;
        answers += "<br><div class='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (c_ae4_1 == c_e4_1) {
        ball += 1;
        answers += "<div class='output'>4.1 Верно </div>";
    } else { answers += "<div class='output'>4.1 Неверно </div>"; }

    if (c_ae4_2 == c_e4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar'>" + answers + "</div>";
}