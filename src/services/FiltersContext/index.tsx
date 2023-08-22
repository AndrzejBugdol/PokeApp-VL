import { useState, createContext, useContext, ReactNode } from 'react';

type FiltersContextType = {
  searchValue: string;
  typesValue: string[];
  setSearchValue: (value: string) => void;
  setTypesValue: (value: string) => void;
  clearTypesValue: () => void;
};

type FiltersProviderProps = {
  children: ReactNode;
};

export const FiltersContext = createContext<FiltersContextType>({
  searchValue: '',
  typesValue: [],
  setSearchValue: (value: string) => value,
  setTypesValue: (value: string) => value,
  clearTypesValue: () => undefined,
});

export const useFiltersContext = () => useContext(FiltersContext);

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [typesValue, setTypesValue] = useState<string[]>([]);

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const onTypeChange = (value: string) => {
    if (typesValue.includes(value)) {
      setTypesValue((prev) => prev.filter((e) => e !== value));
    } else {
      setTypesValue((prev) => [...prev, value]);
    }
  };

  const onClearTypes = () => {
    setTypesValue([]);
  };

  return (
    <FiltersContext.Provider
      value={{
        searchValue,
        typesValue,
        setSearchValue: onSearchChange,
        setTypesValue: onTypeChange,
        clearTypesValue: onClearTypes,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};
