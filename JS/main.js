//AGREGAMOS LAS VARIABLES//
let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".list-container");
let containerMenu = document.querySelector(".menu");
let activador = true;
//FIN VARIABLES//

//DETECTAR CLICK BTN MENU//
btnMenu.addEventListener("click", (event) => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    
    if (activador) {
        menu.style.left = '0%';
        menu.style.transition = '0.5s';

        activador = false;
    }
    else {
        activador = false;
        menu.style.left = '-100%';
        
        activador = true
    }
})
//FIN DETECTAR CLICK BTN MENU//

//MENU ACTIVO//
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (element) =>{
    element.addEventListener('click', (event) => {
        enlaces.forEach( (link) => {
            link.classList.remove('activo');
        });
        event.target.classList.add('activo');

    });
})
//FIN MENU ACTIVO//

//EFECTO SCROLL//
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () =>{
    let currentScrollPos = window.pageYOffset;
    
    //MOSTRAR Y OCULTAR MENU
    if (prevScrollPos > currentScrollPos) {
        containerMenu.style.top = '0px';
        containerMenu.style.transition = '0.5s';
    }else{
        containerMenu.style.top = '-60px';
        containerMenu.style.transition = '0.5s';
    }
    prevScrollPos = currentScrollPos;
    //FIN MOSTRAR Y OCULTAR MENU

    //MOSTRAR Y OCULTAR SCROLL ESTILOS
    let arriba = window.pageYOffset;

    if(arriba <= 600) {
        containerMenu.style.borderBottom = 'none';
        goTop.style.right = '-100px';

    }else{
        containerMenu.style.borderBottom = '3px solid #1dd1a1';
        goTop.style.right = '0px';
        goTop.style.transition = '0.5s';

    }
    //FIN MOSTRAR Y OCULTAR SCROLL ESTILOS
}
//BOTONES IR ARRIBA Y MOSTRAR ABAJO//
goTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
let verAbajo = document.querySelector('#abajo')
  
verAbajo.addEventListener('click' , () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
})
//FIN BOTONES IR ARRIBA Y MOSTRAR ABAJO//
//FIN EFECTO SCROLL//
