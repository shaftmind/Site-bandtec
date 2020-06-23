
var modal_cad = document.getElementById('modal_cadastro');
var modal_certo = document.getElementById('modal_ok')
var login_acessar = document.getElementById('login_acesso')

function open_modal() {
    modal_cad.classList.add('modal-ativo');
    limpar_form();
}

function close_modal() {
    modal_cad.classList.remove('modal-ativo');
}

function open_val() {
    modal_certo.classList.add('cadastro_ativo');
    modal_certo.style.display = 'block';
}

function close_val() {
    modal_certo.classList.remove('cadastro_ativo');
    modal_cad.classList.remove('modal-ativo');
}

function open_login() {
    login_acessar.classList.add('login-ativo')
}

function close_login() {
    login_acessar.classList.remove('login-ativo')
    limpar_form();
}

function limpar_form() {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}

// Teste 1 modal - 
//function open_modal(){
    // document.getElementById('modal').style.display = 'block';
    // document.getElementById('modal').style.position = 'fixed';
// }

// function close_model(){
    // document.getElementById('modal').style.display = 'none';
// }


