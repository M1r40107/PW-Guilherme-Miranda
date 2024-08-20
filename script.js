//let titulo = document.getElementById("titulo").value;
//console.log(titulo);

function submeter() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
   
    //console.log(cpf);
    console.log(validaCPF(cpf));
}

function validaCPF(cpf) {

    if(cpf == "") {
        alert("Campo CPF não pode ser vazio");
        return false;
    }

    cpf = cpf.trim();

    if(/[a-zA-Z]/.test(cpf)) {
        alert("CPF não pode conter letras");
        return false;
    }

   if(!/^[\d.-]+$/.test(cpf)) {
    
    alert("CPF só pode ter números, '.' ou '-'");
    return false;

   }

   if(cpf.length != 11 && cpf.length != 14) {
    alert("Formato inválido");
    return false;

   }

   let soma = 0;
   for (let i = 0; i <= 9; i++){
    soma = soma + (cpf.charAt(i - 1) * (10 - (i - 1)));

   }
   console.log(soma);
   let resto = soma % 11;

   if (resto < 2) {
    if(cpf.charAt(9) != 0) {
        alert("CPF inválido!");
        return false;
    }
    return true;
   }
   

   let digitoVerificador1 = 11 - resto;
   if (digitoVerificador1 != cpf.charAt(9)) {
    alert("CPF inválido");
    return false;
   }


   return true;
}
