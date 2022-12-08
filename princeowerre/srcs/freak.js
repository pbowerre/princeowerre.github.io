function insertNum(num){
    document.form.textview.value = document.form.textview.value+num

}

function equal(){
    var mer = document.form.textview.value;
    if(mer){
        document.form.textview.value = eval(mer)
    }
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    var mer = document.form.textview.value;
    document.form.textview.value = mer.substring(0,mer.length-1);
}