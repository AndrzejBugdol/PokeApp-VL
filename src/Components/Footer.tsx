import React from 'react'
import styled from 'styled-components'

const gitLink:string = "https://github.com/AndrzejBugdol/PokeApp-VL"

const FooterDiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height:10vh;
  background:white;
  border-top: 2px solid black;
  `
  const Header = styled.h1`
  font-size: 1.5rem;
  font-family:"Overpass";
  font-weight: 500;
  color: black;
  `

  const Paragraph = styled.p`
  font-size: 0.5rem;
  font-family:"Overpass";
  font-weight: 300;
  color: black;
  `
  const Icon = styled.i`
  transform:scale(1.5);
  color:black;
  `

export const Footer:React.FC = () => {
  return (
    <FooterDiv>
      <div style={{paddingLeft:"2rem"}}>
        <Header>PokeApp</Header>
        <Paragraph>Created by Andrzej Bugdol</Paragraph>
      </div>
      <div style={{paddingRight:"2rem"}}>
        <a  href={gitLink}><Icon className="fa fa-github"/></a>
      </div>
    </FooterDiv>
  )
}