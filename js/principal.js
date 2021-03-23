var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista Aparecida";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];


    
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc");

    var imc = (peso / (altura * altura));

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("peso inválido");
        pesoValido = false;
        tdImc.textContent = "peso inválido";
        paciente.classList.add("paciente-invalido");


    }

    if (!alturaValida) {
        console.log("altura inválida");
        alturaValida = false;
        tdImc.textContent = "altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;


    }
}

function validaPeso(peso) {
    if(peso >=0 && peso < 1000){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    } 
}

function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
    
}

