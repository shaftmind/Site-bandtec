
let seila = document.getElementById('login');
seila.addEventListener('submit', acessar_login);

let emailx = document.getElementById('email_colocado');
let senhax = document.getElementById('senha_colocado');

function acessar_login(event) {

    event.preventDefault();

    let problemax = document.getElementById('alerta-login');
    let ajax = new XMLHttpRequest();
    let email_v = emailx.value;
    let senha_v = senhax.value;
    let params = "email=" + email_v + "&senha=" + senha_v;


    //abre conexao com a segunda rota post
    ajax.open("POST", "http://localhost:3333/login");
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


    //verifica se a nossa rota devolveu uma resposta
    ajax.onreadystatechange = function() {
        if(ajax.status == 200 && ajax.readyState == 4) {
            
            //pega o texto da nossa resposta (response) que vem da rota
            let cadastrados = JSON.parse(ajax.responseText);

            if(cadastrados.length == 0){
                problemax.style.display = "block";
                problemax.innerHTML = `<span style="color: white;">Email ou Senha incorretos</span>`
            } else{
                window.location.href = 'usuario-acesso.html'
            }
            }
        }

    //Para a conexao funcionar, temos que colocar o ajax.send, porem como a rota é de get, não enviamos nada
    ajax.send(params);
}  
