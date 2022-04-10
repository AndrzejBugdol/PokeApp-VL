import React, {useState,useEffect} from 'react'
import {Pokemon} from "../model"
import styled from 'styled-components'
import { Card } from './Card'
import { SearchBar } from './SearchBar'
import { Loading } from './Loading'
import { TypeFilter } from './TypeFilter'
import { PokemonType } from '../Utils/ColorsUtils'

const PokesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    justify-content: space-around;
    `

type Props = {
    listOfPokemons: Pokemon[]
}

export const PokeList = ({listOfPokemons}: Props) => {
  const [searchValue,setSearchVal] = useState<string>("");
  const [typeValue,setTypeValue] = useState<string[]>([]);
  const [activePokemons,setActivePokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (searchValue.length>1){
      setActivePokemons(listOfPokemons.filter(e=>e.name.toLowerCase().includes(searchValue.toLowerCase())))
    } else {
      setActivePokemons(listOfPokemons)
    }
  }, [searchValue,listOfPokemons])

  
  
  const addTypes=(type:PokemonType) =>{
    if(typeValue.includes(type)) {
      setTypeValue(prev=>prev.filter(e=>e!==type)); 
  } else {
      setTypeValue(prev=>[...prev,type])
  }
  }

  const clearTypes=() =>{
    setTypeValue([])
  }

  useEffect(() => {
    if (typeValue.length>0){
      setActivePokemons(listOfPokemons.filter(e=>e.type.some(type=>typeValue.includes(type))))
    } else {
      setActivePokemons(listOfPokemons)
    }
  }, [typeValue,listOfPokemons])
  
  if(!listOfPokemons[0]) return <Loading/>
  
  return (
    <>
    <TypeFilter callback={addTypes} clearAll={clearTypes}/>
    <SearchBar setSearchValue={setSearchVal}/>
    <PokesList>
        {activePokemons.map((element)=><Card key={element.id} pokemon={element}></Card>)}
      </PokesList>

    </>
  )
}