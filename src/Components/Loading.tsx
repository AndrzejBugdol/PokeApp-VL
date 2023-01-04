import React from 'react';
import styled, { keyframes } from 'styled-components';
import pokeball from '../Assets/Pokeball.png';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const Logo = styled.img`
  height: auto;
  width: 10%;
  opacity: 0.2;
  animation: ${spin} 0.8s ease-in-out infinite;
`;

export const Loading: React.FC = () => {
  return (
    <LoadingDiv>
      <Logo
        src={pokeball}
        alt="Pokeball"
      />
    </LoadingDiv>
  );
};
