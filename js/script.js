function styleRep(element){
    /*Возвращаем элементу перавоначальный стиль.*/
    var parent = element.parentNode;
    if (parent.className === 'errorclass'){
        parent.className = '';
    }
    if (parent.className === 'rightclass'){
        parent.className = '';
    }
    if (element.type === "text" ){
        for(var i= 0; i < parent.childNodes.length; i++){
            var El = parent.childNodes[i];
            if (El.className === 'errorclass'){
                parent.removeChild(El);
            }
        }
    }
}
function styleErr(element){
    /*Задаем элементу стиль ошибки.*/
    var parent = element.parentNode;
    if(element.hasAttribute('truth')){
        parent.className = 'rightclass';
    }
    else parent.className = 'errorclass';
    if (element.type === "text" ){
        var container = document.createElement('p');
        container.className = 'errorclass';
        container.style.display = 'block';
        container.innerHTML = 'Правильный ответ: '+ element.getAttribute('truth');
        parent.appendChild(container);
        parent.className = 'errorclass';
    }
}

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
                styleRep(input[i]);
            }
            else{
                if ( input[i].type === "text" ){
                    input[i].value = "";
                    styleRep(input[i]);
                }
            }
        }
}

function test (event) {
    /*Check user input for truth.*/
    var res = false;
    var resItog = false;
    var input = document.getElementsByTagName('input');
    if ( input == null ) return;
        for (var i = 0; i < input.length; i++){
            if ( input[i].type === "text" ){
                if (input[i].value === input[i].getAttribute('truth')) {
                    res = true;
                }
                else{
                    res = false;
                }
            }
            if ((input[i].type === "checkbox") || (input[i].type === "radio")){
                if ( input[i].checked === true ){
                    if ( input[i].hasAttribute('truth') ){
                        res = true;
                    }
                    else{
                        res = false;
                    }
                }
                else{
                    if ( input[i].hasAttribute('truth') ){
                        res = false;
                    }
                    else{
                        res = true;
                    }
                }
            }
            if(res === false){
                if (event.target.id === 'tester'){
                    /*Присваиваем элементу стиль ошибки*/
                    styleErr(input[i]);
                }
                resItog = false;
            }
            else{
                if (resItog != false)
                    resItog = true;
            }
        }
        var resEl = document.getElementById("result");
        if(resEl == null) {
            console.log('Внимание: Отсутствует поле для вывода результата.');
            return;
        }
        if(resItog === true){
            resEl.innerHTML = "Все правильно!";
        }
        else{
            if (event.target.id === 'tester')
            resEl.innerHTML = "Тест провален!";
            else resEl.innerHTML = "Экзамен провален!";
        }
}
window.onload = function(event){
    try{
        document.getElementById('cleaner').onclick = clearAllElem; 
    }
    catch(e){
        console.log("Element with id='cleaner' can not find.");
    }
    var a = 0;
    try{
        document.getElementById('tester').onclick = test;
        a = 1;
    }
    catch(e){
        ;
    }
    try{
        document.getElementById('examiner').onclick = test;
        a = 1;
    }
    catch(e){
        ;
    }
    if (a != 1) {
        console.log("Внимание: Отсутствует кнопка с id='tester'|'examiner'");
    }
};