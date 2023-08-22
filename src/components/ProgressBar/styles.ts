import styled from 'styled-components';

export const Label = styled.h1`
  font-family: 'Overpass';
  font-size: 1rem;
  font-weight: 500;
  color: black;
  min-width: 7.5rem;
  padding: 0.25rem 0.25rem;
`;

export const Score = styled.h1`
  font-family: 'Overpass';
  font-size: 1rem;
  font-weight: 500;
  color: black;
  padding: 0.25rem 0;
`;

export const Body = styled.div`
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 0 0.5rem;
`;

export const Progress = styled.div<{ score: number }>`
  height: 100%;
  width: ${(props) => props.score}%;
  background: ${(props) => props.color};
  border-radius: inherit;
`;
