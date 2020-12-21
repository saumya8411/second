import React, { useState, createContext } from 'react';

export const DropDownContext = createContext();
// export const SortByContext = createContext();

export const DropDownContextProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [search, setSearch] = useState('');
  const [reloadTable, setReloadTable] = useState(false);

  const handleReloadTable = () => {
    console.log('reloading table');
    setReloadTable(!reloadTable);
  };

  return (
    <DropDownContext.Provider
      value={[
        selectedFilter,
        setSelectedFilter,
        selectedSort,
        setSelectedSort,
        search,
        setSearch,
        handleReloadTable,
      ]}
    >
      {children}
    </DropDownContext.Provider>
  );
};
