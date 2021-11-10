let pokemonRepository = (function (){
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
    function add(pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
      }

      return {
        add: add,
        getAll: getAll()
      };
    })();

pokemonRepository.getAll.forEach(function(pokemon) {
      if (pokemon.height > 1) {
        document.write( pokemon.name + ("\(Height: ") + pokemon.height + " ) " + "-Wow that's big!" + '<br>' )
      }
      else {
        document.write( pokemon.name + ("\(Height: ") + pokemon.height + " ) " + "<br>" );
      }
});
