const firstPokemonTitle = document.getElementById("first-pokemon");
const secondPokemonTitle = document.getElementById("second-pokemon");
const button = document.getElementById("button");
const firstPokemonName = document.getElementById("first-pokemon-name");
const secondPokemonName = document.getElementById("second-pokemon-name");
const firstPokemonType = document.getElementById("first-pokemon-type");
const secondPokemonType = document.getElementById("second-pokemon-type");
const firstImg = document.getElementById("first-img");
const secondImg = document.getElementById("second-img");
const winner1 = document.getElementById("winner1");
const winner2 = document.getElementById("winner2");

async function getPokemon() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${generateRandomNumber()}`
  );
  const pokemon = await response.json();
  return pokemon;
  
}
let firstPokemon;
let secondPokemon;

async function initialize() {
  firstPokemon = await getPokemon();
  secondPokemon = await getPokemon();
  firstPokemonName.textContent = "name: " + firstPokemon.name;
  secondPokemonName.textContent = "name: " + secondPokemon.name;
  firstPokemonType.textContent = "type: " + firstPokemon.types[0].type.name;
  secondPokemonType.textContent = "type: " + secondPokemon.types[0].type.name;
  firstImg.src = firstPokemon.sprites.front_default;
  secondImg.src = secondPokemon.sprites.front_default;
}

function generateRandomNumber() {
  const randomNumber = Math.ceil(Math.random() * 900);
  return randomNumber;
}

button.addEventListener("click", async () => {
  winner1.textContent = "";
  winner2.textContent = "";
  firstPokemonTitle.style.background = "#555";
  secondPokemonTitle.style.background = "#555";
  winner1.style.transform = "";
  winner2.style.transform = "";
  winner1.style.transition = "";
  winner2.style.transition = "";
  await initialize();
  checkWinner();
});

function checkWinner() {
  const firstType = firstPokemon.types[0].type.name;
  const secondType = secondPokemon.types[0].type.name;
  if (
    firstType === "grass" &&
    (secondType === "ground" || secondType === "rock" || secondType === "water")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "grass" &&
    (firstType === "ground" || firstType === "rock" || firstType === "water")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "fairy" &&
    (secondType === "fighting" ||
      secondType === "dark" ||
      secondType === "dragon")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "fairy" &&
    (firstType === "fighting" || firstType === "dark" || firstType === "dragon")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "fighting" &&
    (secondType === "dark" || secondType === "ice" || secondType === "steel")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "fighting" &&
    (firstType === "dark" || firstType === "ice" || firstType === "steel")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "fire" &&
    (secondType === "grass" || secondType === "ice" || secondType === "steel")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "fire" &&
    (firstType === "grass" || firstType === "ice" || firstType === "steel")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "flying" &&
    (secondType === "bug" ||
      secondType === "fighting" ||
      secondType === "grass")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "flying" &&
    (firstType === "bug" || firstType === "fighting" || firstType === "grass")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "ice" &&
    (secondType === "dragon" ||
      secondType === "flying" ||
      secondType === "ground")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "ice" &&
    (firstType === "dragon" || firstType === "flying" || firstType === "ground")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "ground" &&
    (secondType === "electric" ||
      secondType === "fire" ||
      secondType === "poison")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "ground" &&
    (firstType === "electric" || firstType === "fire" || firstType === "poison")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "poison" &&
    (secondType === "fairy" || secondType === "grass")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "poison" &&
    (firstType === "fairy" || firstType === "grass")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "rock" &&
    (secondType === "bug" || secondType === "fire" || secondType === "ice")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "rock" &&
    (firstType === "bug" || firstType === "fire" || firstType === "ice")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "steel" &&
    (secondType === "fairy" || secondType === "ice" || secondType === "rock")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "steel" &&
    (firstType === "fairy" || firstType === "ice" || firstType === "rock")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
  if (
    firstType === "water" &&
    (secondType === "fire" || secondType === "ground" || secondType === "rock")
  ) {
    winner1.textContent = "winner";
    winner1.style.color = "black";
    winner1.style.fontSize = "40px";
    winner1.style.transform = "scale(2)";
    winner1.style.transition = "all .7s ease-in-out";
    firstPokemonTitle.style.background = "green";
  } else if (
    secondType === "water" &&
    (firstType === "fire" || firstType === "ground" || firstType === "rock")
  ) {
    winner2.textContent = "winner";
    winner2.style.color = "black";
    winner2.style.fontSize = "40px";
    winner2.style.transform = "scale(2)";
    winner2.style.transition = "all .7s ease-in-out";
    secondPokemonTitle.style.background = "green";
  }
}

