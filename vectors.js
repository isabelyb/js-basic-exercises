// Generar 2 vectores de 5 números aleatorios
let vector1 = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
let vector2 = Array.from({length: 5}, () => Math.floor(Math.random() * 100));

// Ordenar los vectores en orden ascendente
let sortedVector1 = vector1.slice().sort((a, b) => a - b);
let sortedVector2 = vector2.slice().sort((a, b) => a - b);

// Juntar ambos vectores
let combinedVector = sortedVector1.concat(sortedVector2);

// Ordenar el vector combinado en orden ascendente
let sortedCombinedVector = combinedVector.sort((a, b) => a - b);

// Imprimir los vectores
console.log("Vector1:", sortedVector1);
console.log("Vector2:", sortedVector2);
console.log("Vector Combinado:", JSON.stringify(sortedCombinedVector));







