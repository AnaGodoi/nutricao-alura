var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) { 
    event.preventDefault(); 

    var form = document.querySelector("#form-adiciona"); 

    var paciente = obtemDadosPacientes(form); 

    var erros = validaPaciente(paciente)  
    console.log(erros);

    if (erros.length > 0) { 
        exibeMensagemDeErro(erros);
        return; 
    }

    addPacienteNaTabela(paciente);

    form.reset(); 

    var mensagensErro = document.querySelector("#mensagens-erro"); 
    mensagensErro.innerHTML = ""; 
});


function addPacienteNaTabela(paciente) {
    var pacienteTr = criaTr(paciente); 
    var tabela = document.querySelector("#tabela-pacientes"); 
    tabela.appendChild(pacienteTr);

}


function obtemDadosPacientes(form) { 

    var paciente = { 
        nome: form.nome.value, 
        altura: form.altura.value, 
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value) 
    }

    return paciente;
}


function montaTd(dado, classe) { 
    var td = document.createElement("td"); 
    td.textContent = dado; 
    td.classList.add(classe); 

    return td; 
}


function criaTr(paciente) { 
    var pacienteTr = document.createElement("tr"); 
    pacienteTr.classList.add("paciente"); 

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); 
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura")); 
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura")); 
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr; 
}


function validaPaciente(paciente) { 
    var erros = []; 

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.altura.length == 0) {

        erros.push("A altura não pode ser em branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }


    if (paciente.nome.length == 0) { 
        erros.push("O nome não pode ser em branco"); 
    }

    if (!validaPeso(paciente.peso)) {  
        erros.push("Peso é inválido"); 
    }

    if (!validaAltura(paciente.altura)) { 
        erros.push("Altura é inválida"); 
    }

    return erros; 
}


function exibeMensagemDeErro(erros) { 
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {  
        var li = document.createElement("li"); 
        li.textContent = erro; 
        ul.appendChild(li); 
    })
}

