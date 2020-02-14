import React from 'react';
import Button from '../Button';
import uuid from 'uuid';

const Navbar = ({ navButtons }) => {
  const style = {
    width: '100%',
    height: '15%',
    display: 'flex'

    // flex: '0 0 100%'
  };
  const renderNavButtons = () => {
    return navButtons.map(item => {
      return <Button key={uuid()} data={item} />;
    });
  };
  return <div style={style}>{renderNavButtons()}</div>;
};

export default Navbar;
