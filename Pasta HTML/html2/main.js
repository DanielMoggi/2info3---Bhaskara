
var inputResultado = document.getElementById("ibputDisplayResultado");

var calculo = {
    valorSalvo: null,
    funcaoParacalcular: null
};

function somarValores(valor1, valor2){
    return valor1 + valor2;
}

function subtrairValores(valor1, valor2){
    return valor1 - valor2;
}

function multiplicarValores(valor1, valor2){
    return valor1 * valor2;
}

function dividirValores(valor1, valor2){
    if(valor2 == 0){
        return "Erro, divisão por zero!"
    }else{
        return valor1 / valor2;
    }
}

function limparDados(){
    inputResultado.value = "";
    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
}

function clicarPonto(){
    if(inputResultado.value === "" || isNaN(inputresultado.value)){
        inputResultado.value = "0.";
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + ".";
    }
}

function atribuirOperacao(operador){
    if(operador == "+"){
        calculo.funcaoParaCalcular = somarValores;
    } else if(operador == "-"){
        calculo.funcaoParaCalcular = subtrairValores;
    } else if(operador == "*"){
        calculo.funcaoParaCalcular = multiplicarValores;
    } else {
        calculo.funcaoParaCalcular = dividirValores;
    }
}

function clicarOperador() {
    if(!isNaN(inputResultado.value)) {
        if(calculo.valorSalvo == null) {
            calculo.valorSalvo = Number(inputResultado.value);
        }else if(calculo.funcaoParaCalcular != null){
            calculo.valorSalvo = calculo.funcaoParacalcular(calculo.valorSalvo, Number 
            (inputResultado.value));
        }
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResultado.value = operador;
}

function clicarNumero() {
    if (isNaN(inputresultado.value)) {
        inputresultado.value = event.target.textContent;
    }else{
        inputResultado.value += event.target.textContent;
    }
}

function clicarResultado() {
    if(!isNaN(inputresultado.value) && calculo.funcaoParaCalcular != null) {
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number
        (inputResultado.value));
        calculo.valoSalvo = resultado;
        calculo.funcaoParaCalcular = null;
    }
}

function atribuirEventos() {
    document.getElementById("btnValor0").addEventListener("click", clicarNumero);
    document.getElementById("btnValor1").addEventListener("click", clicarNumero);
    document.getElementById("btnValor2").addEventListener("click", clicarNumero);
    document.getElementById("btnValor3").addEventListener("click", clicarNumero);
    document.getElementById("btnValor4").addEventListener("click", clicarNumero);
    document.getElementById("btnValor5").addEventListener("click", clicarNumero);
    document.getElementById("btnValor6").addEventListener("click", clicarNumero);
    document.getElementById("btnValor7").addEventListener("click", clicarNumero);
    document.getElementById("btnValor8").addEventListener("click", clicarNumero);
    document.getElementById("btnValor9").addEventListener("click", clicarNumero);
    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    document.getElementById("btnDividir").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnSomar").addEventListener("click", clicarOperador);
    document.getElementById("btnPonto").addEventListener("click", clicarPonto);
    document.getElementById("btnResultado").addEventListener("click", clicarResultado);
}





