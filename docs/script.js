//document.onloadstart = test;
//document.onselectstart = test;
//document.oncontextmenu = test;
//function test() {
//    return false
//}




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

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
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
function proverit4() {
    var ball = 0;
    var answers = "";

    var c_ae1_1 = ".header {";
    var c_ae2_1 = "width: 100%;";
    var c_ae2_2 = "height: 100%;";
    var c_ae3_1 = "height: 40px;";
    var c_ae4_1 = "color: #000;";
    var c_ae4_2 = "font-weight: bold;";

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

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}

//css Normal
function proverit5() {
    var ball = 0;
    var answers = "";

    var c_an1_1 = "padding: 16px 22px 23px 10px;";
    var c_an1_2 = "font-weight: normal;";
    var c_an1_3 = ".header-topmenu-bar ul li a:hover {";
    var c_an2_1 = "padding-top: 16px;";
    var c_an2_2 = "font-weight: normal;";
    var c_an2_3 = "text-align: center;";
    var c_an3_1 = "padding: 2px 3px;";
    var c_an3_2 = "border-bottom-right-radius: 20px;";
    var c_an3_3 = "background: #265ba1;";
    var c_an4_1 = "display: block;";
    var c_an4_2 = "position: fixed;";
    var c_an4_3 = "font-size: 30px;";

    var c_n1_1 = document.getElementById("zcn_1_1").value;
    var c_n1_2 = document.getElementById("zcn_1_2").value;
    var c_n1_3 = document.getElementById("zcn_1_3").value;
    var c_n2_1 = document.getElementById("zcn_2_1").value;
    var c_n2_2 = document.getElementById("zcn_2_2").value;
    var c_n2_3 = document.getElementById("zcn_2_3").value;
    var c_n3_1 = document.getElementById("zcn_3_1").value;
    var c_n3_2 = document.getElementById("zcn_3_2").value;
    var c_n3_3 = document.getElementById("zcn_3_3").value;
    var c_n4_1 = document.getElementById("zcn_4_1").value;
    var c_n4_2 = document.getElementById("zcn_4_2").value;
    var c_n4_3 = document.getElementById("zcn_4_3").value;

    if (c_an1_1 == c_n1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (c_an1_2 == c_n1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (c_an1_3 == c_n1_3) {
        ball += 1;
        answers += "<div class='output'>1.3 Верно </div>";
    } else { answers += "<div class='output'>1.3 Неверно </div>"; }

    if (c_an2_1 == c_n2_1) {
        ball += 1;
        answers += "<br><div class='output'>2.1 Верно </div>";
    } else { answers += "<br><div class='output'>2.1 Неверно </div>"; }

    if (c_an2_2 == c_n2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (c_an2_3 == c_n2_3) {
        ball += 1;
        answers += "<div class='output'>2.3 Верно </div>";
    } else { answers += "<div class='output'>2.3 Неверно </div>"; }

    if (c_an3_1 == c_n3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (c_an3_2 == c_n3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (c_an3_3 == c_n3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (c_an4_1 == c_n4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (c_an4_2 == c_n4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (c_an4_3 == c_n4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_4'>" + answers + "</div>";
}

//css Normal
function proverit6() {
    var ball = 0;
    var answers = "";

    var c_ah1_1 = "border-bottom: 1px solid #265ba1;";
    var c_ah1_2 = "border-bottom-left-radius: 15px;";
    var c_ah1_3 = "outline: none;";
    var c_ah2_1 = "background: #c5daf5;";
    var c_ah2_2 = "@media screen and (max-width:480px){";
    var c_ah2_3 = "}}";
    var c_ah3_1 = '.search-bar input[type="submit"] {';
    var c_ah3_2 = "z-index: 9;";
    var c_ah3_3 = "position: absolute;";
    var c_ah4_1 = ".top-menu-bar {";
        var c_ah4_2 = 'background: url("images/menu-bar.png");';
        var c_ah4_2_2 = 'background: url("images/menu-bar.jpg");';
    var c_ah4_3 = "line-height: 14px;";

    var c_h1_1 = document.getElementById("zch_1_1").value;
    var c_h1_2 = document.getElementById("zch_1_2").value;
    var c_h1_3 = document.getElementById("zch_1_3").value;
    var c_h2_1 = document.getElementById("zch_2_1").value;
    var c_h2_2 = document.getElementById("zch_2_2").value;
    var c_h2_3 = document.getElementById("zch_2_3").value;
    var c_h3_1 = document.getElementById("zch_3_1").value;
    var c_h3_2 = document.getElementById("zch_3_2").value;
    var c_h3_3 = document.getElementById("zch_3_3").value;
    var c_h4_1 = document.getElementById("zch_4_1").value;
    var c_h4_2 = document.getElementById("zch_4_2").value;
    var c_h4_3 = document.getElementById("zch_4_3").value;

    if (c_ah1_1 == c_h1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (c_ah1_2 == c_h1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (c_ah1_3 == c_h1_3) {
        ball += 1;
        answers += "<div class='output'>1.3 Верно </div>";
    } else { answers += "<div class='output'>1.3 Неверно </div>"; }

    if (c_ah2_1 == c_h2_1) {
        ball += 1;
        answers += "<br><div class='output'>2.1 Верно </div>";
    } else { answers += "<br><div class='output'>2.1 Неверно </div>"; }

    if (c_ah2_2 == c_h2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (c_ah2_3 == c_h2_3) {
        ball += 1;
        answers += "<div class='output'>2.3 Верно </div>";
    } else { answers += "<div class='output'>2.3 Неверно </div>"; }

    if (c_ah3_1 == c_h3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (c_ah3_2 == c_h3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (c_ah3_3 == c_h3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (c_ah4_1 == c_h4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (c_ah4_2 == c_h4_2 || c_ah4_2_2 == c_h4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (c_ah4_3 == c_h4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_4'>" + answers + "</div>";
}


//HTML easy
function proverit7() {
    var ball = 0;
    var answers = "";

    var h_ae1 = "b";
    var h_ae2 = "b";
    var h_ae3 = "b";
    var h_ae4 = "b";

    var h_e1 = document.getElementById("zhe_1").value;
    var h_e2 = document.getElementById("zhe_2").value;
    var h_e3 = document.getElementById("zhe_3").value;
    var h_e4 = document.getElementById("zhe_4").value;

    if (h_ae1 == h_e1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (h_ae2 == h_e2) {
        ball += 1;
        answers += "<div class='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (h_ae3 == h_e3) {
        ball += 1;
        answers += "<br><div class='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (h_ae4 == h_e4) {
        ball += 1;
        answers += "<div class='output'>4. Верно </div>";
    } else { answers += "<div class='output'>4. Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}
