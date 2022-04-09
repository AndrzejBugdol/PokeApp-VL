import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Pokemon } from '../model'
import { fetchPokemonsData } from './FetchPokemons'
import { PokeList } from './PokeList'

const Container = styled.div`
display:flex;
flex-direction:column;
margin: 0 5vw;
align-items: center;
`
const MainButton = styled.button`
appearance:none;
color:white;
background-color: rgb(90, 90, 90);
border:none;
border-radius: 15px;
padding:10px;
font:inherit;
margin:0;
cursor: pointer;
text-align:center;
min-width:10%;
margin: 5vh
`

export const MainPage: React.FC = () => {
  const [indexOfFirstPokemon,setIndexOfFirstPokemon] = useState<number>(1);
  const [currentPokemons,setcurrentPokemons] = useState<Pokemon[]>([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {const response = await fetchPokemonsData(indexOfFirstPokemon)
        setcurrentPokemons((prev)=> [...prev,...response])
        
    } 
      catch(error) {
        console.log(error)
      }
    }
    fetchData();
  }, [indexOfFirstPokemon])

  const addMorePokemonsButtonHandler = () =>{
    setIndexOfFirstPokemon((prev)=>prev+20)
  }
  
  return (
    <Container>
      <PokeList listOfPokemons={currentPokemons}/>
      <MainButton onClick={addMorePokemonsButtonHandler}>Load more</MainButton>
    </Container>
  )
}