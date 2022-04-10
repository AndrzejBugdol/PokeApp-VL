import React, {useState} from 'react'
import styled from 'styled-components'
import {CardBackgroundColor, PokemonType} from "../Utils/ColorsUtils"
import { Pokemon } from '../model'
import { CardModal } from './CardModal'

const CardDiv = styled.div`
position: relative;
width: 400px;
height: 250px;
display: flex;
flex-direction: column;
margin: 1em;
border-radius: 15px;
box-shadow: 0px 5px 5px #8b98a633;
justify-content: space-evenly
`
const TopBlock = styled.div<{background: string}>`
display: flex;
flex-direction: row;
justify-content: space-between;
background: ${props => props.background};
padding: 0 1em;
border-radius: 15px 15px 0 0;
height:70%
`

const BottomBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background: ${props => props.theme.background};
transition: all 0.5s linear;
padding: 0.3em 1em;
border-radius: 0 0 15px 15px;
align-items:center;
`
const Image = styled.img`
max-width: 100%;
height: auto;
width:50%;
filter: drop-shadow(5px 5px 5px #222);
`
const H1=styled.h1`
font-size: 2rem;
font-family:"Overpass";
font-weight: 500;
color: white;
margin: 20% 0;
min-width:20rem;
`
const H5=styled.h5`
font-family:"Overpass";
font-size: 1rem;
font-weight: 500;
color: white;
border-radius: 15px;
background-color: rgba(255,255,255, 0.2);
padding: 10px 0;
margin-bottom: 5%;
text-align:center;
min-width: 90px
`
const DefButton = styled.button`
appearance:none;
color:${props => props.theme.color};
transition: all 0.5s linear;
background-color: transparent;
border: none;
font:inherit;
margin:0;
cursor: pointer;
display:flex;
align-items:center;
gap:5%;
min-width:50%`

type SinglePokemon = {
  name: string;
  type : PokemonType[];
  image: string;
  id: number;
}
type Props = {
  pokemon: Pokemon;
}

export const Card: React.FC<Props> = ({pokemon}:Props) => { 
  const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false)
  const {name,type,image}:SinglePokemon = pokemon;
  
  return (
    <CardDiv>
      <TopBlock background={CardBackgroundColor[type[0]]}>
        <div style={{paddingLeft:"1em",width:"20%"}}>
          <H1>{name}</H1>
          {type.map(type=><H5 key={type}>{type}</H5>)}
        </div>
        <Image src={image} alt={name}></Image>
      </TopBlock>
      <BottomBlock>
      <DefButton onClick={()=>setmodalIsOpen(true)}><i className="fa fa-info-circle card-icon" style={{background:CardBackgroundColor[type[0]]}}></i> Show details</DefButton>
      {modalIsOpen ? <CardModal pokemon={pokemon} onClose={()=>setmodalIsOpen(false)}></CardModal> : null}
      </BottomBlock>
    </CardDiv>
  )
}


