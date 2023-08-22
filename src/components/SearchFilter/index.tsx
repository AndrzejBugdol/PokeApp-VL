import { useRef } from 'react';

import { useFiltersContext } from '../../services/FiltersContext';
import { TopBox, Search } from './styles';

const SearchFilter = () => {
  const { setSearchValue } = useFiltersContext();

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

export default SearchFilter;
