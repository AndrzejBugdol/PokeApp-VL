import { PokemonType } from './Utils/ColorsUtils';

export type Pokemon = {
  name: string;
  id: number;
  image: string;
  type: PokemonType[];
  height: number;
  weight: number;
  stats: PokemonStats;
};

type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};

export type PokeApiResponse = {
  abilities: string[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: any;
  stats: any[];
  types: any[];
  weight: number;
};

export type ThemeType = {
  color: string;
  background: string;
  shadow: string;
};
