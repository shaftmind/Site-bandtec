

function barramenu(){
    var pag = document.documentElement.scrollTop;

    if(pag > 50){
    document.getElementById('mycabeca').style.height = "123px"
    document.getElementById('mycabeca').style.transition = "3s"
    document.getElementById('mycabeca').style.position = "fixed"
    document.getElementById('home').style.paddingTop = "110px"
    document.getElementById('sobre').style.paddingTop = "110px"
    document.getElementById('galeria').style.paddingTop = "110px"
    document.getElementById('equipe').style.paddingTop = "110px"
    document.getElementById('diversos').style.paddingTop = "110px"
 } else{
    document.getElementById('mycabeca').style.height = "300px"
    document.getElementById('mycabeca').style.transition = "2s"
    document.getElementById('mycabeca').style.position = "fixed"
    document.getElementById('home').style.paddingTop = "300px"
    document.getElementById('sobre').style.paddingTop = "110px"
    document.getElementById('galeria').style.paddingTop = "110px"
    document.getElementById('equipe').style.paddingTop = "110px"
    document.getElementById('diversos').style.paddingTop = "110px"
 }
}
