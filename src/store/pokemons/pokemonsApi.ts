import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PokeApiResponse, Pokemon } from '../../types';
import { mapPokeData } from '../../utils/mapPokeData';

const URL = `https://pokeapi.co/api/v2/pokemon/`;

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
          return response.map((data: PokeApiResponse) => mapPokeData(data));
        });
        return { data: results };
      },
    }),
  }),
});

export const { useGetPokemonsQuery } = pokeApi;
