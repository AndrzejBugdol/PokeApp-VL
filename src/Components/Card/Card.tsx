import React, { useState } from 'react';
import styled from 'styled-components';

import { Pokemon } from '../../types';
import { CardBackgroundColor } from '../../utils/colorsUtils';
import { CardModal } from './CardModal';

const CardDiv = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin: 1em;
  border-radius: 15px;
  box-shadow: 0px 5px 5px #8b98a633;
  justify-content: space-evenly;
`;
const TopBlock = styled.div<{ background: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${(props) => props.background};
  padding: 0 1em;
  border-radius: 15px 15px 0 0;
  height: 70%;
`;

const BottomBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${(props) => props.theme.background};
  transition: all 0.5s linear;
  padding: 0.3em 1em;
  border-radius: 0 0 15px 15px;
  align-items: center;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  width: 50%;
  filter: drop-shadow(5px 5px 5px #222);
`;
const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Overpass';
  font-weight: 500;
  color: white;
  margin: 20% 0;
  min-width: 20rem;
`;
const H5 = styled.h5`
  font-family: 'Overpass';
  font-size: 1rem;
  font-weight: 500;
  color: white;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px 0;
  margin-bottom: 5%;
  text-align: center;
  min-width: 90px;
`;
const DefButton = styled.button`
  appearance: none;
  color: ${(props) => props.theme.color};
  transition: all 0.5s linear;
  background-color: transparent;
  border: none;
  font: inherit;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5%;
  min-width: 50%;
`;

type CardProps = {
  pokemon: Pokemon;
};

const Card = ({ pokemon }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, type, image } = pokemon;

  return (
    <CardDiv>
      <TopBlock background={CardBackgroundColor[type[0]]}>
        <div style={{ paddingLeft: '1em', width: '20%' }}>
          <H1>{name}</H1>
          {type.map((singleType) => (
            <H5 key={singleType}>{singleType}</H5>
          ))}
        </div>
        <Image
          src={image}
          alt={name}
        />
      </TopBlock>
      <BottomBlock>
        <DefButton onClick={() => setIsModalOpen(true)}>
          <i
            className="fa fa-info-circle card-icon"
            style={{ background: CardBackgroundColor[type[0]] }}
          />{' '}
          Show details
        </DefButton>
        {isModalOpen ? (
          <CardModal
            pokemon={pokemon}
            onClose={() => setIsModalOpen(false)}
          />
        ) : null}
      </BottomBlock>
    </CardDiv>
  );
};

export default Card;
