import { PokeApiResponse, Pokemon } from '../types';

export const mapPokeData = (data: PokeApiResponse): Pokemon => {
  return {
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
    },
  };
};
