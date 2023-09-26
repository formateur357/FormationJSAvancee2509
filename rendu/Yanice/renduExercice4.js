const basePokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/';

getPokemonById(1);

async function getPokemonById(pokemonId) {
    try {
        const pokemonIdUrl = `${basePokeApiUrl}${pokemonId}/`
        const response = await fetch(pokemonIdUrl);

        if (!response.ok) {
            throw new Error('An error has occured while fetching poke data');
        }

        const data = await response.json();

        if (data) {
            console.log(data);
            console.log(getPokemonInformationFormatted(data))
        }


    } catch (error) {
        console.log(`An error has occured while fetching poke data ${error}`);
    }
}

function getPokemonInformationFormatted(pokemonData) {
    return `Pokemon Information are 
Name : ${pokemonData.name} 
Weight : ${pokemonData.weight}
Height : ${pokemonData.height}
Number of abilities : ${pokemonData.abilities.length}`;
}
