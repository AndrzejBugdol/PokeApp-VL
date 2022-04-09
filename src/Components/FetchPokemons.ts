import { Pokemon, PokeApiResponse } from "../model";

export const fetchPokemonsData = async (firstPokemonID:number) => {
  let listOfPokemons: Pokemon[] = [];
  let lastPokemonID: number = firstPokemonID+19;
 
  const listOfPromises: any[] = [];

  for (let i=firstPokemonID;i<=lastPokemonID;i++){
  const URL: string = `https://pokeapi.co/api/v2/pokemon/${i}`;

  listOfPromises.push(fetch(URL)
    .then((response)=>response.json()))
  }

  await Promise.all(listOfPromises)
    .then(data=>{
      const mapPokemons: Pokemon[] = data.map((data:PokeApiResponse)=>({
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        id: data.id,
        image: data.sprites.other.dream_world.front_default,
        type: data.types.map((type) => type.type.name),
        height: data.height,
        weight: data.weight,
        stats: {
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
          }
        }))
        listOfPokemons.push(...mapPokemons)
      });
    return listOfPokemons;
}
