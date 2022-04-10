import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Pokemon } from '../model'
import { fetchPokemonsData } from './FetchPokemons'
import { PokeList } from './PokeList'

export const Container = styled.div`
display:flex;
flex-direction:column;
padding: 0 5vw;
align-items: center;
min-height:79vh;
flex-grow:1;
background-color:${props => props.theme.background};
`
const MainButton = styled.button`
appearance:none;
color:black;
background-color: white;
border: 2px solid rgb(90, 90, 90);
border-radius: 15px;
padding:10px;
font:inherit;
margin:0;
cursor: pointer;
text-align:center;
min-width:10%;
margin: 7vh;
transition: all 0.2s linear;

&:hover{
  background-color: #f3efef;
}
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