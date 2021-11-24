// Menu mobile.
const btnMenu = document.getElementById('btn-menu'),
navegacion = document.getElementById('nav');

function ocultar() {
    navegacion.classList.add('d-none');
    navegacion.classList.remove('dropdown-content');
}

// enciende y apaga las clases.
btnMenu.addEventListener('click', () => {
    navegacion.classList.toggle('dropdown-content');
    navegacion.classList.toggle('d-none');
});

//funcion para cualquier clic en el documento
document.addEventListener("click", function (e) {
    /*obtiendo informacion del DOM para verificar si hacen click fuera
    del documento para quitar los estilos y evitar errores.*/
    var clic = e.target;

    if (clic != btnMenu) {
        ocultar();
    }
});

// carrusel dependiendo el tamaño de la imagen
var imgMobile = [
    'img/artas-header.jpg',
    'img/arthas.jfif',
    'img/dk.jpg',
    'img/arthas1.jpg',
    'img/arthas2.jpg',
    'img/arthas3.jpg',
    'img/arthas4.jpg',
    'img/arthas5.png',
    'img/arthas6.jpg',
];

var imgDesktop = [
    'img/arthas vs illidan dark.jpg',
    'img/arthas.png',
    'img/arthas-cool.jpg',
    'img/arthas.jpg',
    'img/arthasd1.jpg',
    'img/arthas vs illidan.jpg'
];

let num = 0;
let atras = document.getElementById('back');
let adelante = document.getElementById('next');
let ancho = document.documentElement.clientWidth;

adelante.addEventListener('click',() => {
    let img = document.getElementById('img-principal');
    if(ancho > 1024){
        num ++;
        if(num >= imgDesktop.length){
            num = 0;
        }
        img.src = imgDesktop[num];
    }else{
        num ++;
        if(num >= imgMobile.length){
            num = 0;
        }
        img.src = imgMobile[num];
    }
});

atras.addEventListener('click', () => {
    let img = document.getElementById('img-principal');
    if(ancho > 1024){
        num --;
        if(num < 0){
            num = imgDesktop.length - 1;
        }
        img.src = imgDesktop[num];
    }else{
        num --;
        if(num < 0){
            num = imgMobile.length - 1;
        }
        img.src = imgMobile[num];
    }
});

function tamanio(){
    let ancho = document.documentElement.clientWidth;
    let content = document.getElementById('img-dinamicas');

    if(ancho > 1100){
        content.innerHTML = '<img src="img/arthas vs illidan dark.jpg" alt="" id="img-principal">';
        
    }else if(ancho < 1024){
        content.innerHTML = '<img src="img/artas-header.jpg" alt="" id="img-principal">';
    }
}
