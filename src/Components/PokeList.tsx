import React, {useState,useEffect} from 'react'
import {Pokemon} from "../model"
import styled from 'styled-components'
import { Card } from './Card'
import { SearchBar } from './SearchBar'
import { Loading } from './Loading'

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
  const [activePokemons,setActivePokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (searchValue.length>1){
      setActivePokemons(listOfPokemons.filter(e=>e.name.toLowerCase().includes(searchValue.toLowerCase())))
    } else {
      setActivePokemons(listOfPokemons)
    }
  }, [searchValue,listOfPokemons])

  if(!listOfPokemons[0]) return <Loading/>
  
  return (
    <>
    <SearchBar setSearchValue={setSearchVal}/>
    <PokesList>
        {activePokemons.map((element)=><Card key={element.id} pokemon={element}></Card>)}
      </PokesList>

    </>
  )
}