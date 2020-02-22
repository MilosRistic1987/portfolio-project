var pokemon1 = {
  Ime: "Kakuna",
  vrsta: "Otrovna buba",
  Sposobnosti: ["mutacija", "kamuflaza"],
  Karakteristike: {
    napad: 25,
    odbrana: 50,
    brzina: 35
  }
};

var pokemon2 = {
  Ime: "Beedrill",
  vrsta: "Otrovna buba",
  Sposobnosti: ["roj", "sniper"],
  Karakteristike: {
    napad: 90,
    odbrana: 40,
    brzina: 75
  }
};

var pokemon3 = {
  Ime: "Jolteon",
  vrsta: "Elektricni",
  Sposobnosti: ["apsorbuje voltazu", "brze noge"],
  Karakteristike: {
    napad: 65,
    odbrana: 60,
    brzina: 130
  }
};

var pokemon4 = {
  Ime: "Raikou",
  vrsta: "Elektricni",
  Sposobnosti: ["trpi pritisak", "unutrasnji fokus"],
  Karakteristike: {
    napad: 85,
    odbrana: 75,
    brzina: 110
  }
};

var nizPokemona = [pokemon1, pokemon2, pokemon3, pokemon4];

function uporediPokemone(nizPokemona) {
  var pobednik;
  var najjaciPokemon = 0;
  nizPokemona.forEach(pokemon => {
    if (pokemon.Karakteristike.napad > najjaciPokemon) {
      pobednik = pokemon;
      najjaciPokemon = pokemon.Karakteristike.napad;
    }
  });
  return pobednik;
}

var wrapper = document.querySelector(".wraper");
var displayPokemon = document.querySelector("#prikaz");
var strongestPokemon = document.querySelector("#pobednik");

strongestPokemon.addEventListener("click", displayStrongestPokemon);
displayPokemon.addEventListener("click", addAllPokemons);

function displayStrongestPokemon() {
  wrapper.innerHTML = "";
  let element = uporediPokemone(nizPokemona);
  showPokemon(element);
}

function addAllPokemons() {
  wrapper.innerHTML = "";
  nizPokemona.forEach(element => {
    showPokemon(element);
  });
}

function showPokemon(element) {
  let div = document.createElement("div");
  // div.className = 'recept';
  let p = document.createElement("p");
  // p.textContent = `Opis: Ime: ${element.Ime}, vrsta: ${element.vrsta}, sposobnosti: ${element.Sposobnosti}, karakteristike: napad: ${element.Karakteristike.napad}, odbrana: ${element.Karakteristike.odbrana}, brzina: ${element.Karakteristike.brzina}`;
  p.innerHTML = `<span>Opis pokemona</span><ul><li>Ime: ${element.Ime}</li><li>Vrsta: ${element.vrsta}</li><li>Sposobnosti: ${element.Sposobnosti}</li><li>Karakteristike: napad: ${element.Karakteristike.napad}, odbrana: ${element.Karakteristike.odbrana}, brzina: ${element.Karakteristike.brzina}</li></ul>`;
  div.appendChild(p);
  let img = document.createElement("img");
  img.src = `${element.Ime}.jpg`;
  div.appendChild(img);
  wrapper.appendChild(document.createElement("hr"));
  wrapper.appendChild(div);
}
