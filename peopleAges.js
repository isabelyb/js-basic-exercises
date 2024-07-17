// importar el modulo para leer datos de la consola
const readline = require('readline');

//declarar un arreglo vacio para guardar las edades
let peopleAges = [];

//funcion para agregar edades al arreglo
function addAge(age) {
    if (age >= 1 && age <= 120) {
        peopleAges.push(age);
    } else {
        console.log('Error: Ingrese un valor entre 1 y 120 años');
    }
}

//funcion para contar las edades
function countAges() {
    let underAge = 0;
    let ofAge = 0;
    let olderAdults = 0;
    let lowestAge = peopleAges[0];
    let highestAge = peopleAges[0];
    let totalAges = 0;

    for (let i = 0; i < peopleAges.length; i++) {
        if (peopleAges[i] < 18) {
            underAge++;
        } else if (peopleAges[i] >= 60) {
            olderAdults++;
        } else {
            ofAge++;
        }

        if (peopleAges[i] < lowestAge) {
            lowestAge = peopleAges[i];
        }

        if (peopleAges[i] > highestAge) {
            highestAge = peopleAges[i];
        }

        totalAges += peopleAges[i];
    }

    let averageAge = totalAges / peopleAges.length;

 
    //Imprimir resultados
    console.log('------------');
    console.log('Resultados:');
    console.log('------------');
    console.log(`Edades ingresadas: ${peopleAges}`);
    console.log(`1. Menores de edad: ${underAge}`);
    console.log(`2. Mayores de edad: ${ofAge + olderAdults}`);
    console.log(`3. Adultos mayores: ${olderAdults}`);
    console.log(`4. Edad más baja: ${lowestAge}`);
    console.log(`5. Edad más alta: ${highestAge}`);
    console.log(`6. Promedio de edades: ${averageAge}`);
}

//funcion para preguntar la edad
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askAge(rl, count) {
    if (count < 10) {
        rl.question(`Ingrese la edad #${count + 1}: `, (answer) => {
            let age = parseInt(answer);
            if (!isNaN(age) && age >= 1 && age <= 120) {
                addAge(age);
                askAge(rl, count + 1);
            } else {
                console.log('Error: Ingrese un valor entre 1 y 120 años');
                askAge(rl, count); // Preguntar de nuevo sin incrementar el conteo
            }
        });
    } else {
        rl.close();
        countAges();
    }
}

//iniciar el programa
askAge(rl, 0);