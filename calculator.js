function num(val) {
   document.getElementById('result').value += val;  
}
function result() {
   var exp = document.getElementById('result').value;
   var total = eval(exp);
   document.getElementById('result').value = total;
}
function clearSpace() {
   document.getElementById('result').value = "";
}
function back() {
   var ev = document.getElementById('result');
   ev.value = ev.value.slice(0,-1);
}