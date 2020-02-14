import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './Navbar';

const Header = () => {
  const buttons = [
    { text: 'Button', color: 'grey' },
    { text: 'Button', color: 'grey' },
    { text: 'Button', color: 'grey' },
    { text: 'Button', color: 'grey' },
    { text: 'Button', color: 'grey' },
    { text: 'Button', color: 'grey' }
  ];
  return (
    <>
      <NavBar navButtons={buttons} />
      <SearchBar />
    </>
  );
};

export default Header;
