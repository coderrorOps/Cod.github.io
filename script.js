document.onloadstart = test;
document.onselectstart = test;
document.oncontextmenu = test;
function test() {
    return false
}

alert("   Для удобства использования сайта вы можете перейти в полноэкранный режим, нажав комбинацию клавиш Fn + F11")





function log_in() { 
var correct_password = "Rubic123";
  
var password = document.getElementById("pass").value;
  
if (correct_password == password){
window.location.href = "docs/index.html";
}   else {
alert("Неверный пароль")
}
}
    
