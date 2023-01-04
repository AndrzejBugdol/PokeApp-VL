import React, { useState } from 'react';
import styled from 'styled-components';
import { CardBackgroundColor, PokemonType } from '../../Utils/ColorsUtils';

const TypeButton = styled.button<{ background: string }>`
  appearance: none;
  color: black;
  background: ${(props) => props.background};
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px 5px;
  margin: 10px;
  font: inherit;
  cursor: pointer;
  text-align: center;
  min-width: 7%;
  transition: all 0.2s linear;

  &:hover {
    background: ${(props) => props.background};
    color: white;
  }

  &:active {
    background: ${(props) => props.background};
    color: white;
  }
`;

const TypeContainer = styled.div`
  display: flex;
  padding: 3vh 5vw;
  width: 100%;
  border-bottom: 2px solid black;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: rgb(60, 60, 60, 0.3);
`;

type Props = {
  callback: (type: PokemonType) => void;
  clearAll: () => void;
};

const ListOfTypes: PokemonType[] = [
  'normal',
  'fighting',
  'flying',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'unknown',
  'shadow',
  'poison',
];

export const TypeFilter: React.FC<Props> = ({ callback, clearAll }: Props) => {
  const [activeFilters, setactiveFilters] = useState<PokemonType[]>([]);

  const handleCallback = (type: PokemonType) => {
    if (activeFilters.includes(type)) {
      setactiveFilters((prev) => prev.filter((e) => e !== type));
    } else {
      setactiveFilters((prev) => [...prev, type]);
    }
    callback(type);
  };

  const handleclearAll = () => {
    setactiveFilters([]);
    clearAll();
  };

  return (
    <>
      <TypeContainer>
        {ListOfTypes.map((type) => (
          <TypeButton
            background={activeFilters.includes(type) ? CardBackgroundColor[type] : '#f3efef'}
            onClick={() => handleCallback(type)}
            key={type}>
            {type}
          </TypeButton>
        ))}
        <TypeButton
          background={CardBackgroundColor['unknown']}
          onClick={() => handleclearAll()}>
          Clear
        </TypeButton>
      </TypeContainer>
    </>
  );
};
