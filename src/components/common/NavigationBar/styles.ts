import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 78px;
  background: white;
  border-bottom: 2px solid black;
  transition: all 0.5s linear;
`;
export const Header = styled.h1`
  font-size: 2rem;
  font-family: 'Overpass';
  font-weight: 500;
  color: black;
  padding-left: 2rem;
`;

export const Ul = styled.ul`
  display: flex;
  padding-right: 2rem;
  gap: 3rem;
  align-items: center;
`;
export const Icon = styled.i`
  font-size: 1.5rem;
  -webkit-background-clip: text !important;

  &:hover {
    cursor: pointer;
  }
`;
