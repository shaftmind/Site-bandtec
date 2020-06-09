
var modal_cad = document.getElementById('modal_cadastro');

function open_modal(){
    modal_cad.classList.add('modal-ativo');
}

function close_modal(){
        modal_cad.classList.remove('modal-ativo');
   }

function cad_validado(){
    modal_cad.classList.add('cadastro_ativo');
}

// Teste 1 modal - 
//function open_modal(){
    // document.getElementById('modal').style.display = 'block';
    // document.getElementById('modal').style.position = 'fixed';
// }

// function close_model(){
    // document.getElementById('modal').style.display = 'none';
// }


// function barramenu(){
    // document.getElementById('mycabeca').style.height = "123px"
    // document.getElementById('mycabeca').style.transition = "3s"
    // document.getElementById('mycabeca').style.position = "fixed"
// }
