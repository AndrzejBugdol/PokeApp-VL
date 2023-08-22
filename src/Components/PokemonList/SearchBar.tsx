import React, { useRef } from 'react';
import styled from 'styled-components';

const TopBox = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Search = styled.input`
  padding: 0.37rem;
  font-size: 1rem;
  font-family: 'Overpass';
  font-weight: 500;
  width: 200px;
  text-align: center;
  border: 2px solid ${(props) => props.theme.color};
  border-radius: 15px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: all 0.5s linear;

  &::placeholder {
    color: ${(props) => props.theme.color};
  }
  &:focus-visible {
    outline: none;
  }
`;

type SearchBarProps = {
  setSearchValue: (value: string) => void;
};

const SearchBar = ({ setSearchValue }: SearchBarProps) => {
  const searchVal = useRef<HTMLInputElement | null>(null);

  return (
    <TopBox>
      <Search
        placeholder="Search min. 2 letters"
        ref={searchVal}
        onChange={() => setSearchValue(searchVal.current?.value ?? '')}
      />
    </TopBox>
  );
};

export default SearchBar;
