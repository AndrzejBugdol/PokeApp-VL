import styled from 'styled-components';

export const TypeButton = styled.button<{ background: string }>`
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

export const TypeContainer = styled.div`
  display: flex;
  padding: 3vh 5vw;
  width: 100%;
  border-bottom: 2px solid black;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: rgb(60, 60, 60, 0.3);
`;
