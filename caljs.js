window.onload = function(){
  var but1 = document.getElementById("one");
  var but2 = document.getElementById("two");
  var but3 = document.getElementById("three");
  var but4 = document.getElementById("four");
  var but5 = document.getElementById("five");
  var but6 = document.getElementById("six");
  var but7 = document.getElementById("seven");
  var but8 = document.getElementById("eight");
  var but9 = document.getElementById("nine");
  var butequals = document.getElementById("equal");
  var butdivide = document.getElementById("divide");
  var butmul = document.getElementById("mul");
  var butadd = document.getElementById("add");
  var butsub = document.getElementById("sub");
  var butzero = document.getElementById("zero");
  var butdot = document.getElementById("dot");
  var val = document.getElementById("val");
  var clear = document.getElementById("clear")
  var value;
  but1.onclick = function(){
    val.innerText = val.innerText.toString() + "1";
  }
  but2.onclick = function(){
    val.innerText = val.innerText.toString() + "2";
  }
  but3.onclick = function(){
    val.innerText = val.innerText.toString() + "3";
  }
  but4.onclick = function(){
    val.innerText = val.innerText.toString() + "4";
  }
  but5.onclick = function(){
    val.innerText = val.innerText.toString() + "5";
  }
  but6.onclick = function(){
    val.innerText = val.innerText.toString() + "6";
  }
  but7.onclick = function(){
    val.innerText = val.innerText.toString() + "7";
  }
  but8.onclick = function(){
    val.innerText = val.innerText.toString() + "8";
  }
  but9.onclick = function(){
    val.innerText = val.innerText.toString() + "9";
  }
  butdot.onclick = function(){
    val.innerText = val.innerText.toString() + ".";
  }
  butzero.onclick = function(){
    val.innerText = val.innerText.toString() + "0";
  }
  butadd.onclick = function(){
    val.innerText = val.innerText.toString() + "+";
  }
  butmul.onclick = function(){
    val.innerText = val.innerText.toString() + "*";
  }
  butdivide.onclick = function(){
    val.innerText = val.innerText.toString() + "/";
  }
  butsub.onclick = function(){
    val.innerText = val.innerText.toString() + "-";
  }
  clear.onclick = function() {
    val.innerText = ""
  }
  butequals.onclick = function(){
    val.innerText = eval(val.innerText.toString()).toFixed(2);
  }
}
