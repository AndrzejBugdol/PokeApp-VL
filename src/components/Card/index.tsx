import { useState } from 'react';

import { Pokemon } from '../../types';
import { CardBackgroundColor } from '../../utils/colorsUtils';
import CardModal from '../CardModal';
import { CardDiv, H1, H5, TopBlock, Image, BottomBlock, DefButton } from './styles';

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
