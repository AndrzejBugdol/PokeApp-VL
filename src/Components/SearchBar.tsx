import React, { useRef } from 'react'
import styled from 'styled-components'

const TopBox = styled.div`
padding: 1rem;
display:flex;
flex-direction:column;
align-items: center;

`
const Search = styled.input`
border: none;
border-bottom: 1px solid black;
padding: 0.37rem;
font-size:1rem;
font-family:"Overpass";
font-weight: 500;
width:200px;
text-align:center;

&:focus-visible {
  outline:none;
}
`

type Props = {
    setSearchValue: (value:string) => void;
}

export const SearchBar:React.FC<Props> = ({setSearchValue}: Props) => {
    const searchVal = useRef<HTMLInputElement>(null);  

    return (
        <TopBox>
            <Search placeholder='Search min. 2 letters' ref={searchVal} onChange={()=>setSearchValue(searchVal?.current?.value!)}/>
        </TopBox>
 
  )
}