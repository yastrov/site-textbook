function clearAllElem(){
    /*Clear all alements values and status in test.*/
    var resEl = document.getElementById("result");
    if (resEl != null) resEl.innerHTML = '';
    var input = document.getElementsByTagName('input');
    if ( input == null ) return;
        for (var i = 0; i < input.length; i++){
            if ((input[i].type === "checkbox") || (input[i].type === "radio")){
                if ( input[i].checked == true ){
                    input[i].checked = false;
                }
            }
            else{
                if ( input[i].type === "text" ){
                    input[i].value = "";
                }
            }
        }
    var elems = document.getElementsByClassName('errorclass');
    for (var i = 0; i < elems.length; i++){
        elems[i].className = '';
    }
    elems = document.getElementsByClassName('rightclass');
    for (var i = 0; i < elems.length; i++){
        elems[i].className = '';
    }
}

function mark(element_name, flag) {
    var el = document.getElementById(element_name);
    if (flag === true){
        el.className = 'rightclass';
    }
    else {
        el.className = 'errorclass';
    }
}

function test () {
    form = document.getElementsByTagName('form')[0];
    var right_answers = 0;

    if(form.r1[2].checked) {right_answers++; mark("T1",true);} else { mark("T1",false);}
    if(form.r2[0].checked) {right_answers++; mark("T2",true);} else { mark("T2",false);}
    if(form.r3[1].checked) {right_answers++; mark("T3",true);} else { mark("T3",false);}
    if(form.r4[0].checked) {right_answers++; mark("T4",true);} else { mark("T4",false);}
    if(form.c3.checked && form.c2.checked && !(form.c1.checked)) {right_answers++; mark("T5",true);} else { mark("T5",false);}
    if(form.r5[2].checked) {right_answers++; mark("T6",true);} else { mark("T6",false);}
    if(form.r6[0].checked) {right_answers++; mark("T7",true);} else { mark("T7",false);}
    if(form.r7[1].checked) {right_answers++; mark("T8",true);} else { mark("T8",false);}
    if(form.r8[0].checked) {right_answers++; mark("T9",true);} else { mark("T9",false);}
    if(form.r9[0].checked) {right_answers++; mark("T10",true);} else { mark("T10",false);}


    var resEl = document.getElementById("result");
        if(resEl == null) {
            console.log('Внимание: Отсутствует поле для вывода результата.');
            return;
        }
        if(right_answers == 11){
            resEl.innerHTML = "Все правильно!";
        }
        if(right_answers > 5){
            resEl.innerHTML = "Что-то вы определенно знаете:)!";
        }
        if(right_answers < 5){
            resEl.innerHTML = "Мало знаний, учите ещё!";
        }
        if(right_answers == 0){
            resEl.innerHTML = "Вы ничего не знаете!";
        }
}

window.onload = function(event){
    try{
        document.getElementById('cleaner').onclick = clearAllElem; 
    }
    catch(e){
        console.log("Element with id='cleaner' can not find.");
    }
    try{
        document.getElementById('examiner').onclick = test;
    }
    catch(e){
        ;
    }
};