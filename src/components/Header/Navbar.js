import React from 'react';
import Button from '../Button';
import uuid from 'uuid';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Navbar = ({ navButtons }) => {
  const style = {
    fontSize: '1.6rem',
    padding: '1rem 0 1rem 0',
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const clickHandler = item => {
    console.log(item);
  };

  const renderNavButtons = () => {
    return navButtons.map(item => {
      return (
        <Button
          key={uuid()}
          data={item}
          warpperStyle={style}
          callback={clickHandler}
        />
      );
    });
  };
  return <Wrapper>{renderNavButtons()}</Wrapper>;
};

export default Navbar;
