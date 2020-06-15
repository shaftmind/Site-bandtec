
var modal_cad = document.getElementById('modal_cadastro');
var modal_certo = document.getElementById('modal_ok')

function open_modal(){
    modal_cad.classList.add('modal-ativo');
}

function close_modal(){
        modal_cad.classList.remove('modal-ativo');
   }

function open_val(){
     modal_certo.classList.add('cadastro_ativo');
}

function close_val(){
    modal_certo.classList.remove('cadastro_ativo');
    modal_cad.classList.remove('modal-ativo')
}



// Teste 1 modal - 
//function open_modal(){
    // document.getElementById('modal').style.display = 'block';
    // document.getElementById('modal').style.position = 'fixed';
// }

// function close_model(){
    // document.getElementById('modal').style.display = 'none';
// }


