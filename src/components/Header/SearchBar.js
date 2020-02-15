import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  /* direction: RTL; */
`;

const SearchBar = () => {
  const [term, setTerm] = useState('סקי');

  const onTermChange = e => {
    setTerm(e.target.value);
  };

  return <Input type='text' value={term} onChange={onTermChange} />;
};

export default SearchBar;
