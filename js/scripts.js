<<<<<<< Updated upstream
const pokemonList = [
  {
    name: 'Ivysaur',
    height: 1,
    types: ['grass','poison']
  },
  {
    name: 'Charizard',
    height: 1.1,
    types: ['fire','flying']
  },
  {
    name: 'Weedle',
    height: 0.3,
    types: ['bug','poison']
  },
];

for (let i=0; i < pokemonList.length; i++) {
if (pokemonList[i].height > 1) {
    document.write( pokemonList[i].name + ("\(Height: ") + pokemonList[i].height + " ) "  + "-Wow that's big!" + '<br>' );
  }
else {
    document.write( pokemonList[i].name + ("\(Height: ") + pokemonList[i].height + " ) " + "<br>" );
  }
}
=======
const pokemonRepository = (function (){
    const pokemonList = [
      {
        name: 'Ivysaur',
        height: 1,
        types: ['grass','poison']
      },
      {
        name: 'Charizard',
        height: 1.1,
        types: ['fire','flying']
      },
      {
        name: 'Weedle',
        height: 0.3,
        types: ['bug','poison']
      },
    ];

    function getAll() {
      return pokemonList;
      }

      function add(pokemon) {
        pokemonList.push(pokemon);
      }

function addListItem(pokemon){
    let pokemonList = document.quearySelector('pokemonList')
    let pokemonListItem = document.createElement('li');
    let pokemonButton = document.createElement('button');
    pokemonButton.innerText = pokemon.name;
    pokemonButton.classList.add('pokemonButton')
    pokemonList.appendChild(pokemonButton);
    pokemonList.appendChild(pokemonListItem);
    pokemonButton.addEventListener('button', function(){
      showDetails(pokemon)
    });
  }
  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll
  };
})();
//pokemonRepository.getAll().forEach(function(pokemon) {
  //    if (pokemon.height > 1) {
    //    document.write( pokemon.name + ("\(Height: ") + pokemon.height + " ) " + "-Wow that's big!" + '<br>' )
      //}
      //else {
        //document.write( pokemon.name + ("\(Height: ") + pokemon.height + " ) " + "<br>" );
      //}
//});
>>>>>>> Stashed changes
