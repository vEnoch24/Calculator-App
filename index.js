function clearScreen(){
    document.getElementById("result").value = "";
}

function display(value){
    // var num = document.getElementById("result").value;
    // num += value;
    document.getElementById("result").value += value; 
}

function calculate(){
    var p = document.getElementById("result").value;
    var r = p.replaceAll(',', '');
    var q = eval(r);
    
    document.getElementById("result").value = q.toLocaleString("en-US");
}

function backSpace(){
    var val = document.getElementById("result").value;
    document.getElementById("result").value = val.substring(0, val.length - 1);
}