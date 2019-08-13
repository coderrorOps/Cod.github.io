document.onloadstart = test;
document.onselectstart = test;
document.oncontextmenu = test;
function test() {
    return false
}





function proverit1() {
    var ball = 0;
    var answers = "";

    var p_ae1 = "b = 12;";
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

function proverit2() {
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