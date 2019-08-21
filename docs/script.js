document.onloadstart = test;
document.onselectstart = test;
document.oncontextmenu = test;
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
        var c_an3_1_1 = "padding: 2px 3px;";
        var c_an3_1_2 = "padding: 2% 3%;";
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

    if (c_an3_1_1 == c_n3_1 || c_an3_1_2 == c_n3_1) {
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

//css hard
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


//Phyton easy
function proverit10() {
    var ball = 0;
    var answers = "";

    var Pt_ae1 = 'print("Hello World")';
    var Pt_ae2 = "test = 123";
    var Pt_ae3 = "print(20//6)";
    var Pt_ae4 = "print(i)";

    var Pt_e1 = document.getElementById("zPte_1").value;
    var Pt_e2 = document.getElementById("zPte_2").value;
    var Pt_e3 = document.getElementById("zPte_3").value;
    var Pt_e4 = document.getElementById("zPte_4").value;

    if (Pt_ae1 == Pt_e1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (Pt_ae2 == Pt_e2) {
        ball += 1;
        answers += "<div class='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (Pt_ae3 == Pt_e3) {
        ball += 1;
        answers += "<br><div class='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (Pt_ae4 == Pt_e4) {
        ball += 1;
        answers += "<div class='output'>4. Верно </div>";
    } else { answers += "<div class='output'>4. Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}

//Phyton normal
function proverit11() {
    var ball = 0;
    var answers = "";

    var Pt_an1 = 'test = [1,2,3]';
    var Pt_an2 = "test.reverse()";
    var Pt_an3 = "numbers=list(range(100))";
    var Pt_an4_1 = "assert text !=' '";
    var Pt_an4_2 = "evir('Hello World')";

    var Pt_n1 = document.getElementById("zPtn_1").value;
    var Pt_n2 = document.getElementById("zPtn_2").value;
    var Pt_n3 = document.getElementById("zPtn_3").value;
    var Pt_n4_1 = document.getElementById("zPtn_4_1").value;
    var Pt_n4_2 = document.getElementById("zPtn_4_2").value;

    if (Pt_an1 == Pt_n1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (Pt_an2 == Pt_n2) {
        ball += 1;
        answers += "<div class='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (Pt_an3 == Pt_n3) {
        ball += 1;
        answers += "<div class='output'>3. Верно </div>";
    } else { answers += "<div class='output'>3. Неверно </div>"; }

    if (Pt_an4_1 == Pt_n4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (Pt_an4_2 == Pt_n4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}


//Phyton hard
function proverit12() {
    var ball = 0;
    var answers = "";

    var Pt_ah1_1 = "ever = [1,2,3,4,5,6,7,8,9,10]";
    var Pt_ah1_2 = "ever2 = ever[::4]";
    var Pt_ah1_3 = "print(ever2)";
    var Pt_ah2_1 = "ever2 = range (2 , 101)[::4]";
    var Pt_ah2_2 = "for i in ever2:";
    var Pt_ah3_1 = "for i in range(10):";
    var Pt_ah3_2 = "print(random.randint(1,100))";
    var Pt_ah4_1 = "while 1==1:";
    var Pt_ah4_2 = "print('Число,' +str(i))";

    var Pt_h1_1 = document.getElementById("zPth_1_1").value;
    var Pt_h1_2 = document.getElementById("zPth_1_2").value;
    var Pt_h1_3 = document.getElementById("zPth_1_3").value;
    var Pt_h2_1 = document.getElementById("zPth_2_1").value;
    var Pt_h2_2 = document.getElementById("zPth_2_2").value;
    var Pt_h3_1 = document.getElementById("zPth_3_1").value;
    var Pt_h3_2 = document.getElementById("zPth_3_2").value;
    var Pt_h4_1 = document.getElementById("zPth_4_1").value;
    var Pt_h4_2 = document.getElementById("zPth_4_2").value;

    if (Pt_ah1_1 == Pt_h1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (Pt_ah1_2 == Pt_h1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (Pt_ah1_3 == Pt_h1_3) {
        ball += 1;
        answers += "<div class='output'>1.3 Верно </div>";
    } else { answers += "<div class='output'>1.3 Неверно </div>"; }

    if (Pt_ah2_1 == Pt_h2_1) {
        ball += 1;
        answers += "<br><div class='output'>2.1 Верно </div>";
    } else { answers += "<br><div class='output'>2.1 Неверно </div>"; }

    if (Pt_ah3_1 == Pt_h3_1) {
        ball += 1;
        answers += "<div class='output'>3.1 Верно </div>";
    } else { answers += "<div class='output'>3.1 Неверно </div>"; }

    if (Pt_ah4_1 == Pt_h4_1) {
        ball += 1;
        answers += "<div class='output'>4.1 Верно </div>";
    } else { answers += "<div class='output'>4.1 Неверно </div>"; }

    if (Pt_ah2_2 == Pt_h2_2) {
        ball += 1;
        answers += "<br><div class='output'>2.2 Верно </div>";
    } else { answers += "<br><div class='output'>2.2 Неверно </div>"; }

    if (Pt_ah3_2 == Pt_h3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (Pt_ah4_2 == Pt_h4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar'>" + answers + "</div>";
}







//HTML easy
function proverit7() {
    var ball = 0;
    var answers = "";

    var Ht_ae1 = "<h1>Hello world</h1>";
    var Ht_ae2 = "<h1><b> привет</b></h1>";
    var Ht_ae3 = "<h1 align=”center”>Привет мир</h1>";
    var Ht_ae4 = "<h1><q>Человек должен мечтать.</q></h1>";

    var Ht_e1 = document.getElementById("zHte_1").value;
    var Ht_e2 = document.getElementById("zHte_2").value;
    var Ht_e3 = document.getElementById("zHte_3").value;
    var Ht_e4 = document.getElementById("zHte_4").value;

    if (Ht_ae1 == Ht_e1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (Ht_ae2 == Ht_e2) {
        ball += 1;
        answers += "<div class='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (Ht_ae3 == Ht_e3) {
        ball += 1;
        answers += "<br><div class='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (Ht_ae4 == Ht_e4) {
        ball += 1;
        answers += "<div class='output'>4. Верно </div>";
    } else { answers += "<div class='output'>4. Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_2'>" + answers + "</div>";
}

//HTML normal
function proverit8() {
    var ball = 0;
    var answers = "";

    var Ht_an1 = '<img src="logo.png"width="60px" height="60px">';
    var Ht_an2_1 = '<a href="http://keksby.ru">';
    var Ht_an2_2 = '<img src="cat.png" alt="Кекс">';
    var Ht_an3_1 = "<li><h1>";
    var Ht_an3_2 = '<a href="Saturday.html">СБ</a>';
    var Ht_an3_3 = "</menu>";
    var Ht_an4_1 = "<table>";
    var Ht_an4_2 = "</table>";

    var Ht_n1 = document.getElementById("zHtn_1").value;
    var Ht_n2_1 = document.getElementById("zHtn_2_1").value;
    var Ht_n2_2 = document.getElementById("zHtn_2_2").value;
    var Ht_n3_1 = document.getElementById("zHtn_3_1").value;
    var Ht_n3_2 = document.getElementById("zHtn_3_2").value;
    var Ht_n3_3 = document.getElementById("zHtn_3_3").value;
    var Ht_n4_1 = document.getElementById("zHtn_4_1").value;
    var Ht_n4_2 = document.getElementById("zHtn_4_2").value;

    if (Ht_an1 == Ht_n1) {
        ball += 1;
        answers += "<div class='output'>1. Верно </div>";
    } else { answers += "<div class='output'>1. Неверно </div>"; }

    if (Ht_an2_1 == Ht_n2_1) {
        ball += 1;
        answers += "<div class='output'>2.1 Верно </div>";
    } else { answers += "<div class='output'>2.1 Неверно </div>"; }

    if (Ht_an2_2 == Ht_n2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (Ht_an3_1 == Ht_n3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (Ht_an3_2 == Ht_n3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (Ht_an3_3 == Ht_n3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (Ht_an4_1 == Ht_n4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (Ht_an4_2 == Ht_n4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar'>" + answers + "</div>";
}


//HTML hard
function proverit9() {
    var ball = 0;
    var answers = "";

    var Ht_ah1_1 = '<link href="external.css" rel="stylesheet">';
    var Ht_ah1_2 = '<script src="myjs.js"></script>';
    var Ht_ah2_1 = "</dd>";
    var Ht_ah2_2 = "</dt>";
    var Ht_ah2_3 = "</html>";
    var Ht_ah3_1 = "<details>";
    var Ht_ah3_2 = "</ul>";
    var Ht_ah3_3 = "</details>";
    var Ht_ah4_1 = '<meta charset="utf-8">';
    var Ht_ah4_2 = '<link rel="shortcut icon" href="logo.ico">';
    var Ht_ah4_3 = '<link rel="stylesheet" type="text/css" href="style.css">';

    var Ht_h1_1 = document.getElementById("zHth_1_1").value;
    var Ht_h1_2 = document.getElementById("zHth_1_2").value;
    var Ht_h2_1 = document.getElementById("zHth_2_1").value;
    var Ht_h2_2 = document.getElementById("zHth_2_2").value;
    var Ht_h2_3 = document.getElementById("zHth_2_3").value;
    var Ht_h3_1 = document.getElementById("zHth_3_1").value;
    var Ht_h3_2 = document.getElementById("zHth_3_2").value;
    var Ht_h3_3 = document.getElementById("zHth_3_3").value;
    var Ht_h4_1 = document.getElementById("zHth_4_1").value;
    var Ht_h4_2 = document.getElementById("zHth_4_2").value;
    var Ht_h4_3 = document.getElementById("zHth_4_3").value;

    if (Ht_ah1_1 == Ht_h1_1) {
        ball += 1;
        answers += "<div class='output'>1.1 Верно </div>";
    } else { answers += "<div class='output'>1.1 Неверно </div>"; }

    if (Ht_ah1_2 == Ht_h1_2) {
        ball += 1;
        answers += "<div class='output'>1.2 Верно </div>";
    } else { answers += "<div class='output'>1.2 Неверно </div>"; }

    if (Ht_ah2_1 == Ht_h2_1) {
        ball += 1;
        answers += "<br><div class='output'>2.1 Верно </div>";
    } else { answers += "<br><div class='output'>2.1 Неверно </div>"; }

    if (Ht_ah2_2 == Ht_h2_2) {
        ball += 1;
        answers += "<div class='output'>2.2 Верно </div>";
    } else { answers += "<div class='output'>2.2 Неверно </div>"; }

    if (Ht_ah2_3 == Ht_h2_3) {
        ball += 1;
        answers += "<div class='output'>2.3 Верно </div>";
    } else { answers += "<div class='output'>2.3 Неверно </div>"; }

    if (Ht_ah3_1 == Ht_h3_1) {
        ball += 1;
        answers += "<br><div class='output'>3.1 Верно </div>";
    } else { answers += "<br><div class='output'>3.1 Неверно </div>"; }

    if (Ht_ah3_2 == Ht_h3_2) {
        ball += 1;
        answers += "<div class='output'>3.2 Верно </div>";
    } else { answers += "<div class='output'>3.2 Неверно </div>"; }

    if (Ht_ah3_3 == Ht_h3_3) {
        ball += 1;
        answers += "<div class='output'>3.3 Верно </div>";
    } else { answers += "<div class='output'>3.3 Неверно </div>"; }

    if (Ht_ah4_1 == Ht_h4_1) {
        ball += 1;
        answers += "<br><div class='output'>4.1 Верно </div>";
    } else { answers += "<br><div class='output'>4.1 Неверно </div>"; }

    if (Ht_ah4_2 == Ht_h4_2) {
        ball += 1;
        answers += "<div class='output'>4.2 Верно </div>";
    } else { answers += "<div class='output'>4.2 Неверно </div>"; }

    if (Ht_ah4_3 == Ht_h4_3) {
        ball += 1;
        answers += "<div class='output'>4.3 Верно </div>";
    } else { answers += "<div class='output'>4.3 Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class='rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar output-bar_4'>" + answers + "</div>";
}
