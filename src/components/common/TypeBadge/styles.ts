import styled from 'styled-components';

export const Badge = styled.div<{ background: string }>`
  font-family: 'Overpass';
  font-size: 1rem;
  font-weight: 500;
  color: white;
  border-radius: 15px;
  background: ${(props) => props.background};
  padding: 10px 0;
  margin-bottom: 5%;
  text-align: center;
  max-width: 100px;
`;
