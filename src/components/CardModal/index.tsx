import React from 'react';

import { Pokemon } from '../../types';
import { CardBackgroundColor } from '../../utils/colorsUtils';
import ProgressBar from '../ProgressBar';
import TypeComponent from '../TypeComponent';
import {
  BaseSection,
  CloseButton,
  Container,
  H1,
  H5,
  ModalBlock,
  PokeBox,
  Section,
  ShadowBlock,
  TextBox,
  Image,
} from './styles';

type CardModalProps = {
  pokemon: Pokemon;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CardModal = ({ pokemon, onClose }: CardModalProps) => {
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
                <TypeComponent
                  key={el}
                  type={el}
                />
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

export default CardModal;
