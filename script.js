var menuVisible = false;

function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="nav-responsive";
        menuVisible=true;
    }
}