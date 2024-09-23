// se llama el módulo 'fs' para trabajar con archivos
const fs = require('fs');

// aqui leemos el archivo 'input.txt'
fs.readFile('C:/Users/Julian/OneDrive/Desktop/UNICOMFACAUCA/OCTAVO SEMESTRE/SERVICIOS WEB/Node_Segundo/taller/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // con este comando convertimos el contenido a mayúsculas
    const contenidoMayusculas = data.toUpperCase();

    // y finalmente escribimos el nuevo archivo 'output.txt'
    fs.writeFile('C:/Users/Julian/OneDrive/Desktop/UNICOMFACAUCA/OCTAVO SEMESTRE/SERVICIOS WEB/Node_Segundo/taller/output.txt', contenidoMayusculas, (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
            return;
        }
        console.log("El archivo 'output.txt' ha sido creado con el contenido en mayúsculas.");
    });
});
