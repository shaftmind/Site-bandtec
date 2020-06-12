

function enviar_cadastro(){
    var erros = cad_validado();

    if(erros.length > 0){
        for(var vezes = 0; vezes < erros.length; vezes++){
            var alerta = erros[vezes];

            if(alerta == erros[0]){
             nome_alerta.innerHTML = alerta;
            } else if(alerta == erros[1]){
                sobrenome_alerta.innerHTML = alerta;
            } else if(alerta == erros[2]){
                email_alerta.innerHTML = alerta;
            }else if (alerta == erros[3]){
                senha_alerta.innerHTML = alerta;
            }
        }
    }
}

function cad_validado(){

var erros = [];

if(!nome.value){
    erros.push("Preencha o Campo");
   //  aviso.classList.add('aviso_1')
}

if(!sobrenome.value){
    erros.push("Preencha o Campo");
   //  aviso.classList.add('aviso_2')
}

if(!email.value || (email.value.search("@") == -1) || (email.value.search(".") == -1) || (email.value.search(" ") >= '') ){
    erros.push("O farmato de email é: usuariologin@dominio.com")
   //  aviso.classList.add('aviso_3')
}

if(senha.value <= 7){
    erros.push("A senha deve ter no min 8 caracteres")
   //  aviso.classList.add('aviso_4')
}

return erros;

}



// function cad_validado(){
//     modal_cad.classList.add('cadastro_ativo');
// }