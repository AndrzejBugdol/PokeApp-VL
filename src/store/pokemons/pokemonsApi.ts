import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokeApiResponse, Pokemon } from '../../model';

const URL: string = `https://pokeapi.co/api/v2/pokemon/`;

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon[], number>({
      queryFn: async (firstId: number) => {
        const listOfPromises: Promise<PokeApiResponse>[] = [];
        for (let i = firstId; i <= firstId + 19; i++) {
          listOfPromises.push(fetch(URL + i).then((response) => response.json()));
        }
        const results = await Promise.all(listOfPromises).then((response) => {
          return response.map((data: PokeApiResponse) => ({
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
          }));
        });
        return { data: results };
      },
    }),
  }),
});

export const { useGetPokemonsQuery } = pokeApi;
