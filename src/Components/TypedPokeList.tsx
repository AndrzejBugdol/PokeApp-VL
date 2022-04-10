import React, {useState,useEffect} from 'react'
import { PokemonType } from '../Utils/ColorsUtils'
import { SearchBar } from './SearchBar'
import { Card } from './Card'
import {Pokemon} from "../model"
import styled from 'styled-components'

const PokesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    justify-content: space-around;
    `
    const P = styled.p`
    padding-top:10%;
    text-align:center;
    line-height:1rem
    `

type Props = {
    listOfPokemons: Pokemon[];
}

export const TypedPokeList = ({listOfPokemons}: Props) => {
    const [searchValue,setSearchVal] = useState<string>("");
    const [activePokemons,setActivePokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        if (searchValue.length>1){
          setActivePokemons(listOfPokemons.filter(e=>e.name.toLowerCase().includes(searchValue.toLowerCase())))
        } else {
          setActivePokemons(listOfPokemons)
        }
      }, [searchValue,listOfPokemons])

  return (
      <>
    <SearchBar setSearchValue={setSearchVal}/>
    <PokesList>
        {activePokemons.length===0?<P>No pokemons found for selected values<br/>Try loading some more</P>:null}
        {activePokemons.map((element)=><Card key={element.id} pokemon={element}></Card>)}
      </PokesList>
    </>
  )
}