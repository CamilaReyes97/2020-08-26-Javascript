const answer = document.querySelector('#answer')

    function cualquierFuncion(){
        var num1 = parseInt(document.querySelector('#input1').value);
        var num2 = parseInt(document.querySelector('#input2').value);
        var obj={
            'num1': num1,
            'num2': num2
        }
        return obj
    }

    function suma(){
        var algo = cualquierFuncion()
        var resultadoSuma = algo.num1 + algo.num2
        answer.innerHTML=resultadoSuma
    }
    function resta(){
        var algo = cualquierFuncion()
        var resultadoSuma = algo.num1 - algo.num2
        answer.innerHTML=resultadoSuma
    }
    function multiplicacion(){
        var algo = cualquierFuncion()
        var resultadoSuma = algo.num1 * algo.num2
        answer.innerHTML=resultadoSuma
    }
    function division(){
        var algo = cualquierFuncion()
        var resultadoSuma = algo.num1 / algo.num2
        answer.innerHTML=resultadoSuma
    }



