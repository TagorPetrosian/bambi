import React from 'react';
import Deal from './Deal';
import styled from 'styled-components';
import uuid from 'uuid';

const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  margin-bottom: 4rem;
  padding: 2rem;
`;

const DealsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  padding-bottom: 1rem;
`;

const Deals = ({ deals, title }) => {
  const renderDeals = () => {
    return deals.map(deal => {
      return <Deal key={uuid()} deal={deal} />;
    });
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <DealsWrapper>{renderDeals()}</DealsWrapper>
    </Wrapper>
  );
};

export default Deals;
