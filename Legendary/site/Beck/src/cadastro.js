function enviar_cadastro(){

//tira o comportamento padrao do formulario, impedindo ele de resetar a pagina
 event.preventDefault();

    var erros = cad_validado();
    
    if(erros == 0){
        cad_banco();
        open_val(); 
    } 
    
}


function cad_validado(){

var erros = 0;

if(!nome.value){
    document.getElementById('nome_alerta').style.display = 'block';
    nome_alerta.innerHTML = "Preencha o Campo";
    erros++;
} else{
    document.getElementById('nome_alerta').style.display = 'none';
    nome_alerta.innerHTML = '';
}

if(!sobrenome.value){
    document.getElementById('sobrenome_alerta').style.display = 'block';
    sobrenome_alerta.innerHTML = "Preencha o Campo"; 
    erros++;
} else{
    document.getElementById('sobrenome_alerta').style.display = 'none';
    sobrenome_alerta.innerHTML = '';
}

if(!email.value || (email.value.search("@") == -1) || (email.value.search(".") == -1) || (email.value.search(" ") >= '') ){
    document.getElementById('email_alerta').style.display = 'block';
    email_alerta.innerHTML = "O farmato de email é: usuariologin@dominio.com";
    erros++;
}else{
    document.getElementById('email_alerta').style.display = 'none';
    email_alerta.innerHTML = '';
}

if(senha.value.length < 8){
    document.getElementById('senha_alerta').style.display = 'block';
    senha_alerta.innerHTML = "A senha deve ter no min 8 caracteres";
    erros++;
} else{
    document.getElementById('senha_alerta').style.display = 'none';
    senha_alerta.innerHTML = '';
}

return erros;

}


// formulario.document.addEventListener("submit", enviar_cadastro);

function cad_banco(event) {

    //pegando os dados do formulario
    let nome_inserido = nome.value;
    let sobrenome_inserido = sobrenome.value;
    let email_inserido = email.value;
    let senha_inserido = senha.value;
    

    //criando uma variavel para os parametros que serao enviados
    let params = "nome=" + nome_inserido + "&sobrenome=" + sobrenome_inserido + "&email=" + email_inserido + "&senha=" + senha_inserido;

    //abrindo a conexão com a rota
    let ajax = new XMLHttpRequest();
    ajax.open("POST", "http://localhost:3333/users");
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.send(params);
     
}

