import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './Navbar';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #343535;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 4rem;
  padding: 1rem;
`;

const Logo = styled.div`
  padding: 1rem 2rem;
  font-size: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.div`
  padding: 0 2rem 1rem 0;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Header = () => {
  const buttons = [
    { text: 'עמוד הבית' },
    { text: 'יום הולדת 10' },
    { text: 'שופינג' },
    { text: 'תיירות' },
    { text: 'קופונים' },
    { text: 'מסעדות' },
    { text: 'לבית ולגן' },
    { text: 'אטרקציות' },
    { text: 'ספא ויופי' },
    { text: 'התחברות | הרשמה' }
  ];

  return (
    <Wrapper>
      <Logo>GROO</Logo>
      <Nav>
        <NavBar navButtons={buttons} />
        <SearchBar />
      </Nav>
    </Wrapper>
  );
};

export default Header;
