//Seleccionamos el elemento del HTML con ID 'contenedor-video'que contiene
//el iframe del video.
const contenedorVideo = document.getElementById('contenedor-video');
const iframe = contenedorVideo.querySelector('iframe');
//Selecciono todos los botones dentro del elemento con ID 'botones'
const botones = document.getElementById('botones');
// Obtener los botones
const botones1 = document.querySelectorAll('#botones button');
//Creo un diccionario 'videos' con las URLs de los videos
const videos = {
    video1: "https://www.youtube.com/embed/Y-IlMeCCtIg?si=UeggwNN9bZHu_wU-autoplay=1",
    video2: "https://www.youtube.com/embed/mzdfGCdNSHQ?si=4BlLBIq2qwXdy216",
    video3: 'https://www.youtube.com/embed/LY2XEQ_SSXA?si=RFj3Gqm6Gf1MAhjN',
    video4: 'https://www.youtube.com/embed/RnTmtVFTSf0?si=cx2GijeQtdFI99H0',
    video5: 'https://www.youtube.com/embed/tsStUN73_6I?si=V9AuQJvxJHap7vNL',
    video6: 'https://www.youtube.com/embed/cb12KmMMDJA?si=LNtaKG_za1TAOc4d',
    video7: "https://www.youtube.com/embed/iyOq8DhaMYw?si=0tV1k5GgijnZ_a4F",
    video8: 'https://www.youtube.com/embed/gN0PZCe-kwQ?si=5Za2Y5rR6N--eE_-',
    video9: 'https://www.youtube.com/embed/OAHHA27td-A?si=3dD9XvMqVnpszXD8',
    video10:'https://www.youtube.com/embed/8WX6YL9JnLw?si=noWVjwZz_r-LvtaX'
};
// ... (Agrega las URLs para todos los videos)
const imagenes = {
            "video1": "media/img/france242.png",
            "video2": "media/img/rtve.jpeg",
			"video3": "media/img/lnnoticias.jpeg",
			"video4": "media/img/26noticias1.png",
			"video5": "media/img/dw.jpeg",
			"video6": "media/img/tnnoticias.png",
			"video7": "media/img/bloomberg.jpeg",
			"video8": "media/img/abcnews.png",
			"video9": "media/img/yahoo1.jpg",
			"video10": "media/img/gbn.jpeg",

            // ... (Agrega las URLs para todos los videos)
        };


// Función para cambiar la URL del video
function cambiarVideo(idVideo) {
    const urlVideo = videos[idVideo];
    iframe.src = urlVideo;
    
}
// Función para aplicar redondez
function aplicarRedondez(boton) {
	boton.style.borderRadius = '50px'; // Redondear las esquinas
	boton.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.1)'; // Sombra sutil
	boton.style.width = "30px";
	boton.style.height= "30px";
	boton.style.textIndent= "-9999px";
}
// Asignar eventos 'click' a los botones. Recorro todos los elementos con el ID
// 'botones'   en el HTML y les 
//asigno un click y con el slice remuevo los primeros 4 caracteres del nombre del 
//botón en e HTML asi: el botón se llama btn-video1, al usar el slice queda
//video1, y asi con todos los demás nombres del botón en el HTML
botones.querySelectorAll('button').forEach(boton => {
    const idVideo = boton.id.slice(4); // Eliminar 'btn-' del ID
	const urlImagen = imagenes[idVideo]; // Obtener la URL de la imagen
	// Aplicar redondez a todos los botones
	botones1.forEach(boton => aplicarRedondez(boton));
    // Asignar la URL de la imagen al botón
  boton.style.backgroundImage = `url("${urlImagen}")`;
  boton.style.backgroundSize = "cover";
  boton.style.backgroundPosition = "center";
  boton.style.border = "none";
  boton.style.padding = "0";
  boton.style.cursor = "pointer";
  boton.style.borderRadios="25px";
    boton.addEventListener('click', () => cambiarVideo(idVideo));//Cambia video
    //del iframe
});
