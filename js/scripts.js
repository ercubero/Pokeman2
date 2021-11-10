let pokemonList = [
  {
    name: 'Ivysaur',
    height: 1,
    types: ['grass','poison']
  },
  {
    name: 'Charizard',
    height: "1.1",
    types: ['fire','flying']
  },
  {
    name: 'Weedle',
    height: 0.3,
    types: ['bug','poison']
  },
];

function myLoopFunction(pokemon) {
  console.log(pokemon.name +  ("\(Height: ") + pokemon.height + ")" + pokemon.types);
}
pokemonList.forEach(myLoopFunction);

for (let i=0; i < pokemonList.length; i++) {
if (pokemonList[i].height > 1) {
    document.write( pokemonList[i].name + ("\(Height: ") + pokemonList[i].height + " ) "  + "-Wow that's big!" + '<br>' );
  }
else {
    document.write( pokemonList[i].name + ("\(Height: ") + pokemonList[i].height + " ) " + "<br>" );
  }
}
