

function enviar_cadastro(){

    var erros = cad_validado();
    nome_alerta.innerHTML = "";
    sobrenome_alerta.innerHTML = "";
    email_alerta.innerHTML = "";
    senha_alerta.innerHTML = "";

    if(erros.length > 0){
        for(var vezes = 0; vezes < erros.length; vezes++){
            var alerta = erros[vezes];

            if(alerta == erros[0]){
                var nome_1 = document.createElement("p");
                nome_1.innerHTML = alerta;
                nome_alerta.appendChild(nome_1);
            } else if(alerta == erros[1]){
                var sobrenome_1 = document.createElement("p");
                sobrenome_1.innerHTML = alerta;
                sobrenome_alerta.appendChild(sobrenome_1);
            } else if(alerta == erros[2]){
                var email_1 = document.createElement("p");
                email_1.innerHTML = alerta;
                email_alerta.appendChild(email_1);
            }else if (alerta == erros[3]){
                var senha_1 = document.createElement("p");
                senha_1.innerHTML = alerta;
                senha_alerta.appendChild(senha_1);
            }
        }
    } else{
        open_val();

    }
}

function cad_validado(){

var erros = [];

if(!nome.value){
    erros.push("Preencha o Campo");
}

if(!sobrenome.value){
    erros.push("Preencha o Campo"); 
}

if(!email.value || (email.value.search("@") == -1) || (email.value.search(".") == -1) || (email.value.search(" ") >= '') ){
    erros.push("O farmato de email é: usuariologin@dominio.com");
}

if(senha.value <= 7){
    erros.push("A senha deve ter no min 8 caracteres");
}

return erros;

}
