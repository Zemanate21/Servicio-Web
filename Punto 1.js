const args = process.argv.slice(2);

if (args.length < 3) {
    console.log('Por favor ingresa dos números y una operación. Ejemplo: node operaciones.js 5 3 suma');
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operacion = args[2];

if (isNaN(num1) || isNaN(num2)) {
    console.log('Por favor ingresa números válidos.');
    process.exit(1);
}

function realizarOperacion(num1, num2, operacion) {
    switch (operacion.toLowerCase()) {
        case 'suma':
            console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`);
            break;
        case 'resta':
            console.log(`La resta de ${num1} y ${num2} es ${num1 - num2}`);
            break;
        case 'multiplicacion':
            console.log(`La multiplicación de ${num1} y ${num2} es ${num1 * num2}`);
            break;
        case 'division':
            if (num2 === 0) {
                console.log('Error: No se puede dividir entre 0');
            } else {
                console.log(`La división de ${num1} y ${num2} es ${num1 / num2}`);
            }
            break;
        default:
            console.log('Operación no válida. Las operaciones permitidas son: suma, resta, multiplicacion, division.');
    }
}

realizarOperacion(num1, num2, operacion);