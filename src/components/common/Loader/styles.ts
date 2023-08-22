import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;
export const Logo = styled.img`
  height: auto;
  width: 10%;
  opacity: 0.2;
  animation: ${spin} 0.8s ease-in-out infinite;
`;
