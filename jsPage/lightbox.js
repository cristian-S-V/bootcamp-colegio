const imagenes = document.querySelectorAll('.imagen_galeria');
const imagenLight = document.querySelector('.agregar-imagen');
const contendorLight = document.querySelector('.imagen_light');
const close = document.querySelector('.close');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    });
});

contendorLight.addEventListener('click', (e) => {
    if (e.target !== imagenLight && e.target !== close) {
        contendorLight.classList.remove('show');
        imagenLight.classList.remove('showImage');
    }
});

close.addEventListener('click', () => {
    contendorLight.classList.remove('show');
    imagenLight.classList.remove('showImage');
});

const aparecerImagen = (imagen) => {
    imagenLight.src = imagen;
    contendorLight.classList.add('show');
    imagenLight.classList.add('showImage');
};


