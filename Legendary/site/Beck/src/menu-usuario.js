

function barramenu(){
    var pag = document.documentElement.scrollTop;

    if(pag > 50){
    document.getElementById('mycabeca').style.height = "123px"
    document.getElementById('mycabeca').style.transition = "3s"
    document.getElementById('mycabeca').style.position = "fixed"
    document.getElementById('fabio').style.paddingTop = "200px"
    document.getElementById('danny').style.paddingTop = "110px"
    document.getElementById('paran').style.paddingTop = "110px"
    document.getElementById('high').style.paddingTop = "110px"
    document.getElementById('dogma').style.paddingTop = "110px"
 } else{
    document.getElementById('mycabeca').style.height = "300px"
    document.getElementById('mycabeca').style.transition = "2s"
    document.getElementById('mycabeca').style.position = "fixed"
    document.getElementById('fabio').style.paddingTop = "300px"
    document.getElementById('danny').style.paddingTop = "110px"
    document.getElementById('paran').style.paddingTop = "110px"
    document.getElementById('high').style.paddingTop = "110px"
    document.getElementById('dogma').style.paddingTop = "110px"
 }
}
