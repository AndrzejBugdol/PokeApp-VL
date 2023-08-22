import { useRef } from 'react';

import { TopBox, Search } from './styles';

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
