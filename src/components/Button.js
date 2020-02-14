import React from 'react';

const Button = ({ data: { color, text } }) => {
  const style = {
    backgroundColor: color,
    fontSize: '1.6rem',
    padding: '0.3rem'
  };

  return <div style={style}>{text}</div>;
};

export default Button;
