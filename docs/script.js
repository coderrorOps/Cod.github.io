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
        answers += "<br><div id='output'>1. Верно </div>";
    } else { answers += "<br><div class='output'>1. Неверно </div>"; }

    if (p_ae2 == p_e2) {
        ball += 1;
        answers += "<div id='output'>2. Верно </div>";
    } else { answers += "<div class='output'>2. Неверно </div>"; }

    if (p_ae3 == p_e3) {
        ball += 1;
        answers += "<br><div id='output'>3. Верно </div>";
    } else { answers += "<br><div class='output'>3. Неверно </div>"; }

    if (p_ae4 == p_e4) {
        ball += 1;
        answers += "<div id='output'>4. Верно </div>";
    } else { answers += "<div class='output'>4. Неверно </div>"; }

    document.getElementById('rez').innerHTML = "<div class = 'rezult'>Количество правильных ответов - " + ball + "</div><div class='output-bar'>" + answers + "</div>";
}
