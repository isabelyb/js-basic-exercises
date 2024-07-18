//Base de datos random:
let names = ['Sofía García', 'Mateo Rodríguez', 'Valentina Martínez', 'Santiago López', 'Isabella González', 'Sebastián Pérez', 'Mariana Sánchez', 'Alejandro Ramírez', 'Victoria Torres', 'Gabriel Flores'];
let id = [100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010];
let birthdate = ['2000-01-01', '2001-02-02', '2002-03-03', '2003-04-04', '2004-05-05', '2005-06-06', '2006-07-07', '2007-08-08', '2008-09-09', '2009-10-10'];
let email = ['flower@email.com', 'sun@email.com','moon@email.com','tree@email.com','mountain@email.com','rain@email.com','sea@email.com','rainbow@email.com','ladybug@email.com','seed@email.com'];
let cities = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta', 'Soledad', 'Ibagué', 'Soacha', 'Pereira'];
let birthCity = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta', 'Soledad', 'Ibagué', 'Soacha', 'Pereira'];
let songs = [
    { artista: 'Queen', song: 'Bohemian Rhapsody' },
    { artista: 'The Beatles', song: 'Hey Jude' },
    { artista: 'Led Zeppelin', song: 'Stairway to Heaven' },
    { artista: 'Pink Floyd', song: 'Comfortably Numb' },
    { artista: 'The Rolling Stones', song: '(I Can\'t Get No) Satisfaction' },
    { artista: 'The Doors', song: 'Light My Fire' },
    { artista: 'The Who', song: 'Baba O\'Riley' },
    { artista: 'The Kinks', song: 'You Really Got Me' },
    { artista: 'The Byrds', song: 'Turn! Turn! Turn!' },
    { artista: 'The Yardbirds', song: 'For Your Love' }
];

// Función para obtener 3 índices aleatorios del listado de canciones
function randomSongIndexes() {
    let indexes = [];
    while (indexes.length < 3) {
        let songIndex = Math.floor(Math.random() * 10);
        if (!indexes.includes(songIndex)) {
            indexes.push(songIndex);
        }
    }
    return indexes;
}

// Crear 6 personas aleatorias
let people = [];

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 10);
    let person = {
        name: names[randomIndex],
        id: id[randomIndex],
        birthdate: birthdate[randomIndex],
        email: email[randomIndex],
        city: cities[randomIndex],
        birthCity: birthCity[randomIndex],
        favoriteSongs: randomSongIndexes().map(index => songs[index]) // Asignar 3 canciones aleatorias únicas
    };
    people.push(person);
}

// Encontrar una persona aleatoria y traer su información
let randomPerson = people[Math.floor(Math.random() * 6)];
console.log(randomPerson);
