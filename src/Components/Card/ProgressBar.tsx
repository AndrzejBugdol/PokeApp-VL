import React from 'react'
import styled from 'styled-components'

const Label = styled.h1`
font-family:"Overpass";
font-size: 1rem;
font-weight: 500;
color: black;
min-width:7.5rem;
padding: 0.25rem 0.25rem;
`
const Score = styled.h1`
font-family:"Overpass";
font-size: 1rem;
font-weight: 500;
color: black;
padding: 0.25rem 0;
`
const Body=styled.div`
    height: 20px;
    width: 100%;
    background-color: #e0e0de;
    border-radius: 50px;
    margin: 0 0.5rem
`
const Progress=styled.div<{score: number}>`
    height: 100%;
    width: ${props=>props.score}%;
    background: ${props=>props.color};
    border-radius: inherit;
`

type Props = {
    type: string;
    score: number;
    maxScore: number;
    color: string;
}

export const ProgressBar: React.FC<Props> = ({type, score, maxScore, color }: Props) => {
  return (
    <div style={{width:"100%", height:"100%",display:"flex",justifyContent:'center'}}>
        <Label>{type}</Label>
            <Body>
                <Progress score={score/maxScore*100} color={color}>
                </Progress>
            </Body>
        <Score>{score}/{maxScore}</Score>
    </div>
  )
}