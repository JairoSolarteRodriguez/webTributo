// Reproductor de audio
const anterior = document.getElementById('anterior'), 
siguiente = document.getElementById('siguiente'),
sonido = document.getElementById('aud'),
imagen = document.getElementById('img-reproductor'),
titulo = document.getElementById('titulo-rproductor');

let num = 0;

let musica = {
    audio: [
        'audio/mySon.mp3',
        'audio/invencible.mp3',
        'audio/dk.mp3'
    ],
    imagen:[
        'img/arthas-cool.jpg',
        'img/arthasinvencible.jpg',
        'img/frostmourne.jpg'
    ],
    nombre:[
        'Arthas - My Son',
        'Arthas - Invencible',
        'WoW - Arise, A Death Knight'
    ]
}

anterior.addEventListener('click', () => {
        num --;
        if(num < 0){
            num = musica.audio.length - 1;
        }
        sonido.src = musica.audio[num];
        imagen.src = musica.imagen[num];
        titulo.innerText = musica.nombre[num]
});

siguiente.addEventListener('click', () => {
    num ++;
    if(num >= musica.audio.length){
        num = 0;
    }
    sonido.src = musica.audio[num];
    imagen.src = musica.imagen[num];
    titulo.innerText = musica.nombre[num]
});