var nr=0;
restart(nr);
function ловиЧисло() {
    var сообщение="";
    var значение=document.getElementById("nr").value;
    сообщение=((значение>=nr-10)&&(значение<=nr+10)) ? "Тепло" : "Холодно";
    if (значение==nr) (сообщение="<span class='ПОБЕДА'>Это оно!!!</span>");
    document.getElementById("rez1").innerHTML=сообщение;
    document.getElementById("gen").innerHTML=значение;
}
function вводиЧисло(){
    var значение=document.getElementById("txt").value;
    var шаблон=/^[0-9]{1,2}$/;
    var сообщение="";
    if (!(шаблон.test(значение))) {
        сообщение="Введите целое число из одной или двух цифр!";
    }
    else if(!(значение==nr)) {
        сообщение="Попробуй еще раз!";
    } else {
        сообщение="Браво! Ты угадал число!"
    }
    document.getElementById("rez2").innerHTML=сообщение;
}
function restart() {
    nr=Math.floor(Math.random(nr)*78);
    document.getElementById("rez1").innerHTML="";
    document.getElementById("rez2").innerHTML="";
    document.getElementById("txt").value="";
    document.getElementById("nr").value="";
    document.getElementById("gen").innerHTML="";
}