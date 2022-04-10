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
transition: background-color 0.5s linear;
`
const MainButton = styled.button`
appearance:none;
color:${props => props.theme.color};
background-color: ${props => props.theme.background};
border: 2px solid ${props => props.theme.color};
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

const ErrorBlock = styled.div`
display:flex;
flex-direction:column;
padding: 0 5vw;
align-items: center;
min-height:10vh;
flex-grow:1;
background-color: linear-gradient(135deg, #D64545 40%, #EE4D4D);
transition: background-color 0.5s linear;
`

export const MainPage: React.FC = () => {
  const [indexOfFirstPokemon,setIndexOfFirstPokemon] = useState<number>(1);
  const [currentPokemons,setcurrentPokemons] = useState<Pokemon[]>([]);
  const [displayError,setdisplayError] = useState<boolean>(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {const response = await fetchPokemonsData(indexOfFirstPokemon)
        setcurrentPokemons((prev)=> [...prev,...response])
    }
      catch(error) {
        setdisplayError(true);
      }
    }
    fetchData();
  }, [indexOfFirstPokemon])

  const addMorePokemonsButtonHandler = () =>{
    setIndexOfFirstPokemon((prev)=>prev+20)
  }
  
  return (
    <Container>
      {displayError && <ErrorBlock>Failed to load the data.</ErrorBlock>}
      <PokeList listOfPokemons={currentPokemons}/>
      <MainButton onClick={addMorePokemonsButtonHandler}>Load more</MainButton>
    </Container>
  )
}