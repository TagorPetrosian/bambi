import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  ${props => props.wrapperStyle}
`;

const Button = ({ data: { text }, callback, warpperStyle }) => {
  const defaultStyle = {
    fontSize: '1.6rem',
    padding: '1rem 0 1rem 0',
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <Wrapper wrapperStyle={warpperStyle || defaultStyle}>
      <StyledButton onClick={() => callback(text)}>{text}</StyledButton>
    </Wrapper>
  );
};

export default Button;
