import React, { useState, createContext } from 'react';
import { useEffect } from 'react';

export const DropDownContext = createContext();
// export const SortByContext = createContext();

export const DropDownContextProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [search, setSearch] = useState('');
  const [reloadTable, setReloadTable] = useState(false);

  // console.log(setReloadTable);

  const handleReloadTable = () => {
    console.log('reloading table');
    setReloadTable(!reloadTable);
  };

  useEffect(() => {
    console.log('context useffect called', handleReloadTable);
  });

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
        // reloadTable,
        // setReloadTable,
      ]}
    >
      {children}
    </DropDownContext.Provider>
  );
};
