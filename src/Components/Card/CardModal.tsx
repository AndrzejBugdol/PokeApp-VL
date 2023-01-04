import React from 'react';
import styled from 'styled-components';
import { Pokemon } from '../../model';
import { CardBackgroundColor } from '../../Utils/ColorsUtils';
import { ProgressBar } from './ProgressBar';
import { TypeComponent } from './TypeComponent';

const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Overpass';
  font-weight: 500;
  color: black;
  margin: 1rem 0 1rem;
`;
const ShadowBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
`;
const ModalBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 80%;
  width: 60%;
  z-index: 1000;
  display: flex;
  padding: 1rem;
  border-radius: 15px;
  justify-content: center;
`;
const CloseButton = styled.button<{ background: string }>`
  appearance: none;
  color: white;
  background: ${(props) => props.background};
  border-radius: 50%;
  border: none;
  font: inherit;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
const Image = styled.img`
  max-width: 100%;
  height: 90%;
  filter: drop-shadow(5px 5px 5px #222);
`;

const PokeBox = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 15px;
  margin-bottom: 1rem;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Section = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
const BaseSection = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
`;
const TextBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`;
const H5 = styled.h5`
  font-family: 'Overpass';
  font-size: 1rem;
  font-weight: 500;
  color: black;
  margin-bottom: 0.5rem;
  min-width: 150px;
  padding: 0.25rem 0.25rem;
`;

type Props = {
  pokemon: Pokemon;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CardModal = ({ pokemon, onClose }: Props) => {
  const color: string = CardBackgroundColor[pokemon.type[0]];

  return (
    <ShadowBlock>
      <ModalBlock>
        <CloseButton
          background={color}
          onClick={onClose}>
          <i
            className="fa fa-times"
            aria-hidden="true"
          />
        </CloseButton>
        <Container>
          <BaseSection>
            <PokeBox background={color}>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
              />
            </PokeBox>
            <TextBox>
              <H1>{pokemon.name}</H1>
              <H5>Type: </H5>
              {pokemon.type.map((el) => (
                <TypeComponent type={el} />
              ))}
              <H5>Height: {(pokemon.height * 0.1).toFixed(1)}m </H5>
              <H5>Weight: {(pokemon.weight * 0.1).toFixed(1)}kg</H5>
            </TextBox>
          </BaseSection>
          <Section>
            <H1>Base stats</H1>
            <ProgressBar
              type="HP"
              score={pokemon.stats.hp}
              maxScore={250}
              color={color}
            />
            <ProgressBar
              type="Attack"
              score={pokemon.stats.attack}
              maxScore={250}
              color={color}
            />
            <ProgressBar
              type="Defense"
              score={pokemon.stats.defense}
              maxScore={250}
              color={color}
            />
            <ProgressBar
              type="Special attack"
              score={pokemon.stats.specialAttack}
              maxScore={250}
              color={color}
            />
            <ProgressBar
              type="Special defense"
              score={pokemon.stats.specialDefense}
              maxScore={250}
              color={color}
            />
            <ProgressBar
              type="Speed"
              score={pokemon.stats.speed}
              maxScore={250}
              color={color}
            />
          </Section>
        </Container>
      </ModalBlock>
    </ShadowBlock>
  );
};
