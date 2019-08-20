document.onloadstart = test;
document.onselectstart = test;
document.oncontextmenu = test;
function test() {
    return false
}

function log_in() { 
var correct_password = "Rubic123";
  
var password = document.getElementById("pass").value;
  
if (correct_password == password){
document.location.href = "https://coderrorops.github.io/docs/index.html";
}
