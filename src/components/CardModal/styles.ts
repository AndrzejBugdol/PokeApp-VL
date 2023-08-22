import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Overpass';
  font-weight: 500;
  color: black;
  margin: 1rem 0 1rem;
`;
export const ShadowBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const ModalBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 80%;
  width: 60%;
  z-index: 1000;
  display: flex;
  padding: 1rem;
  border-radius: 15px;
  justify-content: center;
`;
export const CloseButton = styled.button<{ background: string }>`
  appearance: none;
  color: white;
  background: ${(props) => props.background};
  border-radius: 50%;
  border: none;
  font: inherit;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
export const Image = styled.img`
  max-width: 100%;
  height: 90%;
  filter: drop-shadow(5px 5px 5px #222);
`;

export const PokeBox = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 15px;
  margin-bottom: 1rem;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Section = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
export const BaseSection = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
`;
export const TextBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`;
export const H5 = styled.h5`
  font-family: 'Overpass';
  font-size: 1rem;
  font-weight: 500;
  color: black;
  margin-bottom: 0.5rem;
  min-width: 150px;
  padding: 0.25rem 0.25rem;
`;
