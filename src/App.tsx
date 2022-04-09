import React from 'react';
import './App.css';
import {fetchPokemonsData} from "./FetchPokemons"

type Props = {}

export default function App({}: Props) {
  fetchPokemonsData(1)

  return (
    <div>
      <p>hello world</p>
    </div>
  )
}