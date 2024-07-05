// Personaje TV
let personaje = {
  nombre: "Tanjiro",
  anime: "Demon Slayer",
  edad: 16,
}

console.log(personaje);
console.log(personaje.edad);
console.log(personaje['nombre'])

personaje.edad = 13;

personaje['edad'] = 16;

delete personaje.anime;