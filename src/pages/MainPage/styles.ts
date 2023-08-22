import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5vw;
  align-items: center;
  min-height: 79vh;
  flex-grow: 1;
  background-color: ${(props) => props.theme.background};
  transition: background-color 0.5s linear;
`;

export const MainButton = styled.button`
  appearance: none;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  border: 2px solid ${(props) => props.theme.color};
  border-radius: 15px;
  padding: 10px;
  font: inherit;
  margin: 0;
  cursor: pointer;
  text-align: center;
  min-width: 10%;
  margin: 7vh;
  transition: all 0.2s linear;

  &:hover {
    background-color: #f3efef;
  }
`;

export const ErrorBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  color: white;
  margin-top: 3vh;
  padding: 3vh 3vw;
  align-items: center;
  background: linear-gradient(135deg, #d64545 40%, #ee4d4d);
  transition: background-color 0.5s linear;
`;
