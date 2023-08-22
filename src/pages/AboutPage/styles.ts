import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 4rem;
  font-family: 'Overpass';
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin: 5% 0;
  min-width: 20rem;
  text-align: center;
`;
export const H5 = styled.h5`
  font-family: 'Overpass';
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  padding: 10px 0;
  line-height: 3rem;
  margin-bottom: 5%;
  text-align: center;
`;
