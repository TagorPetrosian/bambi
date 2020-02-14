import React, { useState } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useState('ski');

  const onTermChange = e => {
    setTerm(e.target.value);
  };

  return <input type="text" value={term} onChange={onTermChange} />;
};

export default SearchBar;
