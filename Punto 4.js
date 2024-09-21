const fs = require('fs').promises;

function leerArchivoAsync(rutaArchivo) {
    fs.readFile(rutaArchivo, 'utf8')
    .then((contenido) => {
        console.log('Contenido del archivo:');
        console.log(contenido);
    })
    .catch((error) => {
        console.log('Error al leer el archivo:', error.message);
    });
}

const rutaDelArchivo = './Instrucciones.txt';
leerArchivoAsync(rutaDelArchivo);
