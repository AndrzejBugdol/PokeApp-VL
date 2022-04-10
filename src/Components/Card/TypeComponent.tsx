import React from 'react'
import styled from 'styled-components'
import {CardBackgroundColor, PokemonType} from "../../Utils/ColorsUtils"

const Stamp = styled.div<{background: string}>`
    font-family:"Overpass";
    font-size: 1rem;
    font-weight: 500;
    color: white;
    border-radius: 15px;
    background: ${props => props.background};
    padding: 10px 0;
    margin-bottom: 5%;
    text-align:center;
    max-width:100px;
`
type Props = {
    type:PokemonType;
}

export const TypeComponent = ({type}: Props) => {
  const color: string = CardBackgroundColor[type];  
  return (
    <Stamp background={color}>{type}</Stamp>
  )
}